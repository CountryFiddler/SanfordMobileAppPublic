/**
 * Home Screen
 * 7-1-21
 * The page contains a search bar to search for customers and a link
 * to go to the Add Customers Page. */

// Import Statements
import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';

// Start of Home Screen Display
const HomeScreen = props => {
  return (
    <View style={styles.homePageContainer}>
      <CustomerSearchBar navigation={props.navigation} />
      <Button
        onPress={() => props.navigation.navigate('AddCustomer')}
        title="Add Customer"
        style={(styles.textStyle, styles.addCustomerButton)}
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

export default HomeScreen;
