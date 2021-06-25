import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  const content = (
    <View style={styles.textView}>
      <Text style={styles.text}>{props.item.name}</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  content: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  textView: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  image: {
    height: 100,
    width: 125,
    borderWidth: 2,
    borderRadius: 30,
  },
});

export default ListItem;
