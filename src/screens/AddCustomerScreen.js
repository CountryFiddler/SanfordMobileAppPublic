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

import {addCustomer} from '../../api/FirestoreApi';
//import AddCustomer from '../components/AddCustomer';
import AddOrEditCustomer from '../components/AddCustomer';

const AddCustomerScreen = props => {
  return (
    <SafeAreaView>
      <View>
        <AddOrEditCustomer
          customerName={props.name}
          navigation={props.navigation}
          AddScreen={true}
          EditScreen={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default AddCustomerScreen;
