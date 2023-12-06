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
import {submitShutOffChanges} from '../../api/ShutOffValveApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';

const EditShutOffValveInfoScreen = props => {
  const customer = props.navigation.getParam('customer');
  const shutOffs = props.navigation.getParam('utilities');
  const shutoffValve = props.navigation.getParam('shutoffValve');
  const noteCollection = props.navigation.getParam('noteCollection');
  const navigation = props.navigation;
  const [currentShutOffType, setShutOffType] = useState(shutoffValve.type);
  const [currentShutOffSize, setShutOffSize] = useState(shutoffValve.size);
  const [currentLocation, setCurrentLocation] = useState(shutoffValve.location);
  const [currentBackFlow, setCurrentBackFlow] = useState(shutoffValve.backFlow);
  const [currentYearInstalled, setCurrentYearInstalled] = useState(
    shutoffValve.yearInstalled,
  );
  return (
    <SafeAreaView style={styles.screenBackground}>
      <View style={styles.addInfoScreenHeader}>
        <Image
          style={{width: 40, height: 35}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
        />
        <Text style={styles.addInfoScreenTitle}>Edit Shut-Off</Text>
      </View>
      <View>
        <View style={styles.longDividerWithSpacing} />
        <ScrollView style={{height: '43%'}}>
          <View style={styles.infoChildContainer}>
            <Text style={styles.labelText}> Type: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={shutoffValve.type}
              value={currentShutOffType}
              onChangeText={text => setShutOffType(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Text style={styles.labelText}> Size: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={shutoffValve.size}
              value={currentShutOffSize}
              onChangeText={text => setShutOffSize(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'location'} size={20} />
            <Text style={styles.labelText}> Location: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Location'}
              value={currentLocation}
              onChangeText={text => setCurrentLocation(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'backFlow'} size={20} />
            <Text style={styles.labelText}> Backflow: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Yes/No'}
              value={currentBackFlow}
              onChangeText={text => setCurrentBackFlow(text)}
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'calendar'} size={20} />
            <Text style={styles.labelText}> Year Installed: </Text>
            <TextInput
              style={styles.infoText}
              placeholder={'Year Installed'}
              value={currentYearInstalled}
              onChangeText={text => setCurrentYearInstalled(text)}
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
                utility: shutoffValve,
                noteCollection: noteCollection,
                contentToDelete: 'This Shut-Off',
                navigation: props.navigation,
              })
            }
            style={styles.generalButtonStyle}>
            <Icons icon={'trash'} size={40} color={'#cc0000'} />
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.goBack()
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
            <Text style={styles.blackCancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              submitShutOffChanges(
                customer,
                shutoffValve,
                currentShutOffType,
                currentShutOffSize,
                currentLocation,
                currentBackFlow,
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

export default EditShutOffValveInfoScreen;
