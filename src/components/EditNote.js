/**
 * File Name: HomeScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen allows users to search for an existing customer
 * or navigate to the screen to add a new custoemr to the database.
 *
 * Purpose: Provides users with the ability to search for customers in the
 * database and navigate to the screen to add new customers.
 */
// Import Statements
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {submitNote, submitTimerInfo} from '../../api/TimerApi';
import UploadNoteImage from '../components/UploadNoteImage';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {
  addNote,
  getTimerNotes,
  updateNote,
  UploadMedia,
} from '../../api/UtilityApi';
import {storage} from 'react-native-firebase';
import EditNotePopup from '../components/EditNotePopup';
import * as Progress from 'react-native-progress';
import Icons from './Icons';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faImage,
  faEllipsisV,
  faCamera,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
// Start of Home Screen Display
const EditNote = props => {
  const customer = props.customer;
  const utilityType = props.utilityType;
  const utility = props.utility;
  const [noteType, setNoteType] = useState(props.noteType);
  const [noteID, setNoteID] = useState(props.noteID);
  const note = props.note;
  //const utilityNotes = props.utilityNotes;
  const utilityNotes = props.utilityNotes;
  const [employeeName, setEmployeeName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [mediaType, setMediaType] = useState('');
  const [numMediaToUpload, setNumMediaToUpload] = useState(0);
  const [mediaUploadCounter, setMediaUploadCounter] = useState(0);
  const [addedImages, setAddedImages] = useState(false);
  const [numImages, setNumImages] = useState(0);
  const [noteTitle, setNoteTitle] = useState(props.noteTitle);
  const [noteText, setNoteText] = useState(props.noteText);
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [imageRefs, setImageRefs] = useState(props.note.imageRefs);
  const [noteTitlePlaceholder, setNoteTitlePlaceholder] = useState('Title');
  const [noteTextPlaceholder, setNoteTextPlaceholder] = useState('Message');
  //setOldNote(props.note);
  const submitNote = (
    customer,
    numImages,
    images,
    imageRefs,
    utilityType,
    utility,
    noteTitle,
    noteText,
    noteID,
    noteType,
    navigation,
  ) => {
    var utilityNote = {noteTitle, noteText, noteID, noteType};
    utilityNote.title = noteTitle;
    utilityNote.noteText = noteText;
    utilityNote.noteID = noteID;
    utilityNote.noteType = noteType;
    //console.log(videos[0]);
    updateNote(
      customer,
      utilityType,
      utility,
      utilityNote,
      imageRefs,
      numImages,
      navigation,
    );
    UploadMedia(images, customer, utility, utilityNote);
    //mediaUploadCounter = 0
  };

  const UploadMedia = async (images, customer, utility, utilityNote) => {
    console.log(uploading);
    //console.log(media[counter].source);
    var counter = 0;
    //const [image, setImage] = useState(null);
    //const [uploading, setUploading] = useState(false);
    // const [transferred, setTransferred] = useState(0);
    //console.log(images);
    setMediaType('Image');
    setNumMediaToUpload(images.length);
    setMediaUploadCounter(1);
    while (counter < images.length) {
      setTransferred(0);

      setUploading(true);
      //console.log(uploading);
      const uri = images[counter];
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      var task;
      if (utilityNote.noteType !== 'GeneralNotes') {
        task = storage()
          .ref(
            'Customers' +
              '/' +
              customer.id +
              '/' +
              utility.utilityType +
              '/' +
              utility.id +
              '/' +
              utilityNote.noteType +
              '/' +
              utilityNote.noteID +
              '/' +
              filename,
          )
          .putFile(uploadUri);
      } else {
        task = storage()
          .ref(
            'Customers' +
              '/' +
              customer.id +
              '/' +
              utilityNote.noteType +
              '/' +
              utilityNote.noteID +
              '/' +
              filename,
          )
          .putFile(uploadUri);
      }
      //  console.log(uploadUri);
      // set progress state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      console.log(uploading);
      try {
        await task;
      } catch (e) {
        console.log('Error: Upload failed');
        console.error(e);
      }

      counter++;
     /* Alert.alert(
        'Photo uploaded!',
        'Your photo has been uploaded to Firebase Cloud Storage!',
      );*/
      setUploading(false);
      setMediaUploadCounter(counter + 1);
    }

    //setUploading(false);
    console.log('Done Adding Media');
    // setImage(null);
    console.log(utilityType);
    console.log(utilityType === 'Timers');
    if (utilityType === 'Timers') {
      props.navigation.navigate('TimerInfo', {
        customer: customer,
        utility: utility,
        noteType: noteType,
      });
    } else if (utilityType === 'ShutOffValves') {
      props.navigation.navigate('ShutOffInfo', {
        customer: customer,
        utility: utility,
        noteType: noteType,
      });
    } else if (utilityType === 'SolenoidValves') {
      props.navigation.navigate('SolenoidValvesInfo', {
        customer: customer,
        utility: utility,
        noteType: noteType,
      });
    } else {
      props.navigation.navigate('Customer', {
        customer: customer,
      });
    }
  };

  function checkDuplicateImageRefs(ref) {
    var contains = false;
    for (var i = 0; i < imageRefs.length; i++) {
      if (imageRefs[i].imageRef === ref) {
        contains = true;
        break;
      }
    }
    return contains;
  }

  //const [uploading, setUploading] = useState(false);
  //const [transferred, setTransferred] = useState(0);
  function selectImage() {
    var areImagesAdded = addedImages;
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    })
      .then(images => {
        var numImagesCounter = numImages;
        for (var i = 0; i < images.length; i++) {
          let imageRef = 'Customers' + '/' + customer.id + '/';
          if (noteType !== 'GeneralNotes') {
            imageRef = imageRef + utility.utilityType + '/' + utility.id + '/';
          }
          imageRef = imageRef + noteType; // +
          //'/';
          imageRef =
            imageRef +
            '/' +
            noteID +
            '/' +
            images[i].path.substring(images[i].path.lastIndexOf('/') + 1);
          if (imageRefs.length < 20) {
            console.log(imageRefs.length);
            //checkDuplicateRefs(imageRefs, numImages, imageRef)
            if (!checkDuplicateImageRefs(imageRef)) {
              setImagesToUpload(prevItems => [...prevItems, images[i].path]);
              setImageRefs(prevItems => [...prevItems, {imageRef}]);
              numImagesCounter++;
              console.log(numImagesCounter);
              setNumImages(numImagesCounter);
              setAddedImages(true);
              console.log(addedImages);
            }
          }
          props.onChange?.(images);
        }
      })
      .catch(error => {
        console.log(error.code);
        if (error.code === 'E_NO_IMAGE_DATA_FOUND') {
          Alert.alert('Please Do Not Select Images From Other Apps');
        }
      });
  }

  function selectImageFromCamera() {
    var areImagesAdded = addedImages;
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      //multiple: true,
    }).then(image => {
      var numImagesCounter = numImages;
      let imageRef = 'Customers' + '/' + customer.id + '/';
      if (noteType !== 'GeneralNotes') {
        imageRef = imageRef + utility.utilityType + '/' + utility.id + '/';
      }
      imageRef = imageRef + noteType; // +
      //'/';

      imageRef =
        imageRef +
        '/' +
        noteID +
        '/' +
        image.path.substring(image.path.lastIndexOf('/') + 1);

      if (imageRefs.length < 20) {
        if (!checkDuplicateImageRefs(imageRef)) {
          setImagesToUpload(prevItems => [...prevItems, image.path]);
          setImageRefs(prevItems => [...prevItems, {imageRef}]);
          numImagesCounter++;
          setNumImages(numImagesCounter);
          setAddedImages(true);
          console.log(addedImages);
        }
      }
      props.onChange?.(image);
    });
  }

  const popupList = [
    {
      id: 1,
      name: 'Delete Note',
      deleteNote: true,
    },
    {
      id: 2,
      name: 'Delete Photos',
      deleteNote: false,
    },
  ];
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  /** Code for displaying images while uploading
   *             {images.length
              ? images.map(image => {
                  return (
                    <View style={styles.itemView}>
                      <Image
                        source={{uri: image.uri}}
                        style={styles.imageBox}
                      />
                    </View>
                  );
                })
              : null}*/
  console.log(customer.id);

  return (
    <View>
      <View style={styles.iconHeader}>
        <Icons icon={'stickyNote'} size={'medium'} />
      </View>
      <View style={styles.noteHeaderBar}>
        <View style={styles.noteTitle}>
          <Text style={styles.noteTitleText}>Edit Note</Text>
        </View>
        <View style={styles.editIcon}>
          <TouchableOpacity onPress={onShowPopup}>
            <FontAwesomeIcon icon={faEllipsisV} size={23} />
          </TouchableOpacity>
          <EditNotePopup
            title={'Options'}
            ref={target => (popupRef = target)}
            onTouchOutside={onClosePopup}
            data={popupList}
            customer={customer}
            note={note}
            navigation={props.navigation}
            utilityType={utilityType}
            utility={utility}
            employeeName={employeeName}
          />
        </View>
      </View>

      <ScrollView style={{height: '35%'}}>
        <Text style={styles.noteTitleLabel}> Name: </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            textAlignVertical={'top'}
            multiline={true}
            style={styles.textInput}
            // Text Input Box for the customer's first name
            // Text Input Box for the customer's first name
            placeholder={'Name'}
            value={employeeName}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setEmployeeName(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <Text style={styles.noteTitleLabel}> Title: </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            textAlignVertical={'top'}
            multiline={true}
            style={styles.textInput}
            // Text Input Box for the customer's first name
            // Text Input Box for the customer's first name
            placeholder={noteTitlePlaceholder}
            value={noteTitle}
            onChangeText={text => setNoteTitle(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <Text style={styles.noteMessageLabel}> Message: </Text>
        <View style={styles.noteMessageInputContainer}>
          <TextInput
            style={styles.textInput}
            textAlignVertical={'top'}
            multiline={true}
            // Text Input Box for the customer's first name
            // Text Input Box for the customer's first name
            // Text Input Box for the customer's last name
            placeholder={noteTextPlaceholder}
            value={noteText}
            onChangeText={text => setNoteText(text)}
          />
        </View>
      </ScrollView>
      <View style={styles.addTextFieldDivider} />
      <View style={styles.infoChildContainer}>
        <FontAwesomeIcon icon={faImage} size={17} style={styles.icons} />
        <Text style={styles.labelText}># Images Selected: </Text>
        <Text style={styles.infoText}>{numImages}</Text>
      </View>
      <StatusBar barStyle={'dark-content'} />
      <View >
        {uploading ? (
          <View style={styles.editNoteProgressBarContainer}>
            <Progress.Bar progress={transferred} width={300} color={'#26660b'}/>
            <Text style={styles.labelText}>
              {' '}
              {mediaType} {mediaUploadCounter} out of {numMediaToUpload} is
              being uploaded...
            </Text>
          </View>
        ) : (
          <ScrollView>
            <View style={styles.editPhotoButtonContainer}>
              <TouchableOpacity
                style={styles.generalButtonStyle}
                onPress={selectImage}>
                <FontAwesomeIcon icon={faImage} size={33} />
                <Text style={styles.buttonText}>Pick an image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.generalButtonStyle}
                onPress={selectImageFromCamera}>
                <FontAwesomeIcon icon={faCamera} size={33} />
                <Text style={styles.buttonText}>Take a Picture</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.longDivider}/>
            <View style={styles.submitDataButtonContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.generalButtonStyle}>
                <FontAwesomeIcon icon={faTimes} size={40} color={'#cc0000'} />
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.generalButtonStyle}
                onPress={() => {
                  //console.log(noteTitle);
                  {
                    (noteTitle !== '' && employeeName !== '')
                      ? //console.log(noteTitle),
                        //  console.log(currNote.videoRefs[0].videoRef),
                        submitNote(
                          customer,
                          numImages,
                          imagesToUpload,
                          imageRefs,
                          utilityType,
                          utility,
                          noteTitle,
                          noteText,
                          noteID,
                          noteType,
                          employeeName,
                          props.navigation,
                        )
                      : Alert.alert(
                      'Please Enter a Name and a Title',
                      'All notes must have a name and title',
                      );
                  }
                }}>
                <FontAwesomeIcon icon={faCheck} size={40} color={'#26660b'} />
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        )}
      </View>
    </View>
  );
};
// End of Home Screen Display

// End of Home Screen Display

export default EditNote;
