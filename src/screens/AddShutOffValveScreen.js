import React, {useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {submitShutOffInfo} from '../../api/ShutOffValveApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';

const AddShutOffValveScreen = props => {
  const customer = props.navigation.getParam('customer');
  const shutOffs = props.navigation.getParam('utilities');
  const [shutoffType, setShutOffType] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');
  const [backFlow, setBackFlow] = useState('');
  const [yearInstalled, setYearInstalled] = useState('');
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
    <SafeAreaView style={styles.screenBackground}>
      <View style={styles.addInfoScreenHeader}>
        <Icons icon={'shutOff'} width={40} height={35} />
        <Text style={styles.addInfoScreenTitle}>Add Shut-Off</Text>
      </View>
      <View style={{ height: '70%' }}>
        <View style={styles.longDividerWithSpacing} />
        <ScrollView>
          <View style={styles.infoChildContainer}>
            <Icons icon={'shutOff'} width={30} height={25} />
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
            <Icons icon={'utilitySize'} size={20} />
            <Text style={styles.labelText}> Size: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Shut-Off Valve Size'}
              value={size}
              onChangeText={text => setSize(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'location'} size={20} />
            <Text style={styles.labelText}> Location: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Location'}
              value={location}
              onChangeText={text => setLocation(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'backFlow'} size={20} />
            <Text style={styles.labelText}> Backflow: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Yes/No'}
              value={backFlow}
              onChangeText={text => setBackFlow(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'calendar'} size={20} />
            <Text style={styles.labelText}> Year Installed: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Year Installed'}
              value={yearInstalled}
              onChangeText={text => setYearInstalled(text)}
            />
          </View>
        </ScrollView>
        <View style={styles.longDividerWithSpacing}/>
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
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
                  location,
                  backFlow,
                  yearInstalled,
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

export default AddShutOffValveScreen;
