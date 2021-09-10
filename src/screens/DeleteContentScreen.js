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
import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {deleteContent} from '../../api/UtilityApi';
import {styles} from '../../api/stylesApi';
import Icons from '../components/Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';

// Start of Home Screen Display
const DeleteContentScreen = props => {
  const deleteCustomer = props.navigation.getParam('deleteCustomer');
  const deleteUtility = props.navigation.getParam('deleteUtility');
  const deleteUtilityNote = props.navigation.getParam('deleteUtilityNote');
  //const customer = props.navigation.getParam('customer');
  //const utility = props.navigation.getParam('utility');
  //const utilityNote = props.navigation.getParam('utilityNote');
  //const prevScreen = props.navigation.getParam('prevScreen');
  const contentToDelete = props.navigation.getParam('contentToDelete');
  //console.log(prevScreen);
  return (
    <View>
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
        {deleteCustomer ? (
          <TouchableOpacity
            onPress={() =>
              deleteCustomer(
                props.customer,
                props.timers,
                props.shutOffs,
                props.solenoidValves,
                props.generalNotes,
                props.navigation,
              )
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTrashAlt} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : deleteUtility ? (
          <TouchableOpacity
            onPress={() =>
              deleteCustomer(
                props.customer,
                props.utility,
                props.noteSections,
                props.navigation,
              )
            }
            style={styles.generalButtonStyle}>
            <FontAwesomeIcon icon={faTrashAlt} size={40} color={'#cc0000'} />
            <Text style={styles.cancelButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : deleteUtilityNote ? (
          <TouchableOpacity
            onPress={() =>
              deleteCustomer(props.customer, props.utility, props.utilityNote)
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
// End of Home Screen Display

export default DeleteContentScreen;

/*
      <Button
        onPress={() =>
          deleteContent(
            deleteCustomer,
            deleteUtility,
            deleteUtilityNote,
            customer,
            utility,
            utilityNote,
            props.navigation,
          )
        }
        title={'Delete ' + contentToDelete}
        style={(styles.textStyle, styles.addCustomerButton)}
      />
      <Button
        onPress={() => props.navigation.navigate(prevScreen)}
        title="Cancel"
        style={(styles.textStyle, styles.addCustomerButton)}
      />
 */
