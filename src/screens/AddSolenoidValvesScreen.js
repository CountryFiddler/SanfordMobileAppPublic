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
  StyleSheet,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Alert, Image, Text, TouchableOpacity,
} from "react-native";
import {submitShutOffInfo} from '../../api/ShutOffValveApi';
import {submitSolenoidValvesInfo} from '../../api/SolenoidValveApi';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faMapMarkerAlt, faRuler, faTimes } from "@fortawesome/free-solid-svg-icons";
import { submitTimerInfo } from "../../api/TimerApi";
import { styles } from "../../api/stylesApi";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

// Start of Add Timer Screen Display
const AddSolenoidValvesScreen = props => {
  const customer = props.navigation.getParam('customer');
  const solenoidValves = props.navigation.getParam('utilities');
  const [location, setLocation] = useState('');
  const [solenoidValvesType, setSolenoidValvesType] = useState('');
  const [size, setSize] = useState('');
  const [numValves, setNumValves] = useState('');
  const [zoneNumbers, setZoneNumbers] = useState('');
  const [yearInstalled, setYearInstalled] = useState('');
  function checkEmptySubmissions() {
    if (location === '') {
      Alert.alert(
        'Please Specify the Location of the Valves (Ex. NW Corner of the House)',
      );
      return false;
    } else if (solenoidValvesType === '') {
      Alert.alert(
        'Please Specify the Type of Valves (Rainbird, Rainbird Scrubbers, Orbit, etc...)',
      );
      return false;
    } else {
      return true;
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.addSolenoidValveDataScreenHeader}>
        <View style={styles.iconHeader}>
          <Image
            style={{width: 36, height: 40}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
          />
        </View>
        <Text style={styles.addInfoScreenTitle}>
          Add Solenoid Valve
        </Text>
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={20} />
          <Text style={styles.labelText}> Location: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Valves Location'}
            value={location}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setLocation(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Image
            style={{width: 26, height: 30}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
          />
          <Text style={styles.labelText}> Type: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Valve Type'}
            value={solenoidValvesType}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setSolenoidValvesType(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faRuler} size={20} />
          <Text style={styles.labelText}> Size: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={'Valve Size'}
            value={size}
            onChangeText={text => setSize(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Valves: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={'Number of Valves'}
            value={numValves}
            onChangeText={text => setNumValves(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Zones Controlled: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={'(Ex. Zones 1-4)'}
            value={zoneNumbers}
            onChangeText={text => setZoneNumbers(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faCalendarAlt} size={20} />
          <Text style={styles.labelText}> Year Installed: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={'Year Installed'}
            value={yearInstalled}
            onChangeText={text => setYearInstalled(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.submitDataButtonContainer}>
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
            <FontAwesomeIcon icon={faTimes} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (checkEmptySubmissions()) {
                submitSolenoidValvesInfo(
                  customer,
                  location,
                  solenoidValvesType,
                  size,
                  numValves,
                  zoneNumbers,
                  yearInstalled,
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

export default AddSolenoidValvesScreen;
