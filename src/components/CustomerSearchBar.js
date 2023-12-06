import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
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
    if (textToSearch) {
      this.setState({searching: true});
      this.setState({
        filteredCustomers: this.state.customersList.filter(customer =>
          customer.searchText
            .toLowerCase()
            .includes(textToSearch.toLowerCase()),
        ),
      });
    } else {
      this.setState({searching: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Search Customer"
          placeholderTextColor="white"
          onChangeText={text => {
            this.searchUser(text);
          }}
        />
        {this.state.searching && (
          <ScrollView>
            <DropDownSearch
              customerList={this.state.filteredCustomers}
              navigation={this.props.navigation}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}

// Start of stylesheet
const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
    width: '90%',
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
