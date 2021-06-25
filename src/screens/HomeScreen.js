import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/SearchBar';

const HomeScreen = props => {
  const [searchTerm, setTerm] = useState('');
  return (
    <View>
      <CustomerSearchBar />
      <Button
        onPress={() => props.navigation.navigate('AddCustomer')}
        title="Add Customer"
        style={styles.textStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },

  addCustomerButton: {
    marginVertical: 8,
  },
});

export default HomeScreen;
//<SearchBar term={searchTerm} onTermChange={newTerm => setTerm(newTerm)} />
