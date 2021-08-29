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
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {getTimers} from '../../api/TimerApi';
import {getShutOffs} from '../../api/ShutOffValveApi';
import {getSolenoidValves} from '../../api/SolenoidValveApi';
import {getNotes} from '../../api/UtilityApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faAddressBook,
  faPhone,
  faPencilAlt,
  faClock,
  faUserPlus,
  faSignOutAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote, fa} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../../api/stylesApi';
import {Icon} from 'native-base';

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
    <ScrollView>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>
          Customer Information
        </Text>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('EditCustomer', {
              customer: customer,
            })
          }>
          <FontAwesomeIcon icon={faPencilAlt} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faUser} size={17} />
          <Text style={styles.labelText}> Name: </Text>
          <Text style={styles.infoText}>
            {customer.firstName} {customer.lastName}
          </Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faAddressBook} size={17} />
          <Text style={styles.labelText}> Address: </Text>
          <Text style={styles.infoText}>
            {customer.address}
          </Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon
            icon={faPhone}
            style={{transform: [{rotateY: '180deg'}]}}
            size={17}
          />
          <Text style={styles.labelText}> Phone: </Text>
          <Text style={styles.infoText}>
            {parsedPhoneNumStr}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
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
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 50, height: 50}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png')}
          />
          <Text style={styles.buttonText}>Timers</Text>
        </TouchableOpacity>
        <TouchableOpacity
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
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 70, height: 60}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
          />
          <Text style={styles.buttonText}>Shut-Off</Text>
          <Text>Valves</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
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
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 45, height: 50}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
          />
          <Text style={styles.buttonText}>Solenoid</Text>
          <Text>Valves</Text>
        </TouchableOpacity>
        <TouchableOpacity
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
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faStickyNote} size={50} />
          <Text style={styles.buttonText}>General</Text>
          <Text>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={33} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={customerScreenStyles.spaceHolder} />
    </ScrollView>
  );
  // End of the display for Customer Screen
};
const customerScreenStyles = StyleSheet.create({
  spaceHolder: {
    marginBottom: '30%',
  },
  homeButton: {
    marginBottom: '20%',
  },
});
export default CustomerScreen;
