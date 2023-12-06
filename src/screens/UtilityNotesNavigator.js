import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import NotesNavigator from '../components/NotesNavigator';
import Icons from '../components/Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../api/stylesApi';

const UtilityNotesNavigatorScreen = props => {
  const headerIcon = props.navigation.getParam('headerIcon');
  const utilityIcon = props.navigation.getParam('utilityIcon');
  const utilityNotes = props.navigation.getParam('utilityNotes');
  const utility = props.navigation.getParam('utility');
  const utilityList = props.navigation.getParam('utilityList');
  const customer = props.navigation.getParam('customer');
  const noteType = props.navigation.getParam('noteType');
  const screenTitle = props.navigation.getParam('screenTitle');
  const utilityTitle = props.navigation.getParam('utilityTitle');
  const utilityInfoScreen = props.navigation.getParam('utilityInfoScreen');
  const noteIcon = props.navigation.getParam('noteIcon');
  const noteIconTitle = props.navigation.getParam('noteIconTitle');
  console.log(utilityNotes);
  return (
    <View style={styles.screenBackground}>
      <View style={styles.navigatorScreenHeader}>
        <Icons icon={headerIcon} size={'medium'} />
        <Text style={styles.navigatorScreenTitle}>{screenTitle}</Text>
      </View>
      <View style={styles.utilityNavigatorContainer}>
        <NotesNavigator
          notes={utilityNotes}
          customer={customer}
          navigation={props.navigation}
          utilityType={utility.utilityType}
          utility={utility}
          utilityList={utilityList}
          utilityInfoScreen={utilityInfoScreen}
          utilityIcon={utilityIcon}
          utilityTitle={utilityTitle}
          headerIcon={headerIcon}
          noteType={noteType}
          screenTitle={screenTitle}
          noteIcon={noteIcon}
          noteIconTitle={noteIconTitle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('AddNote', {
              customer: customer,
              utilityType: utility.utilityType,
              utility: utility,
              noteType: noteType,
              utilityNotes: utilityNotes,
              utilityList: utilityList,
              utilityInfoScreen: utilityInfoScreen,
              utilityIcon: utilityIcon,
              utilityTitle: utilityTitle,
            })
          }
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faPlus} size={33} />
          <Text>Add Note</Text>
        </TouchableOpacity>
        {utilityTitle !== null ? (
          <TouchableOpacity
            style={styles.generalButtonStyle}
            onPress={() =>
              props.navigation.navigate(utilityInfoScreen, {
                customer: customer,
                utility: utility,
                utilities: utilityList,
                navigation: props.navigation,
              })
            }>
            <Icons icon={utilityIcon} size={'medium'} />
            <Text style={styles.buttonText}>{utilityTitle}</Text>
          </TouchableOpacity>
        ) : null}
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
export default UtilityNotesNavigatorScreen;
