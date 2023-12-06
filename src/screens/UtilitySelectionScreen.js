import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {faUser, faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import UtilitySelection from '../components/UtilitySelection';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const UtilitySelectionScreen = props => {
  const customer = props.navigation.getParam('customer');
  const headerIcon = props.navigation.getParam('headerIcon');
  const utilityType = props.navigation.getParam('utilityType');
  const utilityTypeText = props.navigation.getParam('utilityTypeText');
  const addUtilityText = props.navigation.getParam('addUtilityText');
  const utilities = props.navigation.getParam('utilities');
  const addUtility = props.navigation.getParam('addUtilityScreen');
  const addUtilityButtonTitle = props.navigation.getParam(
    'addUtilityButtonTitle',
  );
  const utilityInfoScreenTitle = props.navigation.getParam(
    'utilityInfoScreenTitle',
  );

  return (
    <View style={styles.screenBackground}>
      <View style={styles.navigatorScreenHeader}>
        <Icons icon={headerIcon} size={'medium'} />
        <Text style={styles.navigatorScreenTitle}>
          {utilityTypeText + ' List'}
        </Text>
      </View>
      <View style={styles.utilityNavigatorContainer}>
        <UtilitySelection
          customer={customer}
          utilityList={utilities}
          utilityInfoScreen={utilityInfoScreenTitle}
          navigation={props.navigation}
          utilityType={utilityType}
          utilityTypeText={utilityTypeText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(addUtility, {
              customer: customer,
              utilities: utilities,
              navigation: props.navigation,
            })
          }
          title={addUtilityButtonTitle}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faPlus} size={33} />
          <Text style={styles.buttonText}>{addUtilityText}</Text>
        </TouchableOpacity>
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
      <View style={styles.longDivider} />
    </View>
  );
};

export default UtilitySelectionScreen;
