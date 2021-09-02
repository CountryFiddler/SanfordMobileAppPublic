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
  TouchableOpacity,
} from 'react-native';

import CustomerSearchBar from '../components/CustomerSearchBar';
import {firestore, storage} from 'react-native-firebase';
import {getImageURL} from '../../api/FirestoreApi';
import EditNotePopup from '../components/EditNotePopup';
import Video from 'react-native-video';
import NoteMedia from '../components/NoteMedia';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
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
    <View>
      <View style={styles.iconHeader}>
        <Icons icon={'stickyNote'} size={'medium'} />
      </View>
      <View style={styles.noteHeaderBar}>
        <View style={styles.noteTitle}>
          <Text style={styles.noteTitleText}>{note.title} </Text>
        </View>
        <View style={styles.editIcon}>
          <TouchableOpacity
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
            }>
            <Icons icon={'edit'} size={'medium'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.noteTextContainer}>
        <Text style={styles.noteText}>{note.noteText}</Text>
      </ScrollView>
      <View style={styles.imageDisplayContainer}>
        <NoteMedia note={note} isDeleteMedia={false} />
      </View>
    </View>
  );
};
// End of Home Screen Display

export default UtilityNoteScreen;
