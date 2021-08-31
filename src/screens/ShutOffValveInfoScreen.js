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
// Start of Home Screen Display
const ShutOffValveInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const shutoffValve = props.navigation.getParam('utility');
  const navigation = props.navigation;
  const shutoffValveNotes = getShutOffValveNotes(customer, shutoffValve);
  const findShutOffValveNotes = getNotes(
    customer,
    shutoffValve,
    'FindShutOffValveNotes',
  );
  if (shutoffValve.size === '') {
    shutoffValve.size = 'No Text Provided';
  }
  return (
    <ScrollView>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Shut-Off Information </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditShutOff', {
              customer: customer,
              shutoffValve: shutoffValve,
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
              customer: customer,
              utility: shutoffValve,
              utilityNotes: findShutOffValveNotes,
              noteType: 'FindShutOffValveNotes',
              screenTitle: 'Find Shut-Off Valve',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faSearch} size={33} />
          <Text style={styles.buttonText}>Find Shut-Off</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilityNotesNavigator', {
              customer: customer,
              utility: shutoffValve,
              utilityNotes: shutoffValveNotes,
              noteType: 'ShutOffValveNotes',
              screenTitle: 'Shut-Off Valve Notes',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faStickyNote} size={33} />
          <Text style={styles.buttonText}>Shut-Off Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={33} />
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
          <FontAwesomeIcon icon={faUser} size={33} />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={shutOffValveInfoStyles.spaceHolder} />
    </ScrollView>
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
