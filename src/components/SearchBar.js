import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const SearchBar = ({searchTerm, onTermChange}) => {
  return (
    <View style={styles.background}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={'Search'}
        value={searchTerm}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
