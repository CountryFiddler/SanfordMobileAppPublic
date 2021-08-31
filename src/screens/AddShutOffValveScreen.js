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
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {submitShutOffInfo} from '../../api/ShutOffValveApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {submitTimerInfo} from '../../api/TimerApi';
import { styles } from "../../api/stylesApi";

// Start of Add Timer Screen Display
const AddShutOffValveScreen = props => {
  const customer = props.navigation.getParam('customer');
  const shutOffs = props.navigation.getParam('utilities');
  const [shutoffType, setShutOffType] = useState('');
  const [size, setSize] = useState('');
  function checkEmptySubmissions() {
    if (shutoffType === '') {
      Alert.alert(
        'Please Specify the Type of Shut-Off Valve (Ford, Ball, Gate, etc...)',
      );
      return false;
    } else {
      return true;
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.addInfoScreenHeader}>
        <Image
          style={{width: 40, height: 35}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
        />
        <Text style={styles.addInfoScreenTitle}>Add Shut-Off</Text>
      </View>
      <View style={styles.addInfoContainer}>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> Type: </Text>
          <TextInput
            style={styles.infoText}
            placeholder={'Shut-Off Type'}
            value={shutoffType}
            onChangeText={text => setShutOffType(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}> Size: </Text>
          <TextInput
            style={styles.infoText}
            placeholder={'Shut-Off Valve Size'}
            value={size}
            onChangeText={text => setSize(text)}
          />
        </View>
        <View style={styles.addTextFieldDivider} />
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              // Pass navigation and customer as props to the Edit Customer Screen
              props.navigation.navigate('UtilitySelectionScreen', {
                customer: customer,
                utilityType: 'Timers',
                utilities: shutOffs,
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
                submitShutOffInfo(
                  customer,
                  shutoffType,
                  size,
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

export default AddShutOffValveScreen;
