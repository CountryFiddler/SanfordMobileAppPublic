import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/SearchBar';

const CustomerScreen = props => {
  // const {navigation} = this.props;
  // const customer = navigation.getParam(customer);
 // const customerFirstName = props.navigation.getParam('customerFirstName');
  //const customerLastName = props.navigation.getParam('customerLastName');
  //const customerAddress = props.navigation.getParam('customerAddress');
  const customer = props.navigation.getParam('customer');
  return (
    <View>
      <Text>{customer.firstName}</Text>
      <Text>{customer.lastName}</Text>
      <Text>{customer.address}</Text>
      <Button
        onPress={() =>
          props.navigation.navigate('EditCustomer', {
            customer: customer,
          })
        }
        title="Edit Customer"
      />
    </View>
  );
};

export default CustomerScreen;
