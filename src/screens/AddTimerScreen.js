/**
 * File Name: HomeScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen allows users to search for an existing customer
 * or navigate to the screen to add a new custoemr to the database.
 *
 * Purpose: Provides users with the ability to search for customers in the
 * database and navigate to the screen to add new customers.
 */
// Import Statements
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Alert, TouchableOpacity, Image,
} from "react-native";
import CustomerSearchBar from '../components/CustomerSearchBar';
import {submitTimerInfo} from '../../api/TimerApi';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressBook, faCheck, faIdBadge, faPhoneAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../api/stylesApi";

// Start of Add Timer Screen Display
const AddTimerScreen = props => {
  const customer = props.navigation.getParam('customer');
  const timers = props.navigation.getParam('utilities');
  const [timerType, setTimerType] = useState('');
  const [numPrograms, setNumPrograms] = useState('');
  const [numZones, setNumZones] = useState('');
  function checkEmptySubmissions() {
    if (timerType === '') {
      Alert.alert('Please Specify the Timer Type (Rainbird, Hunter, etc...)');
      return false;
    } else {
      return true;
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.addInfoScreenHeader}>
        <Image
          style={{width: 30, height: 30}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png')}
        />
        <Text style={styles.addInfoScreenTitle}>
          Add Timer
        </Text>
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> Type: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Timer Type'}
            value={timerType}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setTimerType(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> # Programs: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={'Number of Programs'}
            value={numPrograms}
            onChangeText={text => setNumPrograms(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> # Zones: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's address
            placeholder={'Number of Zones'}
            value={numZones}
            onChangeText={text => setNumZones(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
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
            <FontAwesomeIcon icon={faTimes} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (checkEmptySubmissions()) {
                submitTimerInfo(
                  customer,
                  timerType,
                  numPrograms,
                  numZones,
                  props.navigation,
                );
              }
            }}
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faCheck} size={40} color={'#26660b'} />
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
// End of Home Screen Display

// Start of StylingSheet

export default AddTimerScreen;
