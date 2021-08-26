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
import AddOrEditNote from '../components/AddOrEditNote';
// Start of Home Screen Display
const EditNoteScreen = props => {
  const note = props.navigation.getParam('note');
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const utilityNotes = props.navigation.getParam('utilityNotes');
  console.log(note);
  return (
    <ScrollView>
      <View>
        <AddOrEditNote
          customer={customer}
          note={note}
          utilityType={utilityType}
          utility={utility}
          isAddNote={false}
          numImages={note.numImages}
          numVideos={note.numVideos}
          navigation={props.navigation}
          noteID={note.noteID}
          noteType={note.noteType}
          utilityNotes={utilityNotes}
          noteTitle={note.title}
          noteText={note.noteText}
        />
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
