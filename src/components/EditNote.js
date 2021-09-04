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
// Start of Home Screen Display
const EditNote = props => {
  const currNote = {
    numImages: 0,
    numVideos: 0,
    title: '',
    titlePlaceholder: 'Title',
    noteText: '',
    noteTextPlaceholder: 'Text',
    images: [],
    imageRefs: [],
    videos: [],
    videoRefs: [],
    noteID: '',
  };
  const customer = props.customer;
  const utilityType = props.utilityType;
  const utility = props.utility;
  const [noteType, setNoteType] = useState(props.noteType);
  const [noteID, setNoteID] = useState(props.noteID);
  const note = props.note;
  //const utilityNotes = props.utilityNotes;
  const utilityNotes = props.utilityNotes;
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [mediaType, setMediaType] = useState('');
  const [numMediaToUpload, setNumMediaToUpload] = useState(0);
  const [mediaUploadCounter, setMediaUploadCounter] = useState(0);
  const [addedImages, setAddedImages] = useState(false);
  const [numImages, setNumImages] = useState(props.numImages);
  const [noteTitle, setNoteTitle] = useState(props.noteTitle);
  const [noteText, setNoteText] = useState(props.noteText);
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [imageRefs, setImageRefs] = useState(props.imageRefs);
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

  const UploadMedia = async (
    images,
    videos,
    customer,
    utility,
    utilityNote,
  ) => {
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
      Alert.alert(
        'Photo uploaded!',
        'Your photo has been uploaded to Firebase Cloud Storage!',
      );
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
          if (props.note.imageRefs.length > 0 && !areImagesAdded) {
            console.log('Cardinals');
            setImageRefs(props.note.imageRefs);
            areImagesAdded = true;
            setAddedImages(true);
          }
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

      if (props.note.imageRefs.length > 0 && !areImagesAdded) {
        setImageRefs(props.note.imageRefs);
        areImagesAdded = true;
        setAddedImages(true);
      }

      if (imageRefs.length < 20) {
        console.log('BrewCrew');
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

  return (
    <ScrollView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={noteTitlePlaceholder}
          value={noteTitle}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setNoteTitle(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={noteTextPlaceholder}
          value={noteText}
          onChangeText={text => setNoteText(text)}
        />
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.editButtonContainer}>
          <TouchableWithoutFeedback onPress={onShowPopup}>
            <Text style={styles.txtSize}>Options</Text>
          </TouchableWithoutFeedback>
          <EditNotePopup
            title={'Options'}
            ref={target => (popupRef = target)}
            onTouchOutside={onClosePopup}
            data={popupList}
            customer={customer}
            note={currNote}
            navigation={props.navigation}
            utilityType={utilityType}
            utility={utility}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
            <Text style={styles.buttonText}>Pick an image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={selectImageFromCamera}>
            <Text style={styles.buttonText}>Take a Picture</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {uploading ? (
              <View style={styles.progressBarContainer}>
                <Progress.Bar progress={transferred} width={300} />
                <Text>
                  {' '}
                  {mediaType} {mediaUploadCounter} out of {numMediaToUpload} is
                  being uploaded...
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => {
                  //console.log(noteTitle);
                  {
                    noteTitle !== ''
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
                          props.navigation,
                        )
                      : Alert.alert(
                          'Please Enter A Note Title',
                          'All notes must have a title',
                        );
                  }
                }}>
                <Text style={styles.buttonText}>Submit Info</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
// End of Home Screen Display

const styles = StyleSheet.create({
  container: {
    // Dont have flex 1, this messes up Android
    //flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 200,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});
// End of Home Screen Display

export default EditNote;
