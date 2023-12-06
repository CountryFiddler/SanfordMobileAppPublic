import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {styles} from '../../api/stylesApi';

const NotesNavigator = props => {

  var numNotesCounter = 0;
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.navigatorContainer}>
        <View style={styles.navigatorSubContainer}>
          {props.notes.length ? (
            props.notes.map(note => {
              numNotesCounter++;
              return (
                <View key={note.noteID}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('UtilityNote', {
                        customer: props.customer,
                        note: note,
                        noteList: props.notes,
                        navigation: props.navigation,
                        utility: props.utility,
                        utilityList: props.utilityList,
                        utilityInfoScreen: props.utilityInfoScreen,
                        utilityIcon: props.utilityIcon,
                        utilityTitle: props.utilityTitle,
                        headerIcon: props.headerIcon,
                        noteType: note.noteType,
                        screenTitle: props.screenTitle,
                        noteIcon: props.noteIcon,
                        noteIconTitle: props.noteIconTitle,

                      })
                    }
                    style={styles.navigatorItemView}>
                    <Text style={styles.navigatorItemText}>
                      {' #' + numNotesCounter + '. '}
                    </Text>
                    <Text style={styles.navigatorItemText}>{note.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <View style={styles.navigatorItemView}>
              <Text style={styles.navigatorItemText}>No Notes Found</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NotesNavigator;

