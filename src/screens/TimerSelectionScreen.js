/**
 * Home Screen
 * 7-1-21
 * The page contains a search bar to search for customers and a link
 * to go to the Add Customers Page. */

// Import Statements
import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, Button, Alert} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {getTimerInfo} from '../../api/TimerApi';
import {getTimers} from '../../api/FirestoreApi';
import TimerSelection from '../components/TimerSelection';

// Start of Home Screen Display
const TimerSelectionScreen = props => {
  const customer = props.navigation.getParam('customer');
  const timers = props.navigation.getParam('timers');
  //const timers = getTimers(customer);
  return (
    <View style={styles.homePageContainer}>
      <TimerSelection
        customer={customer}
        timerList={timers}
        navigation={props.navigation}
      />
      <Button
        onPress={() =>
          props.navigation.navigate('AddTimer', {
            customer: customer,
            navigation: props.navigation,
          })
        }
        title={'Add Timer'}
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

export default TimerSelectionScreen;
