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
  Alert,
} from 'react-native';
import {submitShutOffInfo} from '../../api/ShutOffValveApi';
import {submitSolenoidValvesInfo} from '../../api/SolenoidValveApi';

// Start of Add Timer Screen Display
const AddSolenoidValvesScreen = props => {
  const customer = props.navigation.getParam('customer');
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
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={'Valves Location'}
          value={location}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setLocation(text)}
        />
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={'Valve Type'}
          value={solenoidValvesType}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setSolenoidValvesType(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Valve Size'}
          value={size}
          onChangeText={text => setSize(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Number of Valves'}
          value={numValves}
          onChangeText={text => setNumValves(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Zone Numbers (Ex. Zones 1-4)'}
          value={zoneNumbers}
          onChangeText={text => setZoneNumbers(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Year Installed'}
          value={yearInstalled}
          onChangeText={text => setYearInstalled(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Submit"
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
        />
      </View>
    </SafeAreaView>
  );
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

export default AddSolenoidValvesScreen;
