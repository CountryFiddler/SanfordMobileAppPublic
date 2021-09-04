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
import {
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';
import useFocusEffect from '@react-navigation/native';
import {getTimerNotes} from '../../api/TimerApi';
import {getNotes} from '../../api/UtilityApi';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPencilAlt,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote} from '@fortawesome/free-regular-svg-icons';
import Icons from '../components/Icons';
// Start of Home Screen Display
const Footer = props => {
  const customer = props.navigation.getParam('customer');
  const timer = props.navigation.getParam('utility');
  const timerList = props.navigation.getParam('utilities');
  const navigation = props.navigation;
  const timerNotes = getTimerNotes(customer, timer);
  const findTimerNotes = getNotes(customer, timer, 'FindTimerNotes');

  var TimerButton = false;
  var ShutOffButton = false;
  var SolenoidValveButton = false;
  var HomeButton = false;
  var CustomerButton = false;
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Customer', {
            customer: customer,
            navigation: props.navigation,
          })
        }
        style={styles.generalButtonStyle}>
        <FontAwesomeIcon icon={faUser} size={30} />
        <Text style={styles.buttonText}>Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={styles.generalButtonStyle}>
        <FontAwesomeIcon icon={faHome} size={30} />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          // Pass navigation and customer as props to the Edit Customer Screen
          props.navigation.navigate('UtilitySelectionScreen', {
            customer: customer,
            headerIcon: 'timer',
            utilityType: 'Timers',
            utilities: timerList,
            addUtilityScreen: 'AddTimer',
            addUtilityButtonTitle: 'Add Timer',
            utilityInfoScreenTitle: 'TimerInfo',
            utilityTypeText: 'Timers',
            addUtilityText: 'Add Timer',
          })
        }
        style={styles.generalButtonStyle}>
        <Icons icon={'timer'} size={'medium'} />
        <Text style={styles.buttonText}>Timer List</Text>
      </TouchableOpacity>
    </View>
  );
};
// End of Home Screen Display

// Start of StylingSheet
const timerInfoStyles = StyleSheet.create({
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
  spaceHolder: {
    // marginBottom: '20%',
  },
});

export default Footer;
