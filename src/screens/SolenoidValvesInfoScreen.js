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
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {getNotes} from '../../api/UtilityApi';
import {getSolenoidValvesNotes} from '../../api/SolenoidValveApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPencilAlt,
  faSearch,
  faUser,
  faMapMarkerAlt,
  faRuler,
} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote, faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
// Start of Home Screen Display
const SolenoidValvesInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const solenoidValves = props.navigation.getParam('utility');
  const solenoidValvesList = props.navigation.getParam('utilities');
  const navigation = props.navigation;
  const solenoidValveNotes = getNotes(
    customer,
    solenoidValves,
    'SolenoidValveNotes',
  );
  const findSolenoidValveNotes = getNotes(
    customer,
    solenoidValves,
    'FindSolenoidValvesNotes',
  );
  const noteCollection = [solenoidValveNotes, findSolenoidValveNotes];
  if (solenoidValves.numValves === '') {
    solenoidValves.numValves = 'No Text Provided';
  }
  if (solenoidValves.zoneNumbers === '') {
    solenoidValves.zoneNumbers = 'No Text Provided';
  }
  if (solenoidValves.size === '') {
    solenoidValves.size = 'No Text Provided';
  }
  if (solenoidValves.yearInstalled === '') {
    solenoidValves.yearInstalled = 'No Text Provided';
  }
  console.log(solenoidValves);
  return (
    <View style={styles.screenBackground}>
      <View style={styles.iconHeader}>
        <Image
          style={{width: 36, height: 40}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
        />
      </View>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Solenoid Valve Info</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditSolenoidValves', {
              customer: customer,
              solenoidValves: solenoidValves,
              solenoidValvesList: solenoidValvesList,
              noteCollection: noteCollection,
              navigation: navigation,
            })
          }>
          <FontAwesomeIcon icon={faPencilAlt} size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView style={solenoidValveInfoStyles.solenoidValveInfoContainer}>
        <View style={styles.infoChildContainer}>
          <Icons icon={'location'} size={20} />
          <Text style={styles.labelText}> Location: </Text>
          <Text style={styles.infoText}>{solenoidValves.location}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Image
            style={{width: 26, height: 30}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
          />
          <Text style={styles.labelText}> Type: </Text>
          <Text style={styles.infoText}>{solenoidValves.type}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faRuler} size={20} />
          <Text style={styles.labelText}> Size: </Text>
          <Text style={styles.infoText}>{solenoidValves.size}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Valves: </Text>
          <Text style={styles.infoText}>{solenoidValves.numValves}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Zones Controlled: </Text>
          <Text style={styles.infoText}>{solenoidValves.zoneNumbers}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Icons icon={'calendar'} size={20} />
          <Text style={styles.labelText}> Year Installed: </Text>
          <Text style={styles.infoText}>{solenoidValves.yearInstalled}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilityNotesNavigator', {
              headerIcon: 'search',
              customer: customer,
              utility: solenoidValves,
              utilityNotes: findSolenoidValveNotes,
              noteType: 'FindSolenoidValvesNotes',
              screenTitle: 'Find Valves',
              utilityIcon: 'solenoidValve',
              utilityList: solenoidValvesList,
              utilityTitle: 'Valves',
              utilityInfoScreen: 'SolenoidValvesInfo',
              noteIcon: 'search',
              noteIconTitle: 'Find' + '\n' + 'Valve',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faSearch} size={33} />
          <Text style={styles.buttonText}>Find Valves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilityNotesNavigator', {
              headerIcon: 'stickyNote',
              customer: customer,
              utility: solenoidValves,
              utilityNotes: solenoidValveNotes,
              noteType: 'SolenoidValveNotes',
              screenTitle: 'Valve Notes',
              utilityIcon: 'solenoidValve',
              utilityList: solenoidValvesList,
              utilityTitle: 'Valves',
              utilityInfoScreen: 'SolenoidValvesInfo',
              noteIcon: 'stickyNote',
              noteIconTitle: 'Valve' + '\n' + 'Notes',
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
              headerIcon: 'solenoidValve',
              utilityType: 'SolenoidValves',
              utilities: solenoidValvesList,
              addUtilityScreen: 'AddSolenoidValves',
              addUtilityButtonTitle: 'Add Valve',
              utilityInfoScreenTitle: 'SolenoidValvesInfo',
              utilityTypeText: 'Solenoid Valves',
              addUtilityText: 'Add Valves',
            })
          }
          style={styles.generalButtonStyle}>
          <Icons icon={'solenoidValve'} width={28} height={32} />
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
      <View style={styles.spaceHolder}/>
    </View>
  );
};
// End of Home Screen Display

// Start of StylingSheet
const solenoidValveInfoStyles = StyleSheet.create({
  solenoidValveInfoContainer: {
    //    paddingTop: 120,
    //paddingBottom: 120,
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderTopWidth: 3,
    borderTopColor: '#26660b',


    marginLeft: '1.5%',
    marginRight: '1.5%',
  },
  solenoidValveInfoButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    //width: '90%',
    height: '17%',
  },
  spaceHolder: {
    marginBottom: '10%',
    //height: 250,
  },
});

export default SolenoidValvesInfoScreen;
