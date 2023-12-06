import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  deleteCustomer,
  deleteUtility,
  deleteUtilityNote,
} from '../../api/UtilityApi';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';

const DeleteContentScreen = props => {
  const isDeleteCustomer = props.navigation.getParam('deleteCustomer');
  const isDeleteUtility = props.navigation.getParam('deleteUtility');
  const isDeleteUtilityNote = props.navigation.getParam('deleteUtilityNote');
  const customer = props.navigation.getParam('customer');
  const utility = props.navigation.getParam('utility');
  const utilityNote = props.navigation.getParam('utilityNote');
  const noteCollection = props.navigation.getParam('noteCollection');
  const timerCollection = props.navigation.getParam('timerCollection');
  const shutOffCollection = props.navigation.getParam('shutOffCollection');
  const solenoidValveCollection = props.navigation.getParam(
    'solenoidValveCollection',
  );
  const generalNotes = props.navigation.getParam('generalNotes');
  const contentToDelete = props.navigation.getParam('contentToDelete');
  const timers = props.navigation.getParam('timers');
  const shutOffs = props.navigation.getParam('shutOffs');
  const solenoidValves = props.navigation.getParam('solenoidValves');

  return (
    <View style={styles.screenBackground}>
      <View style={styles.iconHeader}>
        <Icons icon={'trash'} size={'medium'} />
      </View>
      <View style={styles.deleteContentScreenTitle}>
        <Text style={styles.noteTitleText}>
          Are You Sure Want to Delete {contentToDelete}?
        </Text>
      </View>
      <View style={styles.deleteContentScreenTextContainer}>
        <Text style={styles.deleteContentScreenText}>
          Once Deleted, All Content Associated with {contentToDelete} Will Be
          Erased
        </Text>
      </View>
      <View style={styles.editNoteDivider} />
      <View style={styles.submitDataButtonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.generalButtonStyle}>
          <FontAwesomeIcon icon={faTimes} size={40} color={'black'} />
          <Text style={styles.deleteContentScreenCancelButton}>Cancel</Text>
        </TouchableOpacity>
        {isDeleteCustomer ? (
          <TouchableOpacity
            onPress={() =>
              deleteCustomer(
                customer,
                timerCollection,
                shutOffCollection,
                solenoidValveCollection,
                generalNotes,
                props.navigation,
              )
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTrashAlt} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : isDeleteUtility ? (
          <TouchableOpacity
            onPress={() =>
              deleteUtility(customer, utility, noteCollection, props.navigation)
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTrashAlt} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : isDeleteUtilityNote ? (
          <TouchableOpacity
            onPress={() =>
              deleteUtilityNote(
                customer,
                utility,
                utilityNote,
                props.navigation,
              )
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTrashAlt} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default DeleteContentScreen;


