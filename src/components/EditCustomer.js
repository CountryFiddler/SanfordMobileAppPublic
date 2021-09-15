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
  TouchableOpacity,
} from 'react-native';
import React, {Component, useState} from 'react';
import {addCustomer, updateCustomer} from '../../api/FirestoreApi';
import PhoneInput from 'react-native-phone-number-input';
import PhoneInputWithCountryDefault from 'react-phone-number-input/modules/PhoneInputWithCountryDefault';
import PhoneInputWithCountry from 'react-phone-number-input/modules/PhoneInputWithCountry';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAddressBook,
  faCheck,
  faIdBadge,
  faPhoneAlt,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {checkValidPhoneNumber} from '../../api/CustomerApi';
import Icons from './Icons';
import {getSolenoidValvesNotes} from '../../api/SolenoidValveApi';
import {getNotes} from '../../api/UtilityApi';

const EditCustomer = props => {
  const customer = props.navigation.getParam('customer');
  const timers = props.navigation.getParam('timers');
  const shutOffs = props.navigation.getParam('shutOffs');
  const solenoidValvesList = props.navigation.getParam('solenoidValves');
  const [noteCollection, setNoteCollection] = useState([]);
  for (var i = 0; i < timers.length; i++) {
    var timerNotes = getNotes(customer, timers[i], 'TimerNotes');
    var findTimerNotes = getNotes(customer, timers[i], 'FindTimerNotes');
    setNoteCollection(noteCollection.concat(timerNotes));
    setNoteCollection(noteCollection.concat(findTimerNotes));
  }
  for (var j = 0; i < shutOffs.length; j++) {
    var shutOffNotes = getNotes(customer, shutOffs[j], 'ShutOffValveNotes');
    var findShutOffNotes = getNotes(
      customer,
      shutOffs[j],
      'FindShutOffValveNotes',
    );
    setNoteCollection(noteCollection.concat(shutOffNotes));
    setNoteCollection(noteCollection.concat(findShutOffNotes));
  }
  for (var k = 0; i < solenoidValvesList.length; k++) {
    var solenoidValveNotes = getNotes(
      customer,
      solenoidValvesList[k],
      'SolenoidValveNotes',
    );
    var findSolenoidValveNotes = getNotes(
      customer,
      solenoidValvesList[k],
      'FindSolenoidValveNotes',
    );
    setNoteCollection(noteCollection.concat(solenoidValveNotes));
    setNoteCollection(noteCollection.concat(findSolenoidValveNotes));
  }
  console.log(customer.id);
  // Get the navigation prop
  const {navigation} = props;

  const [currentCustomerFirstName, setCurrentCustomerFirstName] = useState(
    customer.firstName,
  );
  const [currentCustomerLastName, setCurrentCustomerLastName] = useState(
    customer.lastName,
  );
  const [currentCustomerAddress, setCurrentCustomerAddress] = useState(
    customer.address,
  );
  const [currentCustomerPhoneNumber, setCurrentCustomerPhoneNumber] = useState(
    customer.phoneNumber,
  );
  const [currentCustomerID, setCurrentCustomerID] = useState(customer.id);
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

    // If AddScreen and checkForNullTextEntries is false, then we add a
    // customer to the database
    // Call addCustomer and set the data fields of firstName, lastName,
    // and address.
    if (
      !checkForNullTextEntries() &&
      checkValidPhoneNumber(currentCustomerPhoneNumber)
    ) {
      updateCustomer({
        firstName: currentCustomerFirstName,
        lastName: currentCustomerLastName,
        address: currentCustomerAddress,
        phoneNumber: currentCustomerPhoneNumber,
        id: customer.id,
      });
      // Go back to the home page after adding the customer to the database
      /*props.navigation.navigate('Customer', {
        customer: {
          firstName: currentCustomerFirstName,
          lastName: currentCustomerLastName,
          address: currentCustomerAddress,
          phoneNumber: currentCustomerPhoneNumber,
        },
        navigation: props.navigation,
      });*/
      customer.firstName = currentCustomerFirstName;
      customer.lastName = currentCustomerLastName;
      customer.address = currentCustomerAddress;
      customer.phoneNumber = currentCustomerPhoneNumber;
      customer.id = customer.id;
      customer.searchText =
        currentCustomerFirstName +
        ' ' +
        currentCustomerLastName +
        '\n' +
        currentCustomerAddress;
      props.navigation.navigate('Customer', {
        customer: customer,
        navigation: props.navigation,
      });
    }
  }
  function checkForNullTextEntries() {
    // Becomes true if a data field is null.
    var textError = false;

    if (currentCustomerFirstName === '') {
      setCurrentCustomerFirstName('');
    }
    if (currentCustomerLastName === '') {
      setCustomerLastNamePlaceholder('Please Enter a Valid Customer Last Name');
      textError = true;
    }
    if (currentCustomerAddress === '') {
      setCustomerAddressPlaceholder('Please Enter a Valid Customer Address');
      textError = true;
    }
    if (currentCustomerPhoneNumber === '') {
      setCurrentCustomerPhoneNumber('');
    }
    return textError;
  }
  function parsePhoneNumber(text) {
    setCurrentCustomerPhoneNumber(text.replace(/[^0-9]/g, ''));
  }
  //console.log(this.state.currentCustomerPhoneNumber);
  return (
    <SafeAreaView>
      <View style={styles.addInfoScreenHeader}>
        <FontAwesomeIcon icon={faUser} size={33} />
        <Text style={styles.addInfoScreenTitle}>Edit Customer</Text>
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={customerFirstNamePlaceholder}
            value={currentCustomerFirstName}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setCurrentCustomerFirstName(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={customerLastNamePlaceholder}
            value={currentCustomerLastName}
            onChangeText={text => setCurrentCustomerLastName(text)}
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
            value={currentCustomerAddress}
            onChangeText={text => setCurrentCustomerAddress(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faPhoneAlt} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
            placeholder={customerPhoneNumPlaceholder}
            value={currentCustomerPhoneNumber}
            onChangeText={text => {
              setCurrentCustomerPhoneNumber(text), parsePhoneNumber(text);
            }}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DeleteContent', {
                deleteUtility: true,
                customer: customer,
                utility: '',
                noteCollection: noteCollection,
                contentToDelete: customer.firstName + ' ' + customer.lastName,
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <Icons icon={'trash'} size={40} color={'#cc0000'} />
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Customer', {
                customer: customer,
                navigation: props.navigation,
              })
            }
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
    // Start of the display for adding or editing a customer
  );
  // End of the display for adding or editing a customer
};
export default EditCustomer;
