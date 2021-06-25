import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import {getCustomers} from './FirestoreApi';
import DropDownSearch from '../src/components/DropDownSearch';
import _ from 'lodash';

export const contains = ({name, address}, query) => {
  if (name.includes(query) || address.includes(query)) {
    return true;
  }
  return false;
}; /*}
      {/* and at the end of view */ /*}
      {searching && (
        <DropDownSearch
          style={styles.dropDownSearchStyle}
          onPress={() => setSearching(false)}
          dataSource={filtered}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '80%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});*/
/*
export function FilterCustomers(customersList) {
  const [dataSource] = useState(customersList);
  const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', '#E8DEF3']);
  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);
  const onSearch = text => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = dataSource.filter(item => {
        if (item.match(temp)) {
          return item;
        }
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(dataSource);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search Customer"
        placeholderTextColor="white"
        onChangeText={onSearch}
      />

      {/* your components can stay here like anything */
