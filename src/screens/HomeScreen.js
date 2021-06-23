import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SearchBar from '../components/SearchBar';

const HomeScreen = props => {
  const [searchTerm, setTerm] = useState('');
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>Sanford Irrigation</Text>
      <SearchBar term={searchTerm} onTermChange={newTerm => setTerm(newTerm)} />
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
});

export default HomeScreen;
