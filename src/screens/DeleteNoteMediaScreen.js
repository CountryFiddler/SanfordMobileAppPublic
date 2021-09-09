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
import {getImageURL, updateNote} from '../../api/FirestoreApi';
import EditNotePopup from '../components/EditNotePopup';
import {deleteNoteMedia} from '../../api/TimerApi';
import NoteMedia from '../components/NoteMedia';
import Icons from '../components/Icons';
import {styles} from '../../api/stylesApi';

// Start of Home Screen Display
const DeleteNoteMediaScreen = props => {
  const [index, setIndex] = useState(-1);
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const note = props.navigation.getParam('note');

  //console.log(testImage);
  //imageURL = getImageURL(note.images[0].imageRef);
  // console.log(note.images[0].imageRef);
  // getURLS();
  return (
    <SafeAreaView>
      <View style={styles.iconHeader}>
        <Icons icon={'stickyNote'} size={'medium'} />
      </View>
      <View>
        <Text style={styles.addInfoScreenTitle}>Delete Photos</Text>
      </View>
      <View style={styles.dividerWithSpacing} />
      <View>
        <NoteMedia
          customer={customer}
          utilityType={utilityType}
          utility={utility}
          note={note}
          isDeleteMedia={true}
          navigation={props.navigation}
        />
      </View>
    </SafeAreaView>
  );
};
// End of Home Screen Display

export default DeleteNoteMediaScreen;
