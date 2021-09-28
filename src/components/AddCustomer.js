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
  faIdBadge, faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {checkValidPhoneNumber} from '../../api/CustomerApi';

const AddCustomer = props => {
  // Get the navigation prop

  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [
    customerFirstNamePlaceholder,
    setCustomerFirstNamePlaceholder,
  ] = useState('First Name');
  const [
    customerLastNamePlaceholder,
    setCustomerLastNamePlaceholder,
  ] = useState('Last Name');
  const [customerAddressPlaceholder, setCustomerAddressPlaceholder] = useState(
    'Address',
  );
  const [
    customerPhoneNumPlaceholder,
    setCustomerPhoneNumPlaceholder,
  ] = useState('Phone Number');

  /**
   * Description: When the user clicks the submit button, this function is
   * called. The operations of this function is to process the data that the
   * user entered into the text entry boxes.
   *
   * Parameters: navigation, AddScreen, EditScreen, customer
   *
   * Preconditions: The user must click the submit button for this function
   * to be called
   *
   * Postconditions: Either a customer is added to the database or an existing
   * customer is edited in the database. This depends on if AddScreen and EditScreen
   * are true or false.
   *
   * Return: None
   *
   * Functions Called: getCustomers(this.customerRetrieved),
   * updateCustomer(customer), and checkForNullTextEntries(customer)
   *
   */
  function submitCustomerInfo() {
    /* Check for null entries. If adding a customer and the entries are null
      then we do not add the customer to the database (or if we are editing
      we just dont update the data fields when the user clicks submit)*/
    //checkForNullTextEntries();
    //checkValidPhoneNumber();
    console.log(customerPhoneNumber);
    //parsePhoneNumber();
    if (
      !checkForNullTextEntries() &&
      checkValidPhoneNumber(customerPhoneNumber)
    ) {
      // Call addCustomer and set the data fields of firstName, lastName,
      // and address.
      var finalCustomerPhoneNumber = 1 + customerPhoneNumber;
      console.log(customerFirstName);
      addCustomer({
        firstName: customerFirstName,
        lastName: customerLastName,
        address: customerAddress,
        phoneNumber: finalCustomerPhoneNumber,
      });
      // Go back to the home page after adding the customer to the database
      props.navigation.navigate('Home');
    }
  }

  /**
   *
   * Description: This function is used to see if the data fields are null
   * when the customer submits information to create a new customer or update
   * an existing customer in the database. This funciton is called in
   * submitCustomerInfo().
   *
   * Parameters: customer, AddScreen, EditScreen
   *
   * Preconditions: The user must click the submit button for this function
   * to be called within submitCustomerInfo()
   *
   * Postconditions: textError is either false if the entries are not null
   * or true if the entries are null
   *
   * Return: textError. The return value is really only necessary if we
   * are adding a customer to the database as we need to return a value
   * so that we know whether or not to continue with adding the customer
   * to the database
   *
   * Functions Called: None
   *
   */
  function checkForNullTextEntries() {
    // Becomes true if a data field is null.
    var textError = false;
    /*
    if (customerFirstName === '') {
      setCustomerFirstNamePlaceholder(
        'Please Enter a Valid Customer First Name',
      );
      textError = true;
    }*/
    if (customerLastName === '') {
      setCustomerLastNamePlaceholder('Please Enter a Valid Customer Last Name');
      textError = true;
    }
    if (customerAddress === '') {
      setCustomerAddressPlaceholder('Please Enter a Valid Customer Address');
      textError = true;
    }
    /*if (customerPhoneNumber === '') {
      setCustomerPhoneNumPlaceholder('Please Enter a Valid Customer Address');
      textError = true;
    }*/
    return textError;
  }

  function parsePhoneNumber(text) {
    setCustomerPhoneNumber(text.replace(/[^0-9]/g, ''));
  }
  console.log(customerPhoneNumber);
  return (
    // Start of the display for adding or editing a customer
    <SafeAreaView>
      <View style={styles.addInfoScreenHeader}>
        <FontAwesomeIcon icon={faUserPlus} size={33}/>
        <Text style={styles.addInfoScreenTitle}>
          Add Customer
        </Text>
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={customerFirstNamePlaceholder}
            value={customerFirstName}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setCustomerFirstName(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={customerLastNamePlaceholder}
            value={customerLastName}
            onChangeText={text => setCustomerLastName(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon
            icon={faAddressBook}
            size={17}
            style={styles.icons}
          />
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's address
            placeholder={customerAddressPlaceholder}
            value={customerAddress}
            onChangeText={text => setCustomerAddress(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faPhoneAlt} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
            placeholder={customerPhoneNumPlaceholder}
            value={customerPhoneNumber}
            onChangeText={text => {
              setCustomerPhoneNumber(text), parsePhoneNumber(text);
            }}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTimes} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => submitCustomerInfo()}
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faCheck} size={40} color={'#26660b'} />
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
  // End of the display for adding or editing a customer
};

const addCustomerStyles = {
  addCustomerScreenHeader: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    marginTop: '5%',
  },
  addCustomerScreenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addCustomerInfoContainer: {
    height: '80%',
  },
  cancelButtonText: {
    color: '#cc0000',
    fontSize: 20,
  },
  submitButtonText: {
    color: '#26660b',
    fontSize: 20,
  },
};
export default AddCustomer;
/* *
        <PhoneInput
          defaultCode={'US'}
          layout={'first'}
          placeholder={customerPhoneNumPlaceholder}
          value={customerPhoneNumber}
          onChangeFormattedText={text => {
            parsePhoneNumber(text);
          }}
        />/
*/
