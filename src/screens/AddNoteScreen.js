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
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {submitNote, submitTimerInfo} from '../../api/TimerApi';
import UploadNoteImage from '../components/UploadNoteImage';
import {launchImageLibrary} from 'react-native-image-picker';
import {UploadMedia} from '../../api/FirestoreApi';
import {storage} from 'react-native-firebase';
import AddOrEditNote from '../components/AddOrEditNote';
import AddNote from '../components/AddNote';
import { styles } from "../../api/stylesApi";
// Start of Home Screen Display

const AddNoteScreen = props => {
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const noteType = props.navigation.getParam('noteType');
  const utilityNotes = props.navigation.getParam('utilityNote');

  // Start of Add Timer Screen Display
  //const [numZones, setNumZones] = useState(null);
  return (
    <View style={styles.screenBackground}>
      <AddNote
        customer={customer}
        utilityType={utilityType}
        utility={utility}
        numImages={0}
        navigation={props.navigation}
        noteID={null}
        noteType={noteType}
        noteTitle={''}
        noteText={''}
      />
    </View>
  );
};
// End of Home Screen Display

// End of Home Screen Display

export default AddNoteScreen;
