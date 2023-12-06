import React, {useState} from 'react';
import {
  View,
} from 'react-native';
import EditNote from '../components/EditNote';
import {styles} from '../../api/stylesApi';

const EditNoteScreen = props => {
  const note = props.navigation.getParam('note');
  const customer = props.navigation.getParam('customer');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const utilityNotes = props.navigation.getParam('utilityNotes');
  return (
    <View style={styles.screenBackground}>
      <EditNote
        customer={customer}
        note={note}
        utilityType={utilityType}
        utility={utility}
        isAddNote={false}
        numImages={note.numImages}
        numVideos={note.numVideos}
        navigation={props.navigation}
        noteID={note.noteID}
        noteType={note.noteType}
        utilityNotes={utilityNotes}
        noteTitle={note.title}
        noteText={note.noteText}
      />
    </View>
  );
};

export default EditNoteScreen;
