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
import React, { useEffect, useState } from "react";
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';
import useFocusEffect from '@react-navigation/native';
import { getTimerNotes } from "../../api/FirestoreApi";
// Start of Home Screen Display
const TimerInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const timer = props.navigation.getParam('utility');
  const navigation = props.navigation;
  const timerNotes = getTimerNotes(customer, timer);
  console.log(timerNotes);
  return (
    <View style={styles.homePageContainer}>
      <Text>{timer.timerType} </Text>
      <Text> {timer.numPrograms}</Text>
      <Text> {timer.numZones}</Text>
      <Button
        title={'Edit Timer Information'}
        onPress={() =>
          navigation.navigate('EditTimer', {
            customer: customer,
            timer: timer,
            navigation: navigation,
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
            utility: timer,
            utilityNotes: timerNotes,
            noteType: 'TimerNotes',
            //timers: timers,
          })
        }
        title="Timer Notes"
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

export default TimerInfoScreen;
