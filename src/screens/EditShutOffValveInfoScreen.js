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
  TextInput,
  Image,
  TouchableOpacity, ScrollView,
} from "react-native";
import {
  submitShutOffChanges,
  submitShutOffInfo,
} from '../../api/ShutOffValveApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';

// Start of Home Screen Display
const EditShutOffValveInfoScreen = props => {
  // Get the customer from props (this is only if the user is coming
  // from the Customer Screen)
  const customer = props.navigation.getParam('customer');
  const shutOffs = props.navigation.getParam('utilities');
  const shutoffValve = props.navigation.getParam('shutoffValve');
  const noteCollection = props.navigation.getParam('noteCollection');
  // Get the navigation prop
  const navigation = props.navigation;
  const [currentShutOffType, setShutOffType] = useState(shutoffValve.type);
  const [currentShutOffSize, setShutOffSize] = useState(shutoffValve.size);
  const [currentLocation, setCurrentLocation] = useState(shutoffValve.location);
  const [currentBackFlow, setCurrentBackFlow] = useState(shutoffValve.backFlow);
  const [currentYearInstalled, setCurrentYearInstalled] = useState(
    shutoffValve.yearInstalled,
  );
  return (
    <SafeAreaView>
      <View style={styles.addInfoScreenHeader}>
        <Image
          style={{width: 40, height: 35}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
        />
        <Text style={styles.addInfoScreenTitle}>Edit Shut-Off</Text>
      </View>
      <View >
        <View style={styles.longDividerWithSpacing} />
        <ScrollView style={{height: '48%'}}>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> Type: </Text>
          <TextInput
            style={styles.infoText}
            placeholder={shutoffValve.type}
            value={currentShutOffType}
            onChangeText={text => setShutOffType(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> Size: </Text>
          <TextInput
            style={styles.infoText}
            placeholder={shutoffValve.size}
            value={currentShutOffSize}
            onChangeText={text => setShutOffSize(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Icons icon={'location'} size={20} />
          <Text style={styles.labelText}> Location: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Location'}
            value={currentLocation}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setCurrentLocation(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Icons icon={'backFlow'} size={20}/>
          <Text style={styles.labelText}>  Backflow: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Yes/No'}
            value={currentBackFlow}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setCurrentBackFlow(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Icons icon={'calendar'} size={20} />
          <Text style={styles.labelText}> Year Installed: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Year Installed'}
            value={currentYearInstalled}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setCurrentYearInstalled(text)}
          />
        </View>
        </ScrollView>
        <View style={styles.longDividerWithSpacing} />
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DeleteContent', {
                deleteUtility: true,
                customer: customer,
                utility: shutoffValve,
                noteCollection: noteCollection,
                contentToDelete: 'This Shut-Off',
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <Icons icon={'trash'} size={40} color={'#cc0000'} />
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              // Pass navigation and customer as props to the Edit Customer Screen
              props.navigation.goBack()
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
            <Text style={styles.blackCancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              submitShutOffChanges(
                customer,
                shutoffValve,
                currentShutOffType,
                currentShutOffSize,
                currentLocation,
                currentBackFlow,
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

export default EditShutOffValveInfoScreen;
