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
import AddOrEditCustomer from '../components/AddOrEditCustomer';
import EditCustomer from '../components/EditCustomer';
import { styles } from "../../api/stylesApi";

const EditCustomerScreen = props => {
  // Start of the display for Edit Customer Screen
  return (
    <View style={styles.screenBackground}>
      <EditCustomer
        // Pass the customer as a prop as well as navigation
        customer={props.customer}
        timers={props.timers}
        shutOffs={props.shutOffs}
        solenoidValvesList={props.solenoidValves}
        generalNotes={props.generalNotes}
        navigation={props.navigation}
      />
    </View>
  );
};
// End of the display for Edit Customer Screen

// Start of stylesheet

// End of stylesheet

export default EditCustomerScreen;
