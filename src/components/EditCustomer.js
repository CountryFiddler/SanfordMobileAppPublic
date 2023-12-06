import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {updateCustomer} from '../../api/FirestoreApi';
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
import {getNotes} from '../../api/UtilityApi';

const EditCustomer = props => {
  const customer = props.navigation.getParam('customer');
  const timers = props.navigation.getParam('timers');
  const shutOffs = props.navigation.getParam('shutOffs');
  const solenoidValvesList = props.navigation.getParam('solenoidValves');
  const generalNotes = props.navigation.getParam('generalNotes');
  console.log(generalNotes);
  var timerCollection = [];
  var shutOffCollection = [];
  var solenoidValveCollection = [];
  var generalNoteCollection = [];
  console.log(shutOffs.length);
  console.log(solenoidValvesList.length);
  for (var i = 0; i < timers.length; i++) {
    var timerNotes = getNotes(customer, timers[i], 'TimerNotes');
    var findTimerNotes = getNotes(customer, timers[i], 'FindTimerNotes');
    timerCollection.push({
      utility: timers[i],
      noteCollection: [timerNotes, findTimerNotes],
    });
  }
  for (var j = 0; j < shutOffs.length; j++) {
    var shutOffNotes = getNotes(customer, shutOffs[j], 'ShutOffValveNotes');
    var findShutOffNotes = getNotes(
      customer,
      shutOffs[j],
      'FindShutOffValveNotes',
    );
    shutOffCollection.push({
      utility: shutOffs[j],
      noteCollection: [shutOffNotes, findShutOffNotes],
    });
  }
  for (var k = 0; k < solenoidValvesList.length; k++) {
    var solenoidValveNotes = getNotes(
      customer,
      solenoidValvesList[k],
      'SolenoidValveNotes',
    );
    var findSolenoidValveNotes = getNotes(
      customer,
      solenoidValvesList[k],
      'FindSolenoidValvesNotes',
    );
    solenoidValveCollection.push({
      utility: solenoidValvesList[k],
      noteCollection: [solenoidValveNotes, findSolenoidValveNotes],
    });
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
    customer.phoneNumber.slice(1),
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
      var finalPhoneNumber = 1 + currentCustomerPhoneNumber;
      updateCustomer({
        firstName: currentCustomerFirstName,
        lastName: currentCustomerLastName,
        address: currentCustomerAddress,
        phoneNumber: finalPhoneNumber,
        id: customer.id,
      });
      customer.firstName = currentCustomerFirstName;
      customer.lastName = currentCustomerLastName;
      customer.address = currentCustomerAddress;
      customer.phoneNumber = finalPhoneNumber;
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
    if (currentCustomerAddress === '' || currentCustomerLastName === '') {
      Alert.alert('Please Enter a Last Name and Address');
    }
    return textError;
  }
  function parsePhoneNumber(text) {
    setCurrentCustomerPhoneNumber(text.replace(/[^0-9]/g, ''));
  }
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
            placeholder={customerFirstNamePlaceholder}
            value={currentCustomerFirstName}
            onChangeText={text => setCurrentCustomerFirstName(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faIdBadge} size={17} style={styles.icons} />
          <TextInput
            style={styles.infoText}
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
                deleteCustomer: true,
                customer: customer,
                utility: '',
                timerCollection: timerCollection,
                shutOffCollection: shutOffCollection,
                solenoidValveCollection: solenoidValveCollection,
                generalNotes: generalNotes,
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
            <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
            <Text style={styles.blackCancelButtonText}>Cancel</Text>
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
};
export default EditCustomer;
