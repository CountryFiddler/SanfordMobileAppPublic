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
        <View
          style={styles.subContainer}
          contentContainerStyle={{alignItems: 'flex-start'}}>
          {this.props.customerList.length ? (
            // Map customers into the dropdown search
            // searchText is the text shown for each customer button.
            // See FirestoreApi.js for more information on searchText.
            // If a customer is selected, then the user is directed
            // to the customer page for that customer.
            this.props.customerList.map(customer => {
              return (
                <View style={styles.itemView} key={customer.id}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Customer', {
                        customer: customer,
                        navigation: this.props.navigation,
                      })
                    }>
                    {customer.firstName !== '' ? (
                      <Text style={styles.itemText}>{customer.firstName + ' ' + customer.lastName + '\n' + customer.address}</Text>
                    ) : (
                      <Text style={styles.itemText}>
                        {customer.lastName + '\n' + customer.address}
                      </Text>
                    )}
                  </TouchableOpacity>
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
    alignItems: 'center',
  },

  subContainer: {
    //backgroundColor: '#84DCC6',
    //backgroundColor: 'white',
    paddingTop: 5,
    //borderWidth: 3,
    //borderColor: 'black',
    //marginHorizontal: 25,
    width: '85%',
    ///height: '70%',
    //marginVertical: 60,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,

    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    //flexWrap: 'wrap',

    //justifyContent: 'center',
    //alignContent: 'center',
  },
  itemView: {
    //borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#26660b',
    //borderTopWidth: 3,
    //borderTopColor: '#26660b',
    //borderWidth: 3,
    //borderColor: '#26660b',
    backgroundColor: '#f2f3f4',
    height: 70,
    width: '100%',
    marginTop: '3%',
    //justifyContent: 'flex-start',
    borderRadius: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    //marginLeft: '3.5%',
    //flex: 1,
  },
  itemText: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
    marginLeft: '2%',
    //paddingHorizontal: 10,
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
