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
  TextInput,
  SafeAreaView,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {submitTimerInfo} from '../../api/TimerApi';

// Start of Add Timer Screen Display
const AddTimerScreen = props => {
  const customer = props.navigation.getParam('customer');
  const [timerType, setTimerType] = useState(null);
  const [numPrograms, setNumPrograms] = useState(null);
  const [numZones, setNumZones] = useState(null);
  return (
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={'Timer Type'}
          value={timerType}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setTimerType(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Number of Programs'}
          value={numPrograms}
          onChangeText={text => setNumPrograms(text)}
        />
        <TextInput
          // Text Input Box for the customer's address
          placeholder={'Number of Zones'}
          value={numZones}
          onChangeText={text => setNumZones(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
          onPress={() =>
            submitTimerInfo(
              customer,
              timerType,
              numPrograms,
              numZones,
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

export default AddTimerScreen;
