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
  Modal,
  Dimensions,
} from 'react-native';

import CustomerSearchBar from '../components/CustomerSearchBar';
import {firestore, storage} from 'react-native-firebase';
import {getImageURL} from '../../api/FirestoreApi';
import EditNotePopup from '../components/EditNotePopup';
import Video from 'react-native-video';
import NoteMedia from '../components/NoteMedia';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
//Media Controls to control Play/Pause/Seek and full screen
//import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

// Start of Home Screen Display
const UtilityNoteScreen = props => {
  const customer = props.navigation.getParam('customer');
  const note = props.navigation.getParam('note');
  const noteList = props.navigation.getParam('noteList');
  const utility = props.navigation.getParam('utility');
  const utilityList = props.navigation.getParam('utilityList');
  const utilityInfoScreen = props.navigation.getParam('utilityInfoScreen');
  const utilityIcon = props.navigation.getParam('utilityIcon');
  const utilityTitle = props.navigation.getParam('utilityTitle');
  const headerIcon = props.navigation.getParam('headerIcon');
  const noteType = props.navigation.getParam('noteType');
  const screenTitle = props.navigation.getParam('screenTitle');
  const noteIcon = props.navigation.getParam('noteIcon');
  const noteIconTitle = props.navigation.getParam('noteIconTitle');
  const [showNoteHistory, setShowNoteHistory] = useState(false);
  //const utilityType = props.navigation.getParam('utilityType');
  //console.log(testImage);
  //imageURL = getImageURL(note.images[0].imageRef);
  // console.log(note.images[0].imageRef);
  // getURLS();
  return (
    <View style={styles.screenBackground}>
      <View style={styles.iconHeader}>
        <Icons icon={'stickyNote'} size={'medium'} />
      </View>
      <View style={styles.noteHeaderBar}>
        <View style={styles.noteHistoryIcon}>
          <TouchableOpacity onPress={() => setShowNoteHistory(true)}>
            <Icons icon={'history'} size={25} />
          </TouchableOpacity>
        </View>
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
      <View style={styles.longDivider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilityNotesNavigator', {
              customer: customer,
              utilityNotes: noteList,
              utility: utility,
              utilityList: utilityList,
              utilityInfoScreen: utilityInfoScreen,
              utilityIcon: utilityIcon,
              utilityTitle: utilityTitle,
              headerIcon: headerIcon,
              noteType: noteType,
              screenTitle: screenTitle,
              noteIcon: noteIcon,
              noteIconTitle: noteIconTitle,
            })
          }
          style={styles.generalButtonStyle}>
          <Icons icon={noteIcon} size={'medium'} />
          <Text style={styles.buttonText}>{noteIconTitle}</Text>
        </TouchableOpacity>
        {utilityTitle !== null ? (
          <TouchableOpacity
            style={styles.generalButtonStyle}
            onPress={() =>
              props.navigation.navigate(utilityInfoScreen, {
                customer: customer,
                utility: utility,
                utilities: utilityList,
                navigation: props.navigation,
              })
            }>
            <Icons icon={utilityIcon} size={'medium'} />
            <Text style={styles.buttonText}>{utilityTitle}</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={33} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Customer', {
              customer: customer,
              navigation: props.navigation,
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faUser} size={33} />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.longDivider} />

      <Modal
        visible={showNoteHistory === true}
        animationType={'fade'}
        transparent={true}
        style={{color: 'red'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
          }}>
          <View style={styles.noteHistoryContainer}>
            <View style={styles.historyModalExitButton}>
              <TouchableOpacity onPress={() => setShowNoteHistory(false)}>
                <Icons icon={'exit'} size={33} color={'white'} />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{
                height: 400,
                backgroundColor: '#FFFFFF',
                borderRadius: 15,
              }}>
              <Text style={styles.noteHistoryTitleLabel}>Note History</Text>
              {note.employeeNameAndTimeHistory.length
                ? note.employeeNameAndTimeHistory.map(history => {
                    return (
                      <View>
                        <View
                          key={history.timeWithSeconds}
                          style={{marginTop: '5%', marginLeft: '2%'}}>
                          <View style={styles.noteHistoryInfoContainer}>
                            <Text style={styles.noteHistoryLabel}>Employee: </Text>
                            <Text>{history.employeeName}</Text>
                          </View>
                          <View style={styles.noteHistoryInfoContainer}>
                            <Text style={styles.noteHistoryLabel}>Date: </Text>
                            <Text>
                            {history.month +
                              '-' +
                              history.day +
                              '-' +
                              history.year +
                              ' ' +
                              history.time}
                          </Text>
                          </View>
                        </View>
                        <View style={styles.longDivider} />
                      </View>
                    );
                  })
                : null}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={styles.spaceHolder}/>
    </View>
  );
};
// End of Home Screen Display

export default UtilityNoteScreen;
