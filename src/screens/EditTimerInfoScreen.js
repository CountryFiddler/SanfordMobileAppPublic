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
import { addCustomer, getTimerNotes, updateCustomer } from "../../api/FirestoreApi";
import {submitTimerChanges} from '../../api/TimerApi';

// Start of Home Screen Display
const EditTimerInfoScreen = props => {
  // Get the customer from props (this is only if the user is coming
  // from the Customer Screen)
  const customer = props.navigation.getParam('customer');
  const timer = props.navigation.getParam('timer');
  // Get the navigation prop
  const navigation = props.navigation;
  const [currentTimerType, setTimerType] = useState(timer.type);
  const [currentNumPrograms, setNumPrograms] = useState(timer.numPrograms);
  const [currentNumZones, setNumZones] = useState(timer.numZones);
  return (
    // Start of the display for adding or editing a customer
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={timer.type}
          value={currentTimerType}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setTimerType(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={timer.numPrograms}
          value={currentNumPrograms}
          onChangeText={text => setNumPrograms(text)}
        />
        <TextInput
          // Text Input Box for the customer's address
          placeholder={timer.numZones}
          value={currentNumZones}
          onChangeText={text => setNumZones(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
          onPress={() =>
            submitTimerChanges(
              customer,
              timer,
              currentTimerType,
              currentNumPrograms,
              currentNumZones,
              navigation,
            )
          }
        />
      </View>
    </SafeAreaView>
  );
  // End of the display for adding or editing a customer
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

export default EditTimerInfoScreen;
