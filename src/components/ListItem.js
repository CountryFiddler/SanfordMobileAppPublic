import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  const content = (
    <View style={styles.content}>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.item.name}</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{uri: props.item.link}}
          resizeMode="stretch"
        />
      </View>
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
