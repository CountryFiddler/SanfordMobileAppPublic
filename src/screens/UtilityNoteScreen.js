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
  Image,
  ScrollView,
  render,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {firestore, storage} from 'react-native-firebase';
import {getImageURL} from '../../api/FirestoreApi';

// Start of Home Screen Display
const UtilityNoteScreen = props => {
  const [testImage, setTestImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [index, setIndex] = useState(-1);
  const incrementIndex = () => setIndex(index + 1);
  const note = props.navigation.getParam('note');
  const [counter, incrementCounter] = useState(0);
  // toString might be just it
  if (note.numImages > 0) {
    var imageRef1 = storage()
      .ref('/' + note.images[0].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage1(url);
      });
  }
  if (note.numImages > 1) {
    var imageRef2 = storage()
      .ref('/' + note.images[1].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage2(url);
      });
  }
  if (note.numImages > 2) {
    var imageRef3 = storage()
      .ref('/' + note.images[2].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage3(url);
      });
  }
  if (note.numImages > 3) {
    var imageRef = storage()
      .ref('/' + note.images[3].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage4(url);
      });
  }
  //console.log(imageRef);
  // console.log(note.title);
  //console.log(note.noteText);
  // const imageURL = null;
  /*var counter = 0;
  while (counter < note.numImages) {
    var imageRef = storage().ref('/' + note.images[counter].imageRef);
    imageRef.getDownloadURL().then(url => {
      //setTestImage(url);
      // console.log(url);
      console.log(url);
    //  setTestImage(prevItems => [...prevItems, {url}]);
      //setTestImage(url);
    });
    counter++;
  }
  console.log(counter);*/
  /* const url = storage()
    .ref('/' + note.images[0].imageRef)
    .getDownloadURL();*/
  function displayImage1() {
    if (note.numImages > 0) {
      return <Image source={{uri: image1}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage2() {
    if (note.numImages > 1) {
      return <Image source={{uri: image2}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage3() {
    if (note.numImages > 2) {
      return <Image source={{uri: image3}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage4() {
    if (note.numImages > 3) {
      return <Image source={{uri: image4}} style={{width: 200, height: 200}} />;
    }
  }
  //console.log(testImage);
  //imageURL = getImageURL(note.images[0].imageRef);
  // console.log(note.images[0].imageRef);
  // getURLS();
  return (
    <ScrollView style={styles.homePageContainer}>
      <Text>{note.title} </Text>
      <Text>{note.noteText}</Text>
      <View>{displayImage1()}</View>
      <View>{displayImage2()}</View>
      <View>{displayImage3()}</View>
      <View>{displayImage4()}</View>
    </ScrollView>
  );
};
// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  homePageContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    //alignSelf: 'center',
  },
  addCustomerButton: {
    //position: 'absolute',
    marginTop: 50,
  },
});

export default UtilityNoteScreen;
