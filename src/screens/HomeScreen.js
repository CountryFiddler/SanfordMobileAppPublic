import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/SearchBar';

const HomeScreen = props => {
  const [searchTerm, setTerm] = useState('');
  return (
    <View style={styles.homePageContainer}>
      <CustomerSearchBar />
      <Button
        onPress={() => props.navigation.navigate('AddCustomer')}
        title="Add Customer"
        style={(styles.textStyle, styles.addCustomerButton)}
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

export default HomeScreen;
//<SearchBar term={searchTerm} onTermChange={newTerm => setTerm(newTerm)} />
