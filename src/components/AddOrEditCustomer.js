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
import React, {Component} from 'react';
import {addCustomer, updateCustomer} from '../../api/FirestoreApi';
import PhoneInput from 'react-native-phone-number-input';
import PhoneInputWithCountryDefault from 'react-phone-number-input/modules/PhoneInputWithCountryDefault';
import PhoneInputWithCountry from 'react-phone-number-input/modules/PhoneInputWithCountry';

class AddOrEditCustomer extends Component {
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
  submitCustomerInfo(navigation, AddScreen, EditScreen, customer) {
    /* Check for null entries. If adding a customer and the entries are null
      then we do not add the customer to the database (or if we are editing
      we just dont update the data fields when the user clicks submit)*/
    this.checkForNullTextEntries(customer, AddScreen, EditScreen);

    // If AddScreen and checkForNullTextEntries is false, then we add a
    // customer to the database
    if (
      AddScreen &&
      !this.checkForNullTextEntries(customer, AddScreen, EditScreen)
    ) {
      // Call addCustomer and set the data fields of firstName, lastName,
      // and address.
      addCustomer({
        firstName: this.state.currentCustomerFirstName,
        lastName: this.state.currentCustomerLastName,
        address: this.state.currentCustomerAddress,
        phoneNumber: this.state.currentCustomerPhoneNumber,
      });
      // Go back to the home page after adding the customer to the database
      navigation.navigate('Home');
    }
    // Do the following if EditScreen is true
    if (EditScreen) {
      this.state.currentCustomerID = customer.id;
      // Update the customer data fields
      customer.firstName = this.state.currentCustomerFirstName;
      customer.lastName = this.state.currentCustomerLastName;
      customer.address = this.state.currentCustomerAddress;
      customer.phoneNumber = this.state.currentCustomerPhoneNumber;
      customer.searchText =
        this.state.currentCustomerFirstName +
        ' ' +
        this.state.currentCustomerLastName +
        '\n' +
        this.state.currentCustomerAddress;
      // Update the customer info and navigate back to the Customer Screen
      updateCustomer(
        customer,
        navigation.navigate('Customer', {customer: customer}),
      );
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
  checkForNullTextEntries(customer, AddScreen, EditScreen) {
    // Becomes true if a data field is null.
    var textError = false;
    if (AddScreen) {
      if (this.state.currentCustomerFirstName == null) {
        this.state.customerFirstNamePlaceholder =
          'Please Enter a Valid Customer First Name';
        textError = true;
      }
      if (this.state.currentCustomerLastName == null) {
        this.state.customerLastNamePlaceholder =
          'Please Enter a Valid Customer Last Name';
        textError = true;
      }
      if (this.state.currentCustomerAddress == null) {
        this.state.customerAddressPlaceholder =
          'Please Enter a Valid Customer Address';
        textError = true;
      }
      return textError;
    }
    if (EditScreen) {
      if (this.state.currentCustomerFirstName == null) {
        this.state.currentCustomerFirstName = customer.firstName;
        textError = true;
      }
      if (this.state.currentCustomerLastName == null) {
        this.state.currentCustomerLastName = customer.lastName;
        textError = true;
      }
      if (this.state.currentCustomerAddress == null) {
        this.state.currentCustomerAddress = customer.address;
        textError = true;
      }
      if (this.state.currentCustomerPhoneNumber == null) {
        this.state.currentCustomerPhoneNumber = customer.phoneNumber;
        textError = true;
      }
    }
    return textError;
  }

  /**
   * Description: This function is used to determine what the placeholder
   * for the text entry box for the customer's first name
   * will be depending on if AddScreen and EditScreen are true or not.
   *
   * Parameters: AddScreen, EditScreen, customer
   *
   * Preconditions: None
   *
   * Postconditions: The placeholder
   * for the text entry box for the customer's first name should be
   * 'Customer First Name' if AddScreen is true or the customers actual
   * first name if EditScreen is true
   *
   * Return: None
   * Functions Called: None
   *
   */
  findCustomerFirstNamePlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerFirstNamePlaceholder = 'Customer First Name';
    }
    if (EditScreen) {
      this.state.customerFirstNamePlaceholder = customer.firstName;
    }
  }

