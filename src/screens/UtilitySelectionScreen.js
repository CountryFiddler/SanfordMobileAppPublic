/**
 * Home Screen
 * 7-1-21
 * The page contains a search bar to search for customers and a link
 * to go to the Add Customers Page. */

// Import Statements
import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {getTimerInfo} from '../../api/TimerApi';
import {getTimers} from '../../api/FirestoreApi';
import {
  faUser,
  faAddressBook,
  faPhoneAlt,
  faPencilAlt,
  faClock,
  faUserPlus,
  faSignOutAlt,
  faHome,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote, fa} from '@fortawesome/free-regular-svg-icons';
import UtilitySelection from '../components/UtilitySelection';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

// Start of Home Screen Display
const UtilitySelectionScreen = props => {
  const customer = props.navigation.getParam('customer');
  const headerIcon = props.navigation.getParam('headerIcon');
  const utilityType = props.navigation.getParam('utilityType');
  const utilityTypeText = props.navigation.getParam('utilityTypeText');
  const addUtilityText = props.navigation.getParam('addUtilityText');
  const utilities = props.navigation.getParam('utilities');
  const addUtility = props.navigation.getParam('addUtilityScreen');
  const addUtilityButtonTitle = props.navigation.getParam(
    'addUtilityButtonTitle',
  );
  const utilityInfoScreenTitle = props.navigation.getParam(
    'utilityInfoScreenTitle',
  );
  //var iconPath = headerIcon.toString();
  //console.log(iconPath);
  //const timers = getTimers(customer);
  return (
    <View>
      <View style={styles.navigatorScreenHeader}>
        <Icons icon={headerIcon} size={'medium'} />
        <Text style={styles.navigatorScreenTitle}>
          {utilityTypeText + ' List'}
        </Text>
      </View>
      <View style={styles.utilityNavigatorContainer}>
        <UtilitySelection
          customer={customer}
          utilityList={utilities}
          utilityInfoScreen={utilityInfoScreenTitle}
          navigation={props.navigation}
          utilityType={utilityType}
          utilityTypeText={utilityTypeText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Customer', {
              customer: customer,
              navigation: props.navigation,
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faUser} size={33} />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={33} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(addUtility, {
              customer: customer,
              utilities: utilities,
              navigation: props.navigation,
            })
          }
          title={addUtilityButtonTitle}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faPlus} size={33} />
          <Text>{addUtilityText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// End of Home Screen Display

// Start of StylingSheet

export default UtilitySelectionScreen;
