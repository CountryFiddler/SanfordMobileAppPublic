/**
 * File Name: CustomerSearchBar.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This class is a search bar to search for customers.
 * It conatins methods to retrieve information from the database and filter
 * the customers based on the text the user types into the search bar. This
 * class also conatins and instance of the DropDownSearch class, which displays
 * a list of customers based on the text typed into the search bar.
 *
 * Purpose: Provides users with the ability to search for customers in the
 * database.
 */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {getCustomers} from '../../api/FirestoreApi';
import DropDownSearch from './DropDownSearch';

class CustomerSearchBar extends Component {
  // Member Variables
  state = {
    // Stores the customer list as it comes from firestore
    customersList: [],
    // Stores the customers that contain text matching to what
    // the user has typed in to the search bar
    filteredCustomers: [],
    searching: false,
  };

  // We pass this into getCustomers() so that getCustomers() updates
  // customerList.
  customersRetrieved = customerNamesList => {
    this.setState(prevState => ({
      customersList: (prevState.customersList = customerNamesList),
    }));
  };

  /**
   * Description: When the page loads, we retrieve the
   * customers from the database
   *
   * Parameters: none
   *
   * Preconditions: None, other than the user has to navigate to the page
   *
   * Postconditions: customerList should be populated with customers
   *
   * Return: None
   *
   * Functions Called: getCustomers(this.customerRetrieved)
   *
   */
  componentDidMount() {
    getCustomers(this.customersRetrieved).catch(error => console.log(error));
    //console.log(this.state.customersList.length);
  }

  /**
   * Description: Searches for customers that contain the same text as the
   * text entered into the search bar by the user.
   *
   * Parameters: textToSearch (This is just the text entered by the user)
   *
   * Preconditions: customerList must be populated with customers
   *
   * Postconditions: filteredCustomers conatins customers that contain the
   * text entered by the user (textToSearch)
   *
   * Return: None
   *
   * Functions Called: setState(), toLowerCase(), includes(), filter()
   * (These functions are all built in)
   *
   */
  searchUser(textToSearch) {
    // If the user starts typing into the search bar, enter into this condition
    if (textToSearch) {
      this.setState({searching: true});
      //console.log(this.state.customersList.length);
      // Filter the customers. Also make the text lower case so it does not
      // matter if the user types in upper case or lower case.
      this.setState({
        filteredCustomers: this.state.customersList.filter(customer =>
          // searchText is of the form: firstName + " " + lastName + "\n"
          // + address. What the customer types in must match searchText.
          // The customer can type the customer's name or address
          customer.searchText
            .toLowerCase()
            .includes(textToSearch.toLowerCase()),
        ),
      });
      //console.log(this.state.customersList.length);
      // If the user is not typing, set searching to false
    } else {
      this.setState({searching: false});
    }
  }

  // Start of displaying the customer search bar
  render() {
    //console.log(this.state.customersList.length);
    //alert(this.state.customersList.length);
    return (
      <View style={styles.container}>
        <TextInput
          // This is the actual search bar
          style={styles.textInput}
          placeholder="Search Customer"
          placeholderTextColor="white"
          onChangeText={text => {
            this.searchUser(text);
          }}
        />
        {this.state.searching && (
          <DropDownSearch
            // This the drop down search that appears as a user is searching
            customerList={this.state.filteredCustomers}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
  // End of displaying the customer search bar
}

// Start of stylesheet
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    //alignItems: 'center',
    marginTop: '20%',
    flex: 1,
  },
  textInput: {
    alignSelf: 'center',
    backgroundColor: '#BFBFBF',
    width: '85%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
// End of stylesheet

export default CustomerSearchBar;
