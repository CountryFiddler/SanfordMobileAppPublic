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
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {deleteContent} from '../../api/TimerApi';

// Start of Home Screen Display
const DeleteContentScreen = props => {
  const deleteCustomer = props.navigation.getParam('deleteCustomer');
  const deleteUtility = props.navigation.getParam('deleteUtility');
  const deleteUtilityNote = props.navigation.getParam('deleteUtilityNote');
  const customer = props.navigation.getParam('customer');
  const utility = props.navigation.getParam('utility');
  const utilityNote = props.navigation.getParam('utilityNote');
  const prevScreen = props.navigation.getParam('prevScreen');
  const contentToDelete = props.navigation.getParam('contentToDelete');
  console.log(prevScreen);
  return (
    <View style={styles.homePageContainer}>
      <Text>Are You Sure Want to Delete {contentToDelete}?</Text>
      <Text>
        Once Deleted, All Content Associated with {contentToDelete} Will Be
        Erased
      </Text>
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
    </View>
  );
};
// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
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
});

export default DeleteContentScreen;
