/**
 * File Name: AddCustomerScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen is the page in which users can add a customer to
 * firestore. This screen has an instance of the class
 * AddOrEditCustomer. The class must set the prop of EditScreen to false and
 * AddScreen to True so that AddOrEditCustomer, adds the customers and
 * does not edit a customer
 *
 * Purpose: Allows users to add customers to firestore
 */
// Import Statements
import {
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput,
  render,
} from 'react-native';
import React, {Component} from 'react';
import AddOrEditCustomer from '../components/AddOrEditCustomer';
import AddCustomer from "../components/AddCustomer";
import { styles } from "../../api/stylesApi";

const AddCustomerScreen = props => {
  // Start of the display for Add Customer Screen
  return (
    <SafeAreaView style={styles.screenBackground}>
      <View >
        <AddCustomer navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
  // End of the display for Edit Customer Screen
};
export default AddCustomerScreen;
