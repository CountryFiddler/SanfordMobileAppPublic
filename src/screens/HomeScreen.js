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
import {
  Text,
  StyleSheet,
  View,
  Button,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import * as firebase from 'react-native-firebase';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
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
      //<View>
      <View style={styles.homePageContainer}>
        <CustomerSearchBar navigation={this.props.navigation} />
        <View style={styles.homePageButtonContainer}>
          <TouchableOpacity
            style={styles.addCustomerButton}
            onPress={() => this.props.navigation.navigate('AddCustomer')}>
            <FontAwesomeIcon icon={faUserPlus} size={33}/>
            <Text style={styles.textStyle}>Add Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signOutButton} onPress={this.SignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} size={33} />
            <Text style={styles.textStyle}>Sign Out</Text>
          </TouchableOpacity>
        </View>
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
    //borderWidth: 3,
    //borderColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //flex: 1,
    // alignItems: 'vertical',
    // flexDirection: 'row',
  },
  homePageButtonContainer: {
    //marginTop: '5%',
    marginBottom: '10%',
    // borderWidth: 3,
    //borderColor: 'black',
    //alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    flexDirection: 'row',
    width: '100%',
    //justifyContent: 'center',
  },
  testContainer: {
    //alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    //alignSelf: 'center',
  },
  signOutButton: {
    marginTop: '5%',
    // borderWidth: 3,
    //borderColor: 'black',
    //justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: '47%',
  },
  addCustomerButton: {
    // borderWidth: 3,
    // borderColor: 'black',
    //justifyContent: 'center',
    marginTop: '5%',
    alignItems: 'center',
    marginLeft: '5%',
    color: '#26660b',
    // width: '50%',
  },
  footerStyles: {
    marginTop: '50%',
    borderColor: 'black',
    borderWidth: 3,
    height: 100,
    width: '100%',
    backgroundColor: 'green',
  },
});

export default HomeScreen;
