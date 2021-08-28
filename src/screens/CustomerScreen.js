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
  Image, ScrollView,

} from "react-native";
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
      <View style={styles.customerScreenHeader}>
        <Text style={styles.customerScreenTitle}>Customer Information</Text>
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
        <View style={styles.customerInfoChildContainer}>
          <FontAwesomeIcon icon={faUser} size={17} />
          <Text style={styles.labelText}> Name: </Text>
          <Text style={styles.customerInfoText}>
            {customer.firstName} {customer.lastName}
          </Text>
        </View>
        <View style={styles.customerInfoChildContainer}>
          <FontAwesomeIcon icon={faAddressBook} size={17} />
          <Text style={styles.labelText}> Address: </Text>
          <Text style={styles.customerInfoText}>{customer.address}</Text>
        </View>
        <View style={styles.customerInfoChildContainer}>
          <FontAwesomeIcon
            icon={faPhone}
            style={{transform: [{rotateY: '180deg'}]}}
            size={17}
          />
          <Text style={styles.labelText}> Phone: </Text>
          <Text style={styles.customerInfoText}>{parsedPhoneNumStr}</Text>
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
            source={{
              uri:
                '/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png',
            }}
          />
          <Text>Timers</Text>
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
            style={{width: 60, height: 50}}
            source={{
              uri:
                '/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-Off Valve.psd',
            }}
          />
          <Text>Shut-Off</Text>
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
            source={{
              uri:
                '/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png',
            }}
          />
          <Text>Solenoid</Text>
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
          <Text>General</Text>
          <Text>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.homePageButtonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.homeButton}>
          <FontAwesomeIcon icon={faHome} size={33} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  // End of the display for Customer Screen
};
const styles = StyleSheet.create({
  customerScreenHeader: {
    //marginTop: '5%',
    //marginBottom: '10%',
    // borderWidth: 3,
    //borderColor: 'black',
    //alignItems: 'center',
    //borderTopWidth: 3,
    //borderTopColor: '#26660b',
    //alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    margin: '5%',
    //justifyContent: 'center',
  },
  customerInfoContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    height: '35%',
    // marginTop: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '1.5%',
    marginRight: '1.5%',
    //justifyContent: 'space-around',
    //flex: 1,
    // alignItems: 'vertical',
    // flexDirection: 'row',
  },
  customerScreenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '12%',
    //marginRight: '12%',
  },
  customerInfoChildContainer: {
    margin: '5%',
    marginLeft: '1.5%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 17,
  },

  customerInfoText: {
    fontSize: 17,
    //fontWeight: '500',
    //fontFamily: 'Iowan Old Style',
  },

  labelText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
  buttonContainer: {
    //borderLeftWidth: 3,
    //borderRightWidth: 3,
    //borderBottomWidth: 3,
    //borderWidth: 3,
    //borderColor: '#26660b',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
    height: '17%',
  },
  generalButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: '15%',
  },
  shutOffButton: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft: '15%',
  },
  divider: {
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    marginLeft: '10%',
    marginRight: '10%',
  },
  homePageButtonContainer: {
    marginTop: '10%',
    //marginBottom: '5%',
    // borderWidth: 3,
    //borderColor: 'black',
    //alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'center',
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
  homeButton: {
    //alignItems: 'center',
    marginTop: '15%',
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
export default CustomerScreen;
