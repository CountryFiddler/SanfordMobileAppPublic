import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/SearchBar';

const CustomerScreen = props => {
  // const {navigation} = this.props;
  // const customer = navigation.getParam(customer);
  const customerFirstName = props.navigation.getParam('customerFirstName');
  const customerLastName = props.navigation.getParam('customerLastName');
  const customerAddress = props.navigation.getParam('customerAddress');
  return (
    <View>
      <Text>{customerFirstName}</Text>
      <Text>{customerLastName}</Text>
      <Text>{customerAddress}</Text>
      <Button
        onPress={() =>
          props.navigation.navigate('EditCustomer', {
            customerFirstName: customerFirstName,
            customerLastName: customerLastName,
            customerAddress: customerAddress,
          })
        }
        title="Edit Customer"
      />
    </View>
  );
};

export default CustomerScreen;
