/**
 * File Name: CustomerScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen is the page in which users can view information about
 * a customer (name and address), and click on links to take them to view other
 * information about the customers system such as their timer, shut-off valves,
 * electric solenoid valves, and other notes about the system.
 *
 * Purpose: Allows users to view information about the customer.
 */
// Import Statements
import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {getTimers} from '../../api/TimerApi';
import {getShutOffs} from '../../api/ShutOffValveApi';
import {getSolenoidValves} from '../../api/SolenoidValveApi';
import {getNotes} from '../../api/UtilityApi';

const CustomerScreen = props => {
  // Get the customer the user selected from the drop down menu when they
  // searched for a customer
  const customer = props.navigation.getParam('customer');
  const timers = getTimers(customer);
  const shutoffValves = getShutOffs(customer);
  const solenoidValves = getSolenoidValves(customer);
  const otherNotes = getNotes(customer, '', 'GeneralNotes');
  var parsedPhoneNumStr;
  var parsedPhoneNumInt;
  parsedPhoneNumStr = '+' + customer.phoneNumber[0] + ' (';
  for (var i = 1; i < 4; i++) {
    parsedPhoneNumStr = parsedPhoneNumStr + customer.phoneNumber[i];
  }
  parsedPhoneNumStr = parsedPhoneNumStr + ')-';
  for (var i = 4; i < 7; i++) {
    parsedPhoneNumStr = parsedPhoneNumStr + customer.phoneNumber[i];
  }
  parsedPhoneNumStr = parsedPhoneNumStr + '-';
  for (var i = 7; i < 11; i++) {
    parsedPhoneNumStr = parsedPhoneNumStr + customer.phoneNumber[i];
  }
  parsedPhoneNumInt = parseInt(customer.phoneNumber);
  console.log(parsedPhoneNumStr);
  console.log(parsedPhoneNumInt);
  // Start of the display for Customer Screen
  return (
    <View>
      <Text>{customer.firstName}</Text>
      <Text>{customer.lastName}</Text>
      <Text>{customer.address}</Text>
      <Text>{parsedPhoneNumStr}</Text>
      <Button
        // If the Edit Customer button is pressed, then the user
        // is redirected to the Edit Customer Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('EditCustomer', {
            customer: customer,
          })
        }
        title="Edit Customer"
      />
      <Button
        // If the Timer button is pressed, then the user
        // is redirected to the Timer Info Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('UtilitySelectionScreen', {
            customer: customer,
            utilityType: 'Timers',
            utilities: timers,
            addUtilityScreen: 'AddTimer',
            addUtilityButtonTitle: 'Add Timer',
            utilityInfoScreenTitle: 'TimerInfo',
            utilityTypeText: 'Timers',
          })
        }
        title="Timers"
      />
      <Button
        // If the Timer button is pressed, then the user
        // is redirected to the Timer Info Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('UtilitySelectionScreen', {
            customer: customer,
            utilityType: 'ShutOffValves',
            utilities: shutoffValves,
            addUtilityScreen: 'AddShutOff',
            addUtilityButtonTitle: 'Add Shut-Off Valve',
            utilityInfoScreenTitle: 'ShutOffInfo',
            utilityTypeText: 'Shut-Off Valves',
          })
        }
        title="Shut-Off Valves"
      />
      <Button
        // If the Timer button is pressed, then the user
        // is redirected to the Timer Info Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('UtilitySelectionScreen', {
            customer: customer,
            utilityType: 'SolenoidValves',
            utilities: solenoidValves,
            addUtilityScreen: 'AddSolenoidValves',
            addUtilityButtonTitle: 'Add Valve',
            utilityInfoScreenTitle: 'SolenoidValvesInfo',
            utilityTypeText: 'Solenoid Valves',
          })
        }
        title="Solenoid Valves"
      />
      <Button
        // If the Timer button is pressed, then the user
        // is redirected to the Timer Info Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('UtilityNotesNavigator', {
            customer: customer,
            utility: '',
            utilityNotes: otherNotes,
            noteType: 'GeneralNotes',
            screenTitle: 'General Notes',
          })
        }
        title="General Notes"
      />
    </View>
  );
  // End of the display for Customer Screen
};

export default CustomerScreen;
