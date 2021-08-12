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
import {getNotes} from '../../api/UtilityApi';
import {getShutOffValveNotes} from '../../api/ShutOffValveApi';
// Start of Home Screen Display
const ShutOffValveInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const shutoffValve = props.navigation.getParam('utility');
  const navigation = props.navigation;
  const shutoffValveNotes = getShutOffValveNotes(customer, shutoffValve);
  const findShutOffValveNotes = getNotes(
    customer,
    shutoffValve,
    'FindShutOffValveNotes',
  );
  if (shutoffValve.size === '') {
    shutoffValve.size = 'No Text Provided';
  }
  return (
    <View style={styles.homePageContainer}>
      <Text> {shutoffValve.type} </Text>
      <Text> {shutoffValve.size}</Text>
      <Button
        title={'Edit Shut-Off Valve Info'}
        onPress={() =>
          navigation.navigate('EditShutOff', {
            customer: customer,
            shutoffValve: shutoffValve,
            navigation: navigation,
          })
        }
      />
      <Button
        title={'Find Shut-Off Valve'}
        onPress={() =>
          props.navigation.navigate('UtilityNotesNavigator', {
            customer: customer,
            utility: shutoffValve,
            utilityNotes: findShutOffValveNotes,
            noteType: 'FindShutOffValveNotes',
            screenTitle: 'Find Shut-Off Valve',
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
            utility: shutoffValve,
            utilityNotes: shutoffValveNotes,
            noteType: 'ShutOffValveNotes',
            screenTitle: 'Shut-Off Valve Notes',
          })
        }
        title="Shut-Off Valve Notes"
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

export default ShutOffValveInfoScreen;
