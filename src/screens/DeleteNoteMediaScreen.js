import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import NoteMedia from '../components/NoteMedia';
import Icons from '../components/Icons';
import {styles} from '../../api/stylesApi';

const DeleteNoteMediaScreen = props => {
  const customer = props.navigation.getParam('customer');
  const employeeName = props.navigation.getParam('employeeName');
  const utilityType = props.navigation.getParam('utilityType');
  const utility = props.navigation.getParam('utility');
  const note = props.navigation.getParam('note');

  return (
    <SafeAreaView style={styles.screenBackground}>
      <View style={styles.iconHeader}>
        <Icons icon={'stickyNote'} size={'medium'} />
      </View>
      <View>
        <Text style={styles.addInfoScreenTitle}>Delete Photos</Text>
      </View>
      <View style={styles.dividerWithSpacing} />
      <View>
        <NoteMedia
          customer={customer}
          employeeName={employeeName}
          utilityType={utilityType}
          utility={utility}
          note={note}
          isDeleteMedia={true}
          navigation={props.navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeleteNoteMediaScreen;
