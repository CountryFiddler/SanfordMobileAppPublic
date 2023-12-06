import {
  View,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import AddCustomer from '../components/AddCustomer';
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