  /**
   * Description: This function is used to determine what the placeholder
   * for the text entry box for the customer's last name
   * will be depending on if AddScreen and EditScreen are true or not.
   *
   * Parameters: AddScreen, EditScreen, customer
   *
   * Preconditions: None
   *
   * Postconditions: The placeholder
   * for the text entry box for the customer's last name should be
   * 'Customer Last Name' if AddScreen is true or the customers actual
   * last name if EditScreen is true
   *
   * Return: None
   * Functions Called: None
   *
   */
  findCustomerLastNamePlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerLastNamePlaceholder = 'Customer Last Name';
    }
    if (EditScreen) {
      this.state.customerLastNamePlaceholder = customer.lastName;
    }
  }

  /**
   * Description: This function is used to determine what the placeholder
   * for the text entry box for the customer's address
   * will be depending on if AddScreen and EditScreen are true or not.
   *
   * Parameters: AddScreen, EditScreen, customer
   *
   * Preconditions: None
   *
   * Postconditions: The placeholder
   * for the text entry box for the customer's address should be
   * 'Customer Address' if AddScreen is true or the customers actual
   * address if EditScreen is true
   *
   * Return: None
   * Functions Called: None
   *
   */
  findCustomerAddressPlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerAddressPlaceholder = 'Customer Address';
    }
    if (EditScreen) {
      this.state.customerAddressPlaceholder = customer.address;
    }
  }

  findCustomerPhoneNumPlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerPhoneNumPlaceholder = 'Enter Phone Number';
    }
    if (EditScreen) {
      this.state.customerPhoneNumPlaceholder = customer.phoneNumber;
    }
  }
  parsePhoneNumber(text) {
    this.setState({
      currentCustomerPhoneNumber: text.replace(/[^0-9]/g, ''),
    });
  }
  // List of current state variables
  state = {
    currentCustomerFirstName: null,
    currentCustomerLastName: null,
    currentCustomerAddress: null,
    currentCustomerPhoneNumber: null,
    currentCustomerID: null,
    customerFirstNamePlaceholder: '',
    customerLastNamePlaceholder: '',
    customerAddressPlaceholder: '',
    customerPhoneNumPlaceholder: '',
    userEntryError: false,
  };

  render() {
    // Get the customer from props (this is only if the user is coming
    // from the Customer Screen)
    const customer = this.props.navigation.getParam('customer');
    // Get the navigation prop
    const {navigation} = this.props;

    // Get the placeholders for the text entry boxes for the
    // customer's first name, last name, and address
    this.findCustomerFirstNamePlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
    );

    this.findCustomerLastNamePlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
    );

    this.findCustomerAddressPlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
    );

    this.findCustomerPhoneNumPlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
    );
    console.log(this.state.currentCustomerPhoneNumber);
    return (
      // Start of the display for adding or editing a customer
      <SafeAreaView>
        <View>
          <TextInput
            // Text Input Box for the customer's first name
            placeholder={this.state.customerFirstNamePlaceholder}
            value={this.state.currentCustomerFirstName}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChange={text =>
              this.setState({
                currentCustomerFirstName: text,
              })
            }
          />
          <TextInput
            // Text Input Box for the customer's last name
            placeholder={this.state.customerLastNamePlaceholder}
            value={this.state.currentCustomerLastName}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerLastName: (prevState.currentCustomerLastName = text),
              }))
            }
          />
          <TextInput
            // Text Input Box for the customer's address
            placeholder={this.state.customerAddressPlaceholder}
            value={this.state.currentCustomerAddress}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerAddress: (prevState.currentCustomerAddress = text),
              }))
            }
          />
          <PhoneInput
            defaultCode="US"
            placeholder={this.state.customerPhoneNumPlaceholder}
            layout="first"
            value={this.state.currentCustomerPhoneNumber}
            onChangeFormattedText={text => this.parsePhoneNumber(text)}
          />
          <Button
            // Submit button, when clicked submits the info entered by
            // the user to the database
            title="Submit"
            onPress={() =>
              this.submitCustomerInfo(
                navigation,
                this.props.AddScreen,
                this.props.EditScreen,
                customer,
              )
            }
          />
        </View>
      </SafeAreaView>
    );
    // End of the display for adding or editing a customer
  }
}
export default AddOrEditCustomer;
