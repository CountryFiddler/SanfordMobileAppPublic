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
} from 'react-native';
import {submitShutOffChanges} from '../../api/ShutOffValveApi';
import {submitSolenoidValvesChanges} from '../../api/SolenoidValveApi';

// Start of Home Screen Display
const EditSolenoidValvesInfoScreen = props => {
  // Get the customer from props (this is only if the user is coming
  // from the Customer Screen)
  const customer = props.navigation.getParam('customer');
  const solenoidValves = props.navigation.getParam('solenoidValves');
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
    // Start of the display for adding or editing a customer
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={solenoidValves.location}
          value={currentLocation}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setLocation(text)}
        />
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={solenoidValves.type}
          value={currentSolenoidValvesType}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setShutOffType(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={solenoidValves.size}
          value={currentSolenoidValvesSize}
          onChangeText={text => setShutOffSize(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={solenoidValves.numValves}
          value={currentNumValves}
          onChangeText={text => setNumValves(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={solenoidValves.zoneNumbers}
          value={currentZoneNumbers}
          onChangeText={text => setZoneNumbers(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={solenoidValves.yearInstalled}
          value={currentYearInstalled}
          onChangeText={text => setYearInstalled(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
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
        />
      </View>
    </SafeAreaView>
  );
  // End of the display for adding or editing a customer
};
// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  homePageContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    //alignSelf: 'center',
  },
  addCustomerButton: {
    //position: 'absolute',
    marginTop: 50,
  },
});

export default EditSolenoidValvesInfoScreen;
