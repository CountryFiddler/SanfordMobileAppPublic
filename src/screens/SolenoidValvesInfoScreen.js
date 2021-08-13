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
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';
import useFocusEffect from '@react-navigation/native';
import {getTimerNotes} from '../../api/TimerApi';
import {getNotes} from '../../api/UtilityApi';
import {getSolenoidValvesNotes} from '../../api/SolenoidValveApi';
// Start of Home Screen Display
const SolenoidValvesInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const solenoidValves = props.navigation.getParam('utility');
  const navigation = props.navigation;
  const solenoidValveNotes = getSolenoidValvesNotes(customer, solenoidValves);
  const findSolenoidValveNotes = getNotes(
    customer,
    solenoidValves,
    'FindSolenoidValvesNotes',
  );
  if (solenoidValves.numValves === '') {
    solenoidValves.numValves = 'No Text Provided';
  }
  if (solenoidValves.zoneNumbers === '') {
    solenoidValves.zoneNumbers = 'No Text Provided';
  }
  console.log(solenoidValves);
  return (
    <View style={styles.homePageContainer}>
      <Text> {solenoidValves.location} </Text>
      <Text> {solenoidValves.type} </Text>
      <Text> {solenoidValves.size} </Text>
      <Text> {solenoidValves.numValves} </Text>
      <Text> {solenoidValves.zoneNumbers} </Text>
      <Text> {solenoidValves.yearInstalled} </Text>
      <Button
        title={'Edit Valve Info'}
        onPress={() =>
          navigation.navigate('EditSolenoidValves', {
            customer: customer,
            solenoidValves: solenoidValves,
            navigation: navigation,
          })
        }
      />
      <Button
        title={'Find Valves'}
        onPress={() =>
          props.navigation.navigate('UtilityNotesNavigator', {
            customer: customer,
            utility: solenoidValves,
            utilityNotes: findSolenoidValveNotes,
            noteType: 'FindSolenoidValvesNotes',
            screenTitle: 'Find Valves',
          })
        }
      />
      <Button
        // If the Timer button is pressed, then the user
        // is redirected to the Timer Info Screen
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('UtilityNotesNavigator', {
            customer: customer,
            utility: solenoidValves,
            utilityNotes: solenoidValveNotes,
            noteType: 'SolenoidValveNotes',
            screenTitle: 'Valve Notes',
          })
        }
        title="Valve Notes"
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

export default SolenoidValvesInfoScreen;
