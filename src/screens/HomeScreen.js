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
import React, {Component, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Button, BackHandler} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import * as firebase from 'react-native-firebase';

// Start of Home Screen Display
class HomeScreen extends Component {
  SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(function (error) {
        // An error happened.
      });
  };
  static navigationOptions = {
    headerLeft: null,
  };

  render() {
    return (
      <View style={styles.homePageContainer}>
        <CustomerSearchBar navigation={this.props.navigation} />
        <Button
          onPress={() => this.props.navigation.navigate('AddCustomer')}
          title="Add Customer"
          style={(styles.textStyle, styles.addCustomerButton)}
        />
        <Button title={'Sign Out'} onPress={this.SignOut} />
      </View>
    );
  }
}
// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'blue',
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
