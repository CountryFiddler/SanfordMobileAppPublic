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
} from 'react-native';
import {getCustomers, getTimers} from '../../api/FirestoreApi';
import {styles} from '../../api/stylesApi';
import {counter} from '@fortawesome/fontawesome-svg-core';

const UtilitySelection = props => {
  var numUtilitiesCounter = 0;
  // Start of displaying the Drop Down Search
  //console.log(props.timerList.length);
  //console.log(this.state.timerList);
  return (
    <ScrollView>
      <TouchableOpacity
        //onPress={this.props.timerList.onPress}
        style={styles.navigatorContainer}>
        <View style={styles.navigatorSubContainer}>
          {props.utilityList.length ? (
            // Map customers into the dropdown search
            // searchText is the text shown for each customer button.
            // See FirestoreApi.js for more information on searchText.
            // If a customer is selected, then the user is directed
            // to the customer page for that customer.
            props.utilityList.map(utility => {
              numUtilitiesCounter++;
              var utilityTitle;
              if (props.utilityType === 'SolenoidValves') {
                utilityTitle = utility.location;
              } else {
                utilityTitle = utility.type;
              }
              return (
                <View  key={utility.id}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(props.utilityInfoScreen, {
                        customer: props.customer,
                        utility: utility,
                        navigation: props.navigation,
                      })
                    }
                    style={styles.navigatorItemView}>
                    <Text style={styles.navigatorItemText}>
                      {' #' + numUtilitiesCounter + '. '}
                    </Text>
                    <Text style={styles.navigatorItemText}>{utilityTitle}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            // If there are no matches for customers and what the user entered
            // then we display the message "No Customers Found"
            <View style={styles.navigatorItemView}>
              <Text style={styles.navigatorItemText}>
                No {props.utilityTypeText} Found
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
  // End of displaying the Drop Down Search
};
// End of the stylesheet

export default UtilitySelection;
