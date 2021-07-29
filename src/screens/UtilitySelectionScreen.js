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
import UtilitySelection from '../components/UtilitySelection';

// Start of Home Screen Display
const UtilitySelectionScreen = props => {
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utilities = props.navigation.getParam('utilities');
  const addUtility = props.navigation.getParam('addUtilityScreen');
  const addUtilityButtonTitle = props.navigation.getParam(
    'addUtilityButtonTitle',
  );
  const utilityInfoScreenTitle = props.navigation.getParam(
    'utilityInfoScreenTitle',
  );
  //const timers = getTimers(customer);
  return (
    <View style={styles.homePageContainer}>
      <UtilitySelection
        customer={customer}
        utilityList={utilities}
        utilityInfoScreen={utilityInfoScreenTitle}
        navigation={props.navigation}
        utilityType={utilityType}
      />
      <Button
        onPress={() =>
          props.navigation.navigate(addUtility, {
            customer: customer,
            navigation: props.navigation,
          })
        }
        title={addUtilityButtonTitle}
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

export default UtilitySelectionScreen;
