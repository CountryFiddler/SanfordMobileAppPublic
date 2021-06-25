import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  render,
} from 'react-native';

export default function DropDownSearch(props) {
  const {dataSource} = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.subContainer}>
        {dataSource.length ? (
          dataSource.map(item => {
            return (
              <View style={styles.itemView}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            );
          })
        ) : (
          <View style={styles.itemView}>
            <Text style={styles.itemText}>No search items matched</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    //marginTop: '15%',
    //marginHorizontal: 20,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'flex-start',
  },

  subContainer: {
    //backgroundColor: '#84DCC6',
    paddingTop: 5,
    marginHorizontal: 30,
    width: '95%',
    //marginVertical: 60,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    //flexWrap: 'wrap',

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  itemView: {
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    //marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4,
    //flex: 1,
  },
  itemText: {
    color: 'black',
    paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: 'center',
    // margin: 20,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  noResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
