import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {addCustomer} from '../../api/FirestoreApi';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAddressBook,
  faPhoneAlt,
  faCheck,
  faTimes,
  faIdBadge,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import {checkValidPhoneNumber} from '../../api/CustomerApi';

const AddCustomer = props => {

  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [
    customerFirstNamePlaceholder,
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
    console.log(customerPhoneNumber);
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
   * an existing customer in the database. This function is called in
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
    if (customerLastName === '') {
      setCustomerLastNamePlaceholder('Please Enter a Valid Customer Last Name');
      textError = true;
    }
    if (customerAddress === '') {
      setCustomerAddressPlaceholder('Please Enter a Valid Customer Address');
      textError = true;
    }
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
        <FontAwesomeIcon icon={faUserPlus} size={33} />
        <Text style={styles.addInfoScreenTitle}>Add Customer</Text>
      </View>
      <View style={styles.longDividerWithSpacing} />
      <View style={styles.addInfoContainer}>
        <ScrollView>
          <View style={styles.infoChildContainer}>
            <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
            <Text style={styles.labelText}> First Name: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={customerFirstNamePlaceholder}
              value={customerFirstName}
              onChangeText={text => setCustomerFirstName(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
            <Text style={styles.labelText}> Last Name: </Text>
            <TextInput
              style={styles.infoText}
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
            <Text style={styles.labelText}> Address: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={customerAddressPlaceholder}
              value={customerAddress}
              onChangeText={text => setCustomerAddress(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <FontAwesomeIcon icon={faPhoneAlt} size={17} style={styles.icons} />
            <Text style={styles.labelText}> Phone: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={customerPhoneNumPlaceholder}
              value={customerPhoneNumber}
              onChangeText={text => {
                setCustomerPhoneNumber(text), parsePhoneNumber(text);
              }}
            />
          </View>
          <View style={styles.longDividerWithSpacing} />
        </ScrollView>

        <View style={styles.addCustomerSubmitDataButtonContainer}>
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

export default AddCustomer;
