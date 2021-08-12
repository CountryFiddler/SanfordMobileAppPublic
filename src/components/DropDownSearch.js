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
} from 'react-native';

class DropDownSearch extends Component {
  // Start of displaying the Drop Down Search
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.customerList.onPress}
        style={styles.container}>
        <View style={styles.subContainer}>
          {this.props.customerList.length ? (
            // Map customers into the dropdown search
            // searchText is the text shown for each customer button.
            // See FirestoreApi.js for more information on searchText.
            // If a customer is selected, then the user is directed
            // to the customer page for that customer.
            this.props.customerList.map(customer => {
              return (
                <View style={styles.itemView} key={customer.id}>
                  <Button
                    style={styles.itemText}
                    title={customer.searchText}
                    onPress={() =>
                      this.props.navigation.navigate('Customer', {
                        customer: customer,
                        navigation: this.props.navigation,
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
              <Text style={styles.itemText}>No Customers Found</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
  // End of displaying the Drop Down Search
}

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
});
// End of the stylesheet

export default DropDownSearch;
