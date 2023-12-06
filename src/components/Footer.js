import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {getTimerNotes} from '../../api/TimerApi';
import {getNotes} from '../../api/UtilityApi';
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Icons from '../components/Icons';

const Footer = props => {
  const customer = props.navigation.getParam('customer');
  const timer = props.navigation.getParam('utility');
  const timerList = props.navigation.getParam('utilities');
  const navigation = props.navigation;
  const timerNotes = getTimerNotes(customer, timer);
  const findTimerNotes = getNotes(customer, timer, 'FindTimerNotes');

  var TimerButton = false;
  var ShutOffButton = false;
  var SolenoidValveButton = false;
  var HomeButton = false;
  var CustomerButton = false;
  return (
    <View>
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
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={styles.generalButtonStyle}>
        <FontAwesomeIcon icon={faHome} size={30} />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
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
    </View>
  );
};

export default Footer;
