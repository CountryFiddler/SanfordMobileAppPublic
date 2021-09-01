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
  faPhoneAlt,
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
  if (customer.phoneNumber === '') {
    parsedPhoneNumStr = 'No Phone Number Provided';
  }
  console.log(parsedPhoneNumStr);
  console.log(parsedPhoneNumInt);
  // Start of the display for Customer Screen
  return (
    <ScrollView style={{paddingBottom: 100}} persistentScrollbar={false}>
      <View style={styles.iconHeader}>
        <FontAwesomeIcon icon={faUser} size={25} />
      </View>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Customer Information</Text>
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
      <View style={styles.customerInfoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faUser} size={17} style={styles.icons} />
          <Text style={styles.labelText}> Name: </Text>
          <Text style={styles.infoText}>
            {customer.firstName} {customer.lastName}
          </Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon
            icon={faAddressBook}
            size={17}
            style={styles.icons}
          />
          <Text style={styles.labelText}> Address: </Text>
          <Text style={styles.infoText}>{customer.address}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faPhoneAlt} style={styles.icons} size={17} />
          <Text style={styles.labelText}> Phone: </Text>
          <Text style={styles.infoText}>{parsedPhoneNumStr}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'timer',
              utilityType: 'Timers',
              utilities: timers,
              addUtilityScreen: 'AddTimer',
              addUtilityButtonTitle: 'Add Timer',
              utilityInfoScreenTitle: 'TimerInfo',
              utilityTypeText: 'Timers',
              addUtilityText: 'Add Timer',
            })
          }
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../icons/iu-1.png')}
          />
          <Text style={styles.buttonText}>Timers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'shutOff',
              utilityType: 'ShutOffValves',
              utilities: shutoffValves,
              addUtilityScreen: 'AddShutOff',
              addUtilityButtonTitle: 'Add Shut-Off Valve',
              utilityInfoScreenTitle: 'ShutOffInfo',
              utilityTypeText: 'Shut-Off Valves',
              addUtilityText: 'Add Valve',
            })
          }
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 50, height: 42}}
            source={require('../icons/Shut-OffValve.png')}
            //source={{uri: '/icons/Shut-OffValve.png'}}
          />
          <Text style={styles.buttonText}>Shut-Off</Text>
          <Text>Valves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'solenoidValve',
              utilityType: 'SolenoidValves',
              utilities: solenoidValves,
              addUtilityScreen: 'AddSolenoidValves',
              addUtilityButtonTitle: 'Add Valve',
              utilityInfoScreenTitle: 'SolenoidValvesInfo',
              utilityTypeText: 'Solenoid Valves',
              addUtilityText: 'Add Valves',
            })
          }
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 27, height: 31}}
            source={require('../icons/SolenoidValve.png')}
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
          <FontAwesomeIcon icon={faStickyNote} size={30} />
          <Text style={styles.buttonText}>General</Text>
          <Text>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}/>
      <View style={styles.customerFooter}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={30} />
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.longDivider}/>
    </ScrollView>
  );
  // End of the display for Customer Screen
};
const customerScreenStyles = StyleSheet.create({
  spaceHolder: {
    //height: 500,
    height: 70,
  },
  homeButton: {
    marginBottom: '20%',
  },
  footer: {
    //height: 25,
  },
});
export default CustomerScreen;
