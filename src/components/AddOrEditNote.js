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
import {launchImageLibrary} from 'react-native-image-picker';
import {addNote, updateNote, UploadMedia} from '../../api/FirestoreApi';
import {storage} from 'react-native-firebase';
import EditNotePopup from '../components/EditNotePopup';
import * as Progress from 'react-native-progress';
// Start of Home Screen Display
const AddOrEditNote = props => {
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
  const isAddNote = props.isAddNote;
  const customer = props.customer;
  const utilityType = props.utilityType;
  const utility = props.utility;
  const noteType = props.noteType;
  const noteID = props.noteID;
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [uploadingVideos, setUploadingVideos] = useState(false);
  const [mediaType, setMediaType] = useState('');
  const [numMediaToUpload, setNumMediaToUpload] = useState(0);
  const [mediaUploadCounter, setMediaUploadCounter] = useState(0);
  const [addedVideos, setAddedVideos] = useState(false);
  const [addedImages, setAddedImages] = useState(false);
  const [numImages, setNumImages] = useState(props.numImages);
  const [numVideos, setNumVideos] = useState(props.numVideos);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [images, setImages] = useState([]);
  const [imageRefs, setImageRefs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoRefs, setVideoRefs] = useState([]);
  if (!isAddNote) {
    //setOldNote(props.note);
    currNote.numImages = props.note.numImages;
    currNote.numVideos = props.note.numVideos;
    currNote.titlePlaceholder = props.note.title;
    currNote.noteTextPlaceholder = props.note.noteText;
    currNote.imageRefs = props.note.imageRefs;
    currNote.videoRefs = props.note.videoRefs;
    currNote.noteID = props.note.noteID;
  }
  const submitNote = (
    isAddNote,
    customer,
    numImages,
    numVideos,
    images,
    imageRefs,
    videos,
    videoRefs,
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
    if (isAddNote) {
      utilityNote.noteID = addNote(
        customer,
        utilityType,
        utility,
        utilityNote,
        imageRefs,
        numImages,
        videoRefs,
        numVideos,
        navigation,
      );
      console.log(utilityNote.noteID);
      for (var i = 0; i < images.length; i++) {
        const {uri} = images[i].source;
        imageRefs[i].imageRef =
          imageRefs[i].imageRef +
          '/' +
          utilityNote.noteID +
          '/' +
          uri.substring(uri.lastIndexOf('/') + 1);
        //console.log(imageRefs[i].imageRef);
      }
      for (var j = 0; j < videos.length; j++) {
        const {uri} = videos[j].source;
        videoRefs[j].videoRef =
          videoRefs[j].videoRef +
          '/' +
          utilityNote.noteID +
          '/' +
          uri.substring(uri.lastIndexOf('/') + 1);
      }
      updateNote(
        customer,
        utilityType,
        utility,
        utilityNote,
        imageRefs,
        numImages,
        videoRefs,
        numVideos,
        navigation,
      );
      // Get Single Note
      // Set The Remaining ImageRefs and VideoRefs
    } else {
      //onsole.log(videoRefs);
      updateNote(
        customer,
        utilityType,
        utility,
        utilityNote,
        imageRefs,
        numImages,
        videoRefs,
        numVideos,
        navigation,
      );
    }
    UploadMedia(
      images,
      videos,
      customer,
      utility,
      utilityNote,
    );
    //mediaUploadCounter = 0
    //navigation.navigate('UtilityNoteScreen');
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
    setNumMediaToUpload(numImages);
    setMediaUploadCounter(1);
    while (counter < images.length) {
      setTransferred(0);

      setUploading(true);
      console.log(uploading);
      const {uri} = images[counter].source;
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      const task = storage()
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
      console.log(uploadUri);
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

    counter = 0;
    //const [image, setImage] = useState(null);
    //const [uploading, setUploading] = useState(false);
    // const [transferred, setTransferred] = useState(0);
    //console.log(images);
    setMediaType('Video');
    setNumMediaToUpload(numVideos);
    setMediaUploadCounter(1);
    while (counter < videos.length) {
      setTransferred(0);

      setUploading(true);
      console.log(uploading);
      const {uri} = videos[counter].source;
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      const task = storage()
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
      console.log(uploadUri);
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
        'Video uploaded!',
        'Your video has been uploaded to Firebase Cloud Storage!',
      );
      setUploading(false);
      setMediaUploadCounter(counter + 1);
    }
    //setUploading(false);
    console.log('Done Adding Media');
    // setImage(null);
  };
  function checkNullEntries() {
    if (noteTitle === '' && !isAddNote) {
      currNote.title = currNote.titlePlaceholder;
      console.log(currNote.titlePlaceholder);
    } else {
      currNote.title = noteTitle;
    }
    if (noteText === '' && !isAddNote) {
      currNote.noteText = currNote.noteTextPlaceholder;
    } else {
      currNote.noteText = noteText;
    }
  }

  function setMedia() {
    if (addedImages) {
      currNote.imageRefs = imageRefs;
      currNote.numImages = numImages;
      console.log(currNote.numImages);
    }
    if (addedVideos) {
      currNote.videoRefs = videoRefs;
      currNote.numVideos = numVideos;
    }
    currNote.images = images;
    currNote.videos = videos;
  }
  //const [uploading, setUploading] = useState(false);
  //const [transferred, setTransferred] = useState(0);
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelld image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        const {uri} = source;
        setImages(prevItems => [...prevItems, {source}]);
        //TODO Change Image Ref to have the utility/utility notes
        let imageRef =
          'Customers' +
          '/' +
          customer.id +
          '/' +
          utility.utilityType +
          '/' +
          utility.id +
          '/' +
          noteType; // +
        //'/';
        if (!isAddNote) {
          imageRef =
            imageRef +
            '/' +
            noteID +
            '/' +
            uri.substring(uri.lastIndexOf('/') + 1);
        }
        //if (!addedImages && props.note.images )
        if (!isAddNote) {
          if (!addedImages && props.note.imageRefs.length > 0) {
            setImageRefs(props.note.imageRefs);
            //setNumImages(numImages + props.note.numImages);
            console.log(props.note.numImages);
            console.log(numImages);
            setAddedImages(true);
          }
        }
        if (images.length < 20) {
          setImageRefs(prevItems => [...prevItems, {imageRef}]);
          //currNote.imageRefs = prevItems => [...prevItems, {imageRef}];
          setNumImages(numImages + 1);
          console.log(numImages);
          setAddedImages(true);
        }
      }
    });
  };

  const selectVideo = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary({mediaType: 'video'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        const {uri} = source;
        setVideos(prevItems => [...prevItems, {source}]);
        //TODO Change Image Ref to have the utility/utility notes
        let videoRef =
          'Customers' +
          '/' +
          customer.id +
          '/' +
          utility.utilityType +
          '/' +
          utility.id +
          '/' +
          noteType; // +
        //'/';
        if (!isAddNote) {
          videoRef =
            videoRef +
            '/' +
            noteID +
            '/' +
            uri.substring(uri.lastIndexOf('/') + 1);
        }
        if (!isAddNote) {
          if (!addedVideos && props.note.videoRefs !== null) {
            setVideoRefs(props.note.videoRefs);
            //setNumVideos(props.note.numVideos);
            setAddedVideos(true);
          }
        }
        if (videos.length < 20) {
          setVideoRefs(prevItems => [...prevItems, {videoRef}]);
          setNumVideos(numVideos + 1);
          console.log(numVideos);
          setAddedVideos(true);
          //currNote.videoRefs = prevItems => [...prevItems, {videoRef}];
          //currNote.numVideos = currNote.numVideos + 1;
          //console.log(currNote.videoRefs);
        }
      }
    });
  };
  // Start of Add Timer Screen Display
  //const [numZones, setNumZones] = useState(null);
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
          placeholder={currNote.titlePlaceholder}
          value={noteTitle}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setNoteTitle(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={currNote.noteTextPlaceholder}
          value={noteText}
          onChangeText={text => setNoteText(text)}
        />
        <StatusBar barStyle={'dark-content'} />
        {!isAddNote
          ? (checkNullEntries(),
            (
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
            ))
          : null}
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
            <Text style={styles.buttonText}>Pick an image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton} onPress={selectVideo}>
            <Text style={styles.buttonText}>Pick a Video</Text>
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
                    (currNote.title = noteTitle),
                      currNote.title !== '' || !isAddNote
                        ? //console.log(noteTitle),
                          (checkNullEntries(),
                          //setUploading(true),
                          console.log(uploading + 'bob'),
                          setMedia(),
                          submitNote(
                            isAddNote,
                            customer,
                            currNote.numImages,
                            currNote.numVideos,
                            currNote.images,
                            currNote.imageRefs,
                            currNote.videos,
                            currNote.videoRefs,
                            utilityType,
                            utility,
                            currNote.title,
                            currNote.noteText,
                            currNote.noteID,
                            noteType,
                            props.navigation,
                          ))
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

export default AddOrEditNote;
