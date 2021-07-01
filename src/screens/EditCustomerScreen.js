/**
 * File Name: EditCustomerScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen is the page in which users can edit a customers
 * information (name and address). This screen has an instance of the class
 * AddOrEditCustomer. The class must set the prop of EditScreen to true and
 * AddScreen to false so that AddOrEditCustomer, edits the customers info and
 * does not add a new customer
 *
 * Purpose: Allows users to edit the customers information (name and address)
 */
// Import Statements
import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import AddOrEditCustomer from '../components/AddCustomer';

const EditCustomerScreen = props => {
  // Start of the display for Edit Customer Screen
  return (
    <View style={styles.homePageContainer}>
      <AddOrEditCustomer
        // Pass the customer as a prop as well as navigation
        customer={props.customer}
        navigation={props.navigation}
        /** VERY IMPORTANT!!! Make sure AddScreen is false and EditScreen is true **/
        AddScreen={false}
        EditScreen={true}
      />
    </View>
  );
};
// End of the display for Edit Customer Screen

// Start of stylesheet
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
// End of stylesheet

export default EditCustomerScreen;
