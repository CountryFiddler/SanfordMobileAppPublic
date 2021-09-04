/**
 * File Name: DropDownSearch.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This class helps the CustomerSearchBar class in that it
 * displays the customers that match the text entered in the search bar. If
 * a customer is selected by the user, they are then redirected to the Customer
 * Screen, which will contain all the information about the customer the
 * user chose.
 *
 * Purpose: Shows users the customers that match their search and allows them
 * to choose a customer to look at.
 */
import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  // May need this later
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {getCustomers, getTimers} from '../../api/FirestoreApi';
import {Platform} from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import EditNotePopup from './EditNotePopup';
import {styles} from '../../api/stylesApi';

const NotesNavigator = props => {

  // Start of displaying the Drop Down Search
  //console.log(props.timerList.length);
  //console.log(this.state.timerList);
  var numNotesCounter = 0;
  return (
    <ScrollView>
      <TouchableOpacity
        //onPress={this.props.timerList.onPress}
        style={styles.navigatorContainer}>
        <View style={styles.navigatorSubContainer}>
          {props.notes.length ? (
            // Map customers into the dropdown search
            // searchText is the text shown for each customer button.
            // See FirestoreApi.js for more information on searchText.
            // If a customer is selected, then the user is directed
            // to the customer page for that customer.
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
            // If there are no matches for customers and what the user entered
            // then we display the message "No Customers Found"
            <View style={styles.navigatorItemView}>
              <Text style={styles.navigatorItemText}>No Notes Found</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
  // End of displaying the Drop Down Search
};
// End of the stylesheet

export default NotesNavigator;
/*
                  <Button
                    title={'Edit'}
                    onPress={() =>
                      props.navigation.navigate('EditNote', {
                        customer: props.customer,
                        note: note,
                        noteType: note.noteType,
                        navigation: props.navigation,
                        utilityType: props.utilityType,
                        utility: props.utility,
                        utilityNotes: props.notes,
                      })
                    }
                  />
 */
