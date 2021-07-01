import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/SearchBar';
import AddOrEditCustomer from '../components/AddCustomer';

const EditCustomerScreen = props => {
  return (
    <View style={styles.homePageContainer}>
      <AddOrEditCustomer
        customer={props.customer}
        navigation={props.navigation}
        AddScreen={false}
        EditScreen={true}
      />
    </View>
  );
};

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

export default EditCustomerScreen;
//<SearchBar term={searchTerm} onTermChange={newTerm => setTerm(newTerm)} />
