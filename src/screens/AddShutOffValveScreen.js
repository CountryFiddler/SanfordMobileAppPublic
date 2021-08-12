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
  StyleSheet,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import {submitShutOffInfo} from '../../api/ShutOffValveApi';

// Start of Add Timer Screen Display
const AddShutOffValveScreen = props => {
  const customer = props.navigation.getParam('customer');
  const [shutoffType, setShutOffType] = useState('');
  const [size, setSize] = useState('');
  function checkEmptySubmissions() {
    if (shutoffType === '') {
      Alert.alert(
        'Please Specify the Type of Shut-Off Valve (Ford, Ball, Gate, etc...)',
      );
      return false;
    } else {
      return true;
    }
  }
  return (
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={'Shut-Off Type'}
          value={shutoffType}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setShutOffType(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Shut-Off Valve Size'}
          value={size}
          onChangeText={text => setSize(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
          onPress={() => {
            if (checkEmptySubmissions()) {
              submitShutOffInfo(customer, shutoffType, size, props.navigation);
            }
          }}
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

export default AddShutOffValveScreen;
