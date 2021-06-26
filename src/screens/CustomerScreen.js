import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/SearchBar';

const CustomerScreen = ({ navigation }) => {
  // const {navigation} = this.props;
  // const customer = navigation.getParam(customer);
  const customerName = navigation.getParam('customerName');
  return (

      <Text>{customerName}</Text>
  );
};

export default CustomerScreen;
