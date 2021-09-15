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
import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import {getNotes} from '../../api/UtilityApi';
import {getShutOffValveNotes} from '../../api/ShutOffValveApi';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faPencilAlt, faSearch, faUser, faRuler } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { styles } from "../../api/stylesApi";
import Icons from "../components/Icons";
// Start of Home Screen Display
const ShutOffValveInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const shutoffValve = props.navigation.getParam('utility');
  const shutOffValveList = props.navigation.getParam('utilities');
  const navigation = props.navigation;
  const shutoffValveNotes = getShutOffValveNotes(customer, shutoffValve);
  const findShutOffValveNotes = getNotes(
    customer,
    shutoffValve,
    'FindShutOffValveNotes',
  );
  const noteCollection = [shutoffValveNotes, findShutOffValveNotes];
  if (shutoffValve.size === '') {
    shutoffValve.size = 'No Text Provided';
  }
  return (
    <View>
      <View style={styles.iconHeader}>
        <Image
          style={{width: 40, height: 35}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
        />
      </View>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Shut-Off Information </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditShutOff', {
              customer: customer,
              shutoffValve: shutoffValve,
              utilities: shutOffValveList,
              noteCollection: noteCollection,
              navigation: navigation,
            })
          }>
          <FontAwesomeIcon icon={faPencilAlt} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.utilityInfoContainer}>
        <View style={styles.infoChildContainer}>
          <Image
            style={{width: 30, height: 25, marginRight: '2%'}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
          />
          <Text style={styles.labelText}> Type: </Text>
          <Text style={styles.infoText}>{shutoffValve.type}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faRuler} size={33} style={styles.icons}/>
          <Text style={styles.labelText}> Size: </Text>
          <Text style={styles.infoText}>{shutoffValve.size}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilityNotesNavigator', {
              headerIcon: 'search',
              customer: customer,
              utility: shutoffValve,
              utilityNotes: findShutOffValveNotes,
              noteType: 'FindShutOffValveNotes',
              screenTitle: 'Find Shut-Off Valve',
              utilityIcon: 'shutOff',
              utilityList: shutOffValveList,
              utilityTitle: 'Shut-Off',
              utilityInfoScreen: 'ShutOffInfo',
              noteIcon: 'search',
              noteIconTitle: 'Find' + '\n' +'Valve',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faSearch} size={33} />
          <Text style={styles.buttonText}>Find Valve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilityNotesNavigator', {
              headerIcon: 'stickyNote',
              customer: customer,
              utility: shutoffValve,
              utilityNotes: shutoffValveNotes,
              noteType: 'ShutOffValveNotes',
              screenTitle: 'Shut-Off Valve Notes',
              utilityIcon: 'shutOff',
              utilityList: shutOffValveList,
              utilityTitle: 'Shut-Off',
              utilityInfoScreen: 'ShutOffInfo',
              noteIcon: 'stickyNote',
              noteIconTitle: 'Valve' + '\n' +'Notes',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faStickyNote} size={33} />
          <Text style={styles.buttonText}>Valve Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'shutOff',
              utilityType: 'ShutOffValves',
              utilities: shutOffValveList,
              addUtilityScreen: 'AddShutOff',
              addUtilityButtonTitle: 'Add Shut-Off Valve',
              utilityInfoScreenTitle: 'ShutOffInfo',
              utilityTypeText: 'Shut-Off Valves',
              addUtilityText: 'Add Valve',
            })
          }
          style={styles.generalButtonStyle}>
          <Icons icon={'shutOff'} size={'medium'} />
          <Text style={styles.buttonText}>Valve List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={30} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Customer', {
              customer: customer,
              navigation: props.navigation,
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faUser} size={30} />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.longDivider} />
    </View>
  );
};
// End of Home Screen Display

// Start of StylingSheet
const shutOffValveInfoStyles = StyleSheet.create({
  spaceHolder: {
    marginBottom: '30%',
  },
});

export default ShutOffValveInfoScreen;
