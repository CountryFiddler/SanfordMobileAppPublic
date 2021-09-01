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
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import CustomerSearchBar from '../components/CustomerSearchBar';
import {firestore, storage} from 'react-native-firebase';
import {getImageURL} from '../../api/FirestoreApi';
import EditNotePopup from '../components/EditNotePopup';
import Video from 'react-native-video';
import NoteMedia from '../components/NoteMedia';
//Media Controls to control Play/Pause/Seek and full screen
//import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

// Start of Home Screen Display
const UtilityNoteScreen = props => {
  const customer = props.navigation.getParam('customer');
  const note = props.navigation.getParam('note');
  const noteList = props.navigation.getParam('noteList');
  const utility = props.navigation.getParam('utility');
  //const utilityType = props.navigation.getParam('utilityType');
  //console.log(testImage);
  //imageURL = getImageURL(note.images[0].imageRef);
  // console.log(note.images[0].imageRef);
  // getURLS();
  return (
    <ScrollView style={styles.homePageContainer}>
      <Text>{note.title} </Text>
      <Text>{note.noteText}</Text>
      <Button
        title={'Edit'}
        onPress={() =>
          props.navigation.navigate('EditNote', {
            customer: customer,
            note: note,
            noteType: note.noteType,
            navigation: props.navigation,
            utilityType: utility.utilityType,
            utility: utility,
            utilityNotes: noteList,
          })
        }
      />
      <NoteMedia note={note} isDeleteMedia={false} />
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
