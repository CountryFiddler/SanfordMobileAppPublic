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
  SafeAreaView,
  TextInput, Image, TouchableOpacity,
} from "react-native";
import {submitShutOffChanges} from '../../api/ShutOffValveApi';
import { submitSolenoidValvesChanges, submitSolenoidValvesInfo } from "../../api/SolenoidValveApi";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faMapMarkerAlt, faRuler, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { styles } from "../../api/stylesApi";
import Icons from "../components/Icons";

// Start of Home Screen Display
const EditSolenoidValvesInfoScreen = props => {
  // Get the customer from props (this is only if the user is coming
  // from the Customer Screen)
  const customer = props.navigation.getParam('customer');
  const solenoidValves = props.navigation.getParam('solenoidValves');
  const noteCollection = props.navigation.getParam('noteCollection');
  const solenoidValvesList = props.navigation.getParam('solenoidValvesList');
  // Get the navigation prop
  const navigation = props.navigation;
  const [currentLocation, setLocation] = useState(solenoidValves.location);
  const [currentSolenoidValvesType, setShutOffType] = useState(
    solenoidValves.type,
  );
  const [currentSolenoidValvesSize, setShutOffSize] = useState(
    solenoidValves.size,
  );
  const [currentNumValves, setNumValves] = useState(solenoidValves.numValves);
  const [currentZoneNumbers, setZoneNumbers] = useState(
    solenoidValves.zoneNumbers,
  );
  const [currentYearInstalled, setYearInstalled] = useState(
    solenoidValves.yearInstalled,
  );
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
          Edit Solenoid Valve
        </Text>
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={20} />
          <Text style={styles.labelText}> Location: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={solenoidValves.location}
            value={currentLocation}
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
            placeholder={solenoidValves.type}
            value={currentSolenoidValvesType}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setShutOffType(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faRuler} size={20} />
          <Text style={styles.labelText}> Size: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={solenoidValves.size}
            value={currentSolenoidValvesSize}
            onChangeText={text => setShutOffSize(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Valves: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={solenoidValves.numValves}
            value={currentNumValves}
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
            placeholder={solenoidValves.zoneNumbers}
            value={currentZoneNumbers}
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
            placeholder={solenoidValves.yearInstalled}
            value={currentYearInstalled}
            onChangeText={text => setYearInstalled(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DeleteContent', {
                deleteUtility: true,
                customer: customer,
                utility: solenoidValves,
                noteCollection: noteCollection,
                contentToDelete: 'This Valve(s)',
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <Icons icon={'trash'} size={40} color={'#cc0000'}/>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              // Pass navigation and customer as props to the Edit Customer Screen
              props.navigation.navigate('UtilitySelectionScreen', {
                customer: customer,
                utilityType: 'SolenoidValves',
                utilities: solenoidValvesList,
                addUtilityScreen: 'AddSolenoidValves',
                addUtilityButtonTitle: 'Add Valve',
                utilityInfoScreenTitle: 'SolenoidValvesInfo',
                utilityTypeText: 'Solenoid Valves',
              })
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
            <Text style={styles.blackCancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              submitSolenoidValvesChanges(
                customer,
                solenoidValves,
                currentLocation,
                currentSolenoidValvesType,
                currentSolenoidValvesSize,
                currentNumValves,
                currentZoneNumbers,
                currentYearInstalled,
                navigation,
              )
            }
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
// End of Home Screen Display


export default EditSolenoidValvesInfoScreen;
