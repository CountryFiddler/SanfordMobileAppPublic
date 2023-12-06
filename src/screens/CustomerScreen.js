import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {getTimers} from '../../api/TimerApi';
import {getShutOffs} from '../../api/ShutOffValveApi';
import {getSolenoidValves} from '../../api/SolenoidValveApi';
import {getNotes} from '../../api/UtilityApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faAddressBook,
  faPhoneAlt,
  faPencilAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import {faStickyNote, fa} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../../api/stylesApi';

const CustomerScreen = props => {
  const customer = props.navigation.getParam('customer');
  const timers = getTimers(customer);
  const shutoffValves = getShutOffs(customer);
  const solenoidValves = getSolenoidValves(customer);
  const generalNotes = getNotes(customer, '', 'GeneralNotes');
  var parsedPhoneNumStr;
  var parsedPhoneNumInt;
  parsedPhoneNumStr = '+' + customer.phoneNumber[0] + ' (';
  for (var i = 1; i < 4; i++) {
    parsedPhoneNumStr = parsedPhoneNumStr + customer.phoneNumber[i];
  }
  parsedPhoneNumStr = parsedPhoneNumStr + ')-';
  for (var i = 4; i < 7; i++) {
    parsedPhoneNumStr = parsedPhoneNumStr + customer.phoneNumber[i];
  }
  parsedPhoneNumStr = parsedPhoneNumStr + '-';
  for (var i = 7; i < 11; i++) {
    parsedPhoneNumStr = parsedPhoneNumStr + customer.phoneNumber[i];
  }
  parsedPhoneNumInt = parseInt(customer.phoneNumber);
  if (customer.phoneNumber === '') {
    parsedPhoneNumStr = 'No Phone Number Provided';
  }
  console.log(parsedPhoneNumStr);
  console.log(parsedPhoneNumInt);
  return (
    <ScrollView style={styles.screenBackground} persistentScrollbar={false}>
      <View style={styles.iconHeader}>
        <FontAwesomeIcon icon={faUser} size={25} />
      </View>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Customer Information</Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('EditCustomer', {
              customer: customer,
              timers: timers,
              shutOffs: shutoffValves,
              solenoidValves: solenoidValves,
              generalNotes: generalNotes,
            })
          }>
          <FontAwesomeIcon icon={faPencilAlt} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.customerInfoContainer}>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faUser} size={17} style={styles.icons} />
          <Text style={styles.labelText}> Name: </Text>
          <Text style={styles.infoText}>
            {customer.firstName} {customer.lastName}
          </Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon
            icon={faAddressBook}
            size={17}
            style={styles.icons}
          />
          <Text style={styles.labelText}> Address: </Text>
          <Text style={styles.infoText}>{customer.address}</Text>
        </View>
        <View style={styles.infoChildContainer}>
          <FontAwesomeIcon icon={faPhoneAlt} style={styles.icons} size={17} />
          <Text style={styles.labelText}> Phone: </Text>
          <Text style={styles.infoText}>{parsedPhoneNumStr}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'timer',
              utilityType: 'Timers',
              utilities: timers,
              addUtilityScreen: 'AddTimer',
              addUtilityButtonTitle: 'Add Timer',
              utilityInfoScreenTitle: 'TimerInfo',
              utilityTypeText: 'Timers',
              addUtilityText: 'Add Timer',
            })
          }
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../icons/iu-1.png')}
          />
          <Text style={styles.buttonText}>Timers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'shutOff',
              utilityType: 'ShutOffValves',
              utilities: shutoffValves,
              addUtilityScreen: 'AddShutOff',
              addUtilityButtonTitle: 'Add Shut-Off Valve',
              utilityInfoScreenTitle: 'ShutOffInfo',
              utilityTypeText: 'Shut-Off Valves',
              addUtilityText: 'Add Valve',
            })
          }
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 50, height: 42}}
            source={require('../icons/Shut-OffValve.png')}
          />
          <Text style={styles.buttonText}>Shut-Off</Text>
          <Text>Valves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilitySelectionScreen', {
              customer: customer,
              headerIcon:
                'solenoidValve',
              utilityType: 'SolenoidValves',
              utilities: solenoidValves,
              addUtilityScreen: 'AddSolenoidValves',
              addUtilityButtonTitle: 'Add Valve',
              utilityInfoScreenTitle: 'SolenoidValvesInfo',
              utilityTypeText: 'Solenoid Valves',
              addUtilityText: 'Add Valves',
            })
          }
          style={styles.generalButtonStyle}>
          <Image
            style={{width: 27, height: 31}}
            source={require('../icons/SolenoidValve.png')}
          />
          <Text style={styles.buttonText}>Solenoid</Text>
          <Text>Valves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UtilityNotesNavigator', {
              customer: customer,
              utility: '',
              utilityNotes: generalNotes,
              noteType: 'GeneralNotes',
              screenTitle: 'General Notes',
              utilityTitle: null,
              noteIcon: 'stickyNote',
              noteIconTitle: 'General' + '\n' +'Notes',
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faStickyNote} size={30} />
          <Text style={styles.buttonText}>General</Text>
          <Text>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}/>
      <View style={styles.customerFooter}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faHome} size={30} />
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.longDivider}/>
    </ScrollView>
  );
};

export default CustomerScreen;
