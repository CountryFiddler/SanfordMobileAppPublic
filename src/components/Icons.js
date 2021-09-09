/**
 * File Name: AddOrEditCustomer.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This class provides the functionality for a user to either
 * add a customer to the database or edit an existing customer in the database.
 * The information that the user can edit will pertain to the customers name
 * and address. An important part of this class is the props AddScreen and EditScreen.
 * If AddScreen is true, then this class performs the operations to add a customer
 * to the database. However, if EditScreen is true, then the class performs
 * operations to edit an existing customer in the database.
 *
 * Purpose: Allows users to add or edit customers in the firestore database
 */
// Import Statements
import {
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput,
  render,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';
import {addCustomer, updateCustomer} from '../../api/FirestoreApi';
import PhoneInput from 'react-native-phone-number-input';
import PhoneInputWithCountryDefault from 'react-phone-number-input/modules/PhoneInputWithCountryDefault';
import PhoneInputWithCountry from 'react-phone-number-input/modules/PhoneInputWithCountry';
import {Alert} from 'react-native';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAddressBook,
  faPencilAlt,
  faPhoneAlt,
  faUser,
  faCheck,
  faTimes,
  faIdBadge,
  faUserPlus,
  faSearch,
  faTrashAlt,
  faKey, faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import {checkValidPhoneNumber} from '../../api/CustomerApi';
import {
  faEnvelope,
  faImage,
  faStickyNote,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const Icons = props => {
  // Get the navigation prop

  var width = props.width;
  var height = props.height;
  var timer = false;
  var shutOff = false;
  var solenoidValve = false;
  var search = false;
  var stickyNote = false;
  var edit = false;
  var exit = false;
  var image = false;
  var trash = false;
  var email = false;
  var password = false;
  var signIn = false;
  var size = props.size;

  if (props.icon === 'timer') {
    timer = true;
    if (size === 'medium') {
      width = 30;
      height = 30;
    }
  }
  if (props.icon === 'shutOff') {
    shutOff = true;
    if (size === 'medium') {
      width = 40;
      height = 35;
    }
  }
  if (props.icon === 'solenoidValve') {
    solenoidValve = true;
    if (size === 'medium') {
      width = 36;
      height = 40;
    }
  }
  if (props.icon === 'search') {
    search = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'stickyNote') {
    stickyNote = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'edit') {
    edit = true;
    if (size === 'medium') {
      size = 25;
    }
  }
  if (props.icon === 'exit') {
    exit = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'image') {
    image = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'trash') {
    trash = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'email') {
    email = true;
    if (size === 'medium') {
      size = 33;
    }
    if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'password') {
    password = true;
    if (size === 'medium') {
      size = 33;
    }
    if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'signIn') {
    signIn = true;
    if (size === 'medium') {
      size = 33;
    }
    if (size === 'small') {
      size = 17;
    }
  }
  return (
    <SafeAreaView>
      {timer ? (
        <Image
          style={{width: width, height: height}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png')}
        />
      ) : shutOff ? (
        <Image
          style={{width: width, height: height}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
        />
      ) : solenoidValve ? (
        <Image
          style={{width: width, height: height}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
        />
      ) : search ? (
        <FontAwesomeIcon icon={faSearch} size={size} />
      ) : stickyNote ? (
        <FontAwesomeIcon icon={faStickyNote} size={size} />
      ) : edit ? (
        <FontAwesomeIcon icon={faPencilAlt} size={size} />
      ) : exit ? (
        <FontAwesomeIcon
          icon={faTimesCircle}
          size={size}
          style={{color: 'white'}}
        />
      ) : image ? (
        <FontAwesomeIcon icon={faImage} size={size} />
      ) : trash ? (
        <FontAwesomeIcon icon={faTrashAlt} size={size} />
      ) : email ? (
        <FontAwesomeIcon icon={faEnvelope} size={size} style={props.style}/>
      ) : password ? (
        <FontAwesomeIcon icon={faKey} size={size} style={props.style}/>
      ) : signIn ? (
        <FontAwesomeIcon icon={faSignInAlt} size={size} />
      ) : null}
    </SafeAreaView>
  );
};

export default Icons;
