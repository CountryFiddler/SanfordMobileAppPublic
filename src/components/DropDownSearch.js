import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class DropDownSearch extends Component {
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
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },

  subContainer: {
    paddingTop: 5,
    width: '85%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,

    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  itemView: {
    borderLeftWidth: 3,
    borderColor: '#26660b',
    backgroundColor: '#f2f3f4',
    height: 70,
    width: '100%',
    marginTop: '3%',
    borderRadius: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
    marginLeft: '2%',
  },
  noResultView: {
    alignSelf: 'center',
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
