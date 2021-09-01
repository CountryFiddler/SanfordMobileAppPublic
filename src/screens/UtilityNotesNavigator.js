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
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import NotesNavigator from '../components/NotesNavigator';
import Icons from '../components/Icons';
import UtilitySelection from '../components/UtilitySelection';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../api/stylesApi';
import {faStickyNote} from '@fortawesome/free-regular-svg-icons';

// Start of Home Screen Display
const UtilityNotesNavigatorScreen = props => {
  const headerIcon = props.navigation.getParam('headerIcon');
  const utilityNotes = props.navigation.getParam('utilityNotes');
  const utility = props.navigation.getParam('utility');
  const customer = props.navigation.getParam('customer');
  const noteType = props.navigation.getParam('noteType');
  const screenTitle = props.navigation.getParam('screenTitle');
  console.log(utilityNotes);
  return (
    <View>
      <View style={styles.navigatorScreenHeader}>
        <Icons icon={headerIcon} size={'medium'} />
        <Text style={styles.navigatorScreenTitle}>{screenTitle}</Text>
      </View>
      <View style={styles.utilityNavigatorContainer}>
        <NotesNavigator
          notes={utilityNotes}
          customer={customer}
          navigation={props.navigation}
          utilityType={utility.utilityType}
          utility={utility}
        />
      </View>
      <View style={styles.buttonContainer}>
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={33} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('AddNote', {
              customer: customer,
              utilityType: utility.utilityType,
              utility: utility,
              noteType: noteType,
              utilityNotes: utilityNotes,
              //timers: timers,
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faPlus} size={33} />
          <Text>Add Note</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.longDivider}/>
    </View>
  );
};
// End of Home Screen Display
export default UtilityNotesNavigatorScreen;
