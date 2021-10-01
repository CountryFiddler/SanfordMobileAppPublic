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
import EditNote from "../components/EditNote";
import { styles } from "../../api/stylesApi";
// Start of Home Screen Display
const EditNoteScreen = props => {
  const note = props.navigation.getParam('note');
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const utilityNotes = props.navigation.getParam('utilityNotes');
  return (
    <View style={styles.screenBackground}>
        <EditNote
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
  );
};
// End of Home Screen Display

// End of Home Screen Display

export default EditNoteScreen;
