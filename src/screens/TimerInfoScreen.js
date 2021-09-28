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
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import BackHandler from 'react-native/Libraries/Utilities/BackHandler';
import useFocusEffect from '@react-navigation/native';
import {getTimerNotes} from '../../api/TimerApi';
import {getNotes} from '../../api/UtilityApi';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPencilAlt,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote} from '@fortawesome/free-regular-svg-icons';
import Icons from '../components/Icons';
// Start of Home Screen Display
const TimerInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const timer = props.navigation.getParam('utility');
  const timerList = props.navigation.getParam('utilities');
  const navigation = props.navigation;
  const timerNotes = getNotes(customer, timer, 'TimerNotes');
  const findTimerNotes = getNotes(customer, timer, 'FindTimerNotes');
  const noteCollection = [timerNotes, findTimerNotes];
  if (timer.numPrograms === '') {
    timer.numPrograms = 'Not Provided';
  }
  if (timer.numZones === '') {
    timer.numZones = 'Not Provided';
  }
  if (timer.location === '') {
    timer.location = 'Not Provided';
  }
  if (timer.insideOutside === '') {
    timer.insideOutside = 'Not Provided';
  }
  if (timer.yearInstalled === '') {
    timer.yearInstalled = 'Not Provided';
  }
  return (
    <View>
      <View style={styles.iconHeader}>
        <Image
          style={{width: 30, height: 30}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png')}
        />
      </View>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Timer Information</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditTimer', {
              customer: customer,
              timer: timer,
              noteCollection: noteCollection,
              navigation: navigation,
            })
          }>
          <FontAwesomeIcon icon={faPencilAlt} size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.utilityInfoContainer}>
        <View style={styles.infoChildContainer}>
          <Icons icon={'timer'} width={25} height={25}/>
          <Text style={styles.labelText}> Type: </Text>
          <Text style={styles.infoText}>{timer.type}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Icons icon={'location'} size={20}/>
          <Text style={styles.labelText}> Location: </Text>
          <Text style={styles.infoText}>{timer.location}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Icons icon={'insideOutside'} size={20}/>
          <Text style={styles.labelText}> Inside/Outside: </Text>
          <Text style={styles.infoText}>{timer.insideOutside}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Programs: </Text>
          <Text style={styles.infoText}>{timer.numPrograms}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Text style={styles.labelText}>#</Text>
          <Text style={styles.labelText}> Zones: </Text>
          <Text style={styles.infoText}>{timer.numZones}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <Icons icon={'calendar'} size={20}/>
          <Text style={styles.labelText}> Year Installed: </Text>
          <Text style={styles.infoText}>{timer.yearInstalled}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilityNotesNavigator', {
              headerIcon: 'search',
              customer: customer,
              utility: timer,
              utilityNotes: findTimerNotes,
              noteType: 'FindTimerNotes',
              screenTitle: 'Find Timer',
              utilityIcon: 'timer',
              utilityList: timerList,
              utilityTitle: 'Timer',
              utilityInfoScreen: 'TimerInfo',
              noteIcon: 'search',
              noteIconTitle: 'Find' + '\n' +'Timer',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faSearch} size={30} />
          <Text style={styles.buttonText}>Find Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilityNotesNavigator', {
              headerIcon: 'stickyNote',
              utilityIcon: 'timer',
              customer: customer,
              utility: timer,
              utilityList: timerList,
              utilityNotes: timerNotes,
              noteType: 'TimerNotes',
              screenTitle: 'Timer Notes',
              utilityTitle: 'Timer',
              utilityInfoScreen: 'TimerInfo',
              noteIcon: 'stickyNote',
              noteIconTitle: 'Timer' + '\n' +'Notes',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faStickyNote} size={30} />
          <Text style={styles.buttonText}>Timer Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            // Pass navigation and customer as props to the Edit Customer Screen
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon: 'timer',
              utilityType: 'Timers',
              utilities: timerList,
              addUtilityScreen: 'AddTimer',
              addUtilityButtonTitle: 'Add Timer',
              utilityInfoScreenTitle: 'TimerInfo',
              utilityTypeText: 'Timers',
              addUtilityText: 'Add Timer',
            })
          }
          style={styles.generalButtonStyle}>
          <Icons icon={'timer'} size={'medium'} />
          <Text style={styles.buttonText}>Timer List</Text>
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
const timerInfoStyles = StyleSheet.create({
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
  spaceHolder: {
    // marginBottom: '20%',
  },
});

export default TimerInfoScreen;
