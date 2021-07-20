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
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);
  const [image10, setImage10] = useState(null);
  const [image11, setImage11] = useState(null);
  const [image12, setImage12] = useState(null);
  const [image13, setImage13] = useState(null);
  const [image14, setImage14] = useState(null);
  const [image15, setImage15] = useState(null);
  const [image16, setImage16] = useState(null);
  const [image17, setImage17] = useState(null);
  const [image18, setImage18] = useState(null);
  const [image19, setImage19] = useState(null);
  const [image20, setImage20] = useState(null);
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
  if (note.numImages > 4) {
    var imageRef = storage()
      .ref('/' + note.images[4].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage5(url);
      });
  }
  if (note.numImages > 5) {
    var imageRef = storage()
      .ref('/' + note.images[5].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage6(url);
      });
  }
  if (note.numImages > 6) {
    var imageRef = storage()
      .ref('/' + note.images[6].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage7(url);
      });
  }
  if (note.numImages > 7) {
    var imageRef = storage()
      .ref('/' + note.images[7].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage8(url);
      });
  }
  if (note.numImages > 8) {
    var imageRef = storage()
      .ref('/' + note.images[8].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage9(url);
      });
  }
  if (note.numImages > 9) {
    var imageRef = storage()
      .ref('/' + note.images[9].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage10(url);
      });
  }
  if (note.numImages > 10) {
    var imageRef = storage()
      .ref('/' + note.images[10].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage11(url);
      });
  }
  if (note.numImages > 11) {
    var imageRef = storage()
      .ref('/' + note.images[11].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage12(url);
      });
  }
  if (note.numImages > 12) {
    var imageRef = storage()
      .ref('/' + note.images[12].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage13(url);
      });
  }
  if (note.numImages > 13) {
    var imageRef = storage()
      .ref('/' + note.images[13].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage14(url);
      });
  }
  if (note.numImages > 14) {
    var imageRef = storage()
      .ref('/' + note.images[14].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage15(url);
      });
  }
  if (note.numImages > 15) {
    var imageRef = storage()
      .ref('/' + note.images[15].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage16(url);
      });
  }
  if (note.numImages > 16) {
    var imageRef = storage()
      .ref('/' + note.images[16].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage17(url);
      });
  }
  if (note.numImages > 17) {
    var imageRef = storage()
      .ref('/' + note.images[17].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage18(url);
      });
  }
  if (note.numImages > 18) {
    var imageRef = storage()
      .ref('/' + note.images[18].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage19(url);
      });
  }
  if (note.numImages > 19) {
    var imageRef = storage()
      .ref('/' + note.images[19].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage20(url);
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
  function displayImage5() {
    if (note.numImages > 4) {
      return <Image source={{uri: image5}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage6() {
    if (note.numImages > 5) {
      return <Image source={{uri: image6}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage7() {
    if (note.numImages > 6) {
      return <Image source={{uri: image7}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage8() {
    if (note.numImages > 7) {
      return <Image source={{uri: image8}} style={{width: 200, height: 200}} />;
    }
  }
  function displayImage9() {
    if (note.numImages > 8) {
      return <Image source={{uri: image9}} style={{width: 200, height: 300}} />;
    }
  }
  function displayImage10() {
    if (note.numImages > 9) {
      return (
        <Image source={{uri: image10}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage11() {
    if (note.numImages > 10) {
      return (
        <Image source={{uri: image11}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage12() {
    if (note.numImages > 11) {
      return (
        <Image source={{uri: image12}} style={{width: 200, height: 200}} />
      );
    }
  }
  function displayImage13() {
    if (note.numImages > 12) {
      return (
        <Image source={{uri: image13}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage14() {
    if (note.numImages > 13) {
      return (
        <Image source={{uri: image14}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage15() {
    if (note.numImages > 14) {
      return (
        <Image source={{uri: image15}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage16() {
    if (note.numImages > 15) {
      return (
        <Image source={{uri: image16}} style={{width: 200, height: 200}} />
      );
    }
  }
  function displayImage17() {
    if (note.numImages > 16) {
      return (
        <Image source={{uri: image17}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage18() {
    if (note.numImages > 17) {
      return (
        <Image source={{uri: image18}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage19() {
    if (note.numImages > 18) {
      return (
        <Image source={{uri: image19}} style={{width: 200, height: 300}} />
      );
    }
  }
  function displayImage20() {
    if (note.numImages > 19) {
      return (
        <Image source={{uri: image20}} style={{width: 200, height: 200}} />
      );
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
      <View>{displayImage5()}</View>
      <View>{displayImage6()}</View>
      <View>{displayImage7()}</View>
      <View>{displayImage8()}</View>
      <View>{displayImage9()}</View>
      <View>{displayImage10()}</View>
      <View>{displayImage11()}</View>
      <View>{displayImage12()}</View>
      <View>{displayImage13()}</View>
      <View>{displayImage14()}</View>
      <View>{displayImage15()}</View>
      <View>{displayImage16()}</View>
      <View>{displayImage17()}</View>
      <View>{displayImage18()}</View>
      <View>{displayImage19()}</View>
      <View>{displayImage20()}</View>
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
