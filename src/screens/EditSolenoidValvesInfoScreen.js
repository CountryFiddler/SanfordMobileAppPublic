import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {submitSolenoidValvesChanges} from '../../api/SolenoidValveApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faMapMarkerAlt,
  faRuler,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';

const EditSolenoidValvesInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const solenoidValves = props.navigation.getParam('solenoidValves');
  const noteCollection = props.navigation.getParam('noteCollection');
  const solenoidValvesList = props.navigation.getParam('solenoidValvesList');
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
    <SafeAreaView style={styles.screenBackground}>
      <View style={styles.addSolenoidValveDataScreenHeader}>
        <View style={styles.iconHeader}>
          <Image
            style={{width: 36, height: 40}}
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
          />
        </View>
        <Text style={styles.addInfoScreenTitle}>Edit Solenoid Valve</Text>
      </View>
      <View style={{height: '70%'}}>
        <View style={styles.longDividerWithSpacing} />
        <ScrollView>
          <View style={styles.infoChildContainer}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={20} />
            <Text style={styles.labelText}> Location: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={solenoidValves.location}
              value={currentLocation}
              onChangeText={text => setLocation(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Image
              style={{width: 26, height: 30}}
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
            />
            <Text style={styles.labelText}> Type: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={solenoidValves.type}
              value={currentSolenoidValvesType}
              onChangeText={text => setShutOffType(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <FontAwesomeIcon icon={faRuler} size={20} />
            <Text style={styles.labelText}> Size: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={solenoidValves.size}
              value={currentSolenoidValvesSize}
              onChangeText={text => setShutOffSize(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Text style={styles.labelText}>#</Text>
            <Text style={styles.labelText}> Valves: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={solenoidValves.numValves}
              value={currentNumValves}
              onChangeText={text => setNumValves(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Text style={styles.labelText}>#</Text>
            <Text style={styles.labelText}> Zones Controlled: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={solenoidValves.zoneNumbers}
              value={currentZoneNumbers}
              onChangeText={text => setZoneNumbers(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <FontAwesomeIcon icon={faCalendarAlt} size={20} />
            <Text style={styles.labelText}> Year Installed: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={solenoidValves.yearInstalled}
              value={currentYearInstalled}
              onChangeText={text => setYearInstalled(text)}
            />
          </View>
        </ScrollView>
        <View style={styles.longDividerWithSpacing} />
        <View style={styles.submitDataButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DeleteContent', {
                deleteUtility: true,
                customer: customer,
                utility: solenoidValves,
                noteCollection: noteCollection,
                contentToDelete: 'This Valve(s)',
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <Icons icon={'trash'} size={40} color={'#cc0000'} />
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
            <Text style={styles.blackCancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
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
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faCheck} size={40} color={'#26660b'} />
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditSolenoidValvesInfoScreen;
