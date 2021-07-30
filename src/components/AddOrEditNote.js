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
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {submitNote, submitTimerInfo} from '../../api/TimerApi';
import UploadNoteImage from '../components/UploadNoteImage';
import {launchImageLibrary} from 'react-native-image-picker';
import {UploadMedia} from '../../api/FirestoreApi';
import {storage} from 'react-native-firebase';
import EditNotePopup from '../components/EditNotePopup';
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
            {images.length
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
              : null}
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => {
                //console.log(noteTitle);
                {
                  (currNote.title = noteTitle),
                    currNote.title !== '' || !isAddNote
                      ? //console.log(noteTitle),
                        (checkNullEntries(),
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
    marginTop: 20,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});
// End of Home Screen Display

export default AddOrEditNote;
