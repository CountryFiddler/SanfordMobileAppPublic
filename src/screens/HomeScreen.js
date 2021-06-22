import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = props => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>Sanford Irrigation</Text>
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
