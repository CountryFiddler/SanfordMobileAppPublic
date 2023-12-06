import React, {useState} from 'react';
import {
  View,
} from 'react-native';
import AddNote from '../components/AddNote';
import { styles } from "../../api/stylesApi";

const AddNoteScreen = props => {
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const noteType = props.navigation.getParam('noteType');
  const utilityNotes = props.navigation.getParam('utilityNote');

  return (
    <View style={styles.screenBackground}>
      <AddNote
        customer={customer}
        utilityType={utilityType}
        utility={utility}
        numImages={0}
        navigation={props.navigation}
        noteID={null}
        noteType={noteType}
        noteTitle={''}
        noteText={''}
      />
    </View>
  );
};

export default AddNoteScreen;
