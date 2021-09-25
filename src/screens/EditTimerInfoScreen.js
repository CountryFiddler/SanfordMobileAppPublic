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
import CustomerSearchBar from '../components/CustomerSearchBar';
import {
  addCustomer,
  getTimerNotes,
  updateCustomer,
} from '../../api/FirestoreApi';
import {submitTimerChanges, submitTimerInfo} from '../../api/TimerApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';

// Start of Home Screen Display
const EditTimerInfoScreen = props => {
  // Get the customer from props (this is only if the user is coming
  // from the Customer Screen)
  const noteSections = ['FindTimerNotes', 'TimerNotes'];
  const customer = props.navigation.getParam('customer');
  const timer = props.navigation.getParam('timer');
  const noteCollection = props.navigation.getParam('noteCollection');
  // Get the navigation prop
  const navigation = props.navigation;
  const [currentTimerType, setTimerType] = useState(timer.type);
  const [currentLocation, setCurrentLocation] = useState(timer.location);
  const [currentInsideOutside, setCurrentInsideOutside] = useState(
    timer.insideOutside,
  );
  const [currentYearInstalled, setCurrentYearInstalled] = useState(
    timer.yearInstalled,
  );
  const [currentNumPrograms, setNumPrograms] = useState(timer.numPrograms);
  const [currentNumZones, setNumZones] = useState(timer.numZones);
  return (
    // Start of the display for adding or editing a customer
    <SafeAreaView>
      <View style={styles.addInfoScreenHeader}>
        <Image
          style={{width: 30, height: 30}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png')}
        />
        <Text style={styles.addInfoScreenTitle}>Edit Timer</Text>
      </View>
      <View style={{ height: '50%' }}>
        <View style={styles.longDividerWithSpacing}/>
        <ScrollView >
        <View style={styles.infoChildContainer}>
          <Icons icon={'timer'} width={25} height={25} />
          <Text style={styles.labelText}> Type: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={timer.type}
            value={currentTimerType}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setTimerType(text)}
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
          <Icons icon={'insideOutside'} size={20} />
          <Text style={styles.labelText}> Inside/Outside: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's first name
            placeholder={'Inside/Outside'}
            value={currentInsideOutside}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text => setCurrentInsideOutside(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> # Programs: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's last name
            placeholder={timer.numPrograms}
            value={currentNumPrograms}
            onChangeText={text => setNumPrograms(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> # Zones: </Text>
          <TextInput
            style={styles.infoText}
            // Text Input Box for the customer's address
            placeholder={timer.numZones}
            value={currentNumZones}
            onChangeText={text => setNumZones(text)}
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
      </View>
      <View>
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DeleteContent', {
                deleteUtility: true,
                customer: customer,
                utility: timer,
                noteCollection: noteCollection,
                contentToDelete: 'This Timer',
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <Icons icon={'trash'} size={40} color={'#cc0000'} />
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('TimerInfo', {
                customer: customer,
                utility: timer,
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
            <Text style={styles.blackCancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              submitTimerChanges(
                customer,
                timer,
                currentTimerType,
                currentLocation,
                currentInsideOutside,
                currentYearInstalled,
                currentNumPrograms,
                currentNumZones,
                props.navigation,
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

// Start of StylingSheet

export default EditTimerInfoScreen;
