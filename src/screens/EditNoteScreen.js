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
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {submitNote, submitTimerInfo} from '../../api/TimerApi';
import UploadNoteImage from '../components/UploadNoteImage';
import {launchImageLibrary} from 'react-native-image-picker';
import {UploadImage} from '../../api/FirestoreApi';
import {storage} from 'react-native-firebase';
import EditNotePopup from '../components/EditNotePopup';
// Start of Home Screen Display
const EditNoteScreen = props => {
  const note = props.navigation.getParam('note');
  const [isAddNote, setIsAddNote] = useState(false);
  const customer = props.navigation.getParam('customer');
  const [numImages, setNumImages] = useState(note.numImages);
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.noteText);
  const [images, setImage] = useState([]);
  const [imageRefs, setImages] = useState(note.images);
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
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        const {uri} = source;
        setImage(prevItems => [...prevItems, {source}]);
        //TODO Change Image Ref to have the utility/utility notes
        const imageRef =
          customer.id +
          '/' +
          'TimerNotes' +
          '/' +
          uri.substring(uri.lastIndexOf('/') + 1);
        if (images.length < 20) {
          setImages(prevItems => [...prevItems, {imageRef}]);
          setNumImages(numImages + 1);
        }
        console.log(imageRefs);
        console.log(images);
      }
    });
  };
  // Start of Add Timer Screen Display
  //const [numZones, setNumZones] = useState(null);
  const popupList = [
    {
      id: 1,
      name: 'Delete Note',
    },
    {
      id: 2,
      name: 'Delete Photos',
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
          placeholder={'Note Title'}
          value={noteTitle}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setNoteTitle(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Number of Programs'}
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
            customer={props.customer}
            note={props.note}
            navigation={props.navigation}
            utilityType={props.utilityType}
            utility={props.utility}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
            <Text style={styles.buttonText}>Pick an image</Text>
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
              onPress={() =>
                submitNote(
                  isAddNote,
                  customer,
                  numImages,
                  images,
                  imageRefs,
                  utilityType,
                  utility,
                  noteTitle,
                  noteText,
                  note.noteID,
                  props.navigation,
                )
              }>
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

export default EditNoteScreen;
