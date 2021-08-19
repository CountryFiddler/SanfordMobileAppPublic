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
} from 'react-native';
import React, {Component, useState} from 'react';
import {addCustomer, updateCustomer} from '../../api/FirestoreApi';
import PhoneInput from 'react-native-phone-number-input';
import PhoneInputWithCountryDefault from 'react-phone-number-input/modules/PhoneInputWithCountryDefault';
import PhoneInputWithCountry from 'react-phone-number-input/modules/PhoneInputWithCountry';

const EditCustomer = props => {
  const customer = props.navigation.getParam('customer');
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
    customer.phone,
  );
  const [currentCustomerID, setCurrentCustomerID] = useState(customer.id);
  const [
    customerFirstNamePlaceholder,
    setCustomerFirstNamePlaceholder,
  ] = customer.firstName;
  const [
    customerLastNamePlaceholder,
    setCustomerLastNamePlaceholder,
  ] = customer.lastName;
  const [
    customerAddressPlaceholder,
    setCustomerAddressPlaceholder,
  ] = customer.address;
  const [
    customerPhoneNumPlaceholder,
    setCustomerPhoneNumPlaceholder,
  ] = customer.phoneNumber;

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
    //TODO Display a message to the user if there is a null field

    // If AddScreen and checkForNullTextEntries is false, then we add a
    // customer to the database
    // Call addCustomer and set the data fields of firstName, lastName,
    // and address.
    updateCustomer({
      firstName: currentCustomerFirstName,
      lastName: currentCustomerLastName,
      address: currentCustomerAddress,
      phoneNumber: currentCustomerPhoneNumber,
    });
    // Go back to the home page after adding the customer to the database
    navigation.navigate('Home');
  }

  function parsePhoneNumber(text) {
    setCurrentCustomerPhoneNumber(text.replace(/[^0-9]/g, ''));
  }
  console.log(this.state.currentCustomerPhoneNumber);
  return (
    // Start of the display for adding or editing a customer
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={customerFirstNamePlaceholder}
          value={currentCustomerFirstName}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChange={text => setCurrentCustomerFirstName(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={customerLastNamePlaceholder}
          value={currentCustomerLastName}
          onChangeText={text => setCurrentCustomerLastName(text)}
        />
        <TextInput
          // Text Input Box for the customer's address
          placeholder={customerAddressPlaceholder}
          value={currentCustomerAddress}
          onChangeText={text => setCurrentCustomerAddress(text)}
        />
        <PhoneInput
          defaultCode="US"
          placeholder={customerPhoneNumPlaceholder}
          layout="first"
          value={currentCustomerPhoneNumber}
          onChangeFormattedText={text => parsePhoneNumber(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
          onPress={() => submitCustomerInfo()}
        />
      </View>
    </SafeAreaView>
  );
  // End of the display for adding or editing a customer
};
export default EditCustomer;
