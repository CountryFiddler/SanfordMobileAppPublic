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
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import NotesNavigator from '../components/NotesNavigator';

// Start of Home Screen Display
const UtilityNotesNavigatorScreen = props => {
  const utilityNotes = props.navigation.getParam('utilityNotes');
  const utility = props.navigation.getParam('utility');
  const customer = props.navigation.getParam('customer');
  const noteType = props.navigation.getParam('noteType');
  return (
    <View style={styles.homePageContainer}>
      <NotesNavigator
        notes={utilityNotes}
        customer={customer}
        navigation={props.navigation}
        utilityType={utility.utilityType}
        utility={utility}
      />
      <Button
        // If the Timer button is pressed, then the user
        // is redirected to the Timer Info Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('AddNote', {
            customer: customer,
            utilityType: utility.utilityType,
            utility: utility,
            noteType: noteType,
            //timers: timers,
          })
        }
        title="Add New Note"
      />
    </View>
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

export default UtilityNotesNavigatorScreen;
