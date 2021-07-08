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
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import { submitNote, submitTimerInfo } from "../../api/TimerApi";

// Start of Home Screen Display
const AddNoteScreen = props => {
  // Start of Add Timer Screen Display
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const [noteTitle, setNoteTitle] = useState(null);
  const [noteText, setNoteText] = useState(null);
  //const [numZones, setNumZones] = useState(null);
  return (
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={'Note Title'}
          value={noteTitle}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setNoteTitle(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Number of Programs'}
          value={noteText}
          onChangeText={text => setNoteText(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
          onPress={() =>
            submitNote(
              customer,
              utilityType,
              utility,
              noteTitle,
              noteText,
              props.navigation,
            )
          }
        />
      </View>
    </SafeAreaView>
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
// End of Home Screen Display

export default AddNoteScreen;
