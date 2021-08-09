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

const NotesNavigator = props => {
  // Start of displaying the Drop Down Search
  //console.log(props.timerList.length);
  //console.log(this.state.timerList);
  return (
    <ScrollView>
      <TouchableOpacity
        //onPress={this.props.timerList.onPress}
        style={styles.container}>
        <View style={styles.subContainer}>
          {props.notes.length ? (
            // Map customers into the dropdown search
            // searchText is the text shown for each customer button.
            // See FirestoreApi.js for more information on searchText.
            // If a customer is selected, then the user is directed
            // to the customer page for that customer.
            props.notes.map(note => {
              return (
                <View style={styles.itemView}>
                  <Button
                    style={styles.itemText}
                    title={note.title}
                    onPress={() =>
                      props.navigation.navigate('UtilityNote', {
                        customer: props.customer,
                        note: note,
                        navigation: props.navigation,
                      })
                    }
                  />
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
                </View>
              );
            })
          ) : (
            // If there are no matches for customers and what the user entered
            // then we display the message "No Customers Found"
            <View style={styles.itemView}>
              <Text style={styles.itemText}>No Notes Found</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
  // End of displaying the Drop Down Search
};

// Start of the stylesheet
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

  editButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSize: {
    fontSize: 20,
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
    height: 70,
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
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  menuContent: {
    color: '#000',
    fontWeight: 'bold',
    padding: 2,
    fontSize: 20,
  },
});
// End of the stylesheet

export default NotesNavigator;
