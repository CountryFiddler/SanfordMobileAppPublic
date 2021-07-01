import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  render,
  Button,
} from 'react-native';

class DropDownSearch extends Component {
  //const {customers} = customerList;
  // const {navigation} = navigationProp.navigate('Customer');
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.customerList.onPress}
        style={styles.container}>
        <View style={styles.subContainer}>
          {this.props.customerList.length ? (
            this.props.customerList.map(customer => {
              return (
                <View style={styles.itemView}>
                  <Button
                    style={styles.itemText}
                    title={customer.searchText}
                    onPress={() =>
                      this.props.navigation.navigate('Customer', {
                        customer: customer,
                        //customerFirstName: customer.firstName,
                        //customerLastName: customer.lastName,
                        //customerAddress: customer.address,
                        navigation: this.props.navigation,
                      })
                    }
                  />
                </View>
              );
            })
          ) : (
            <View style={styles.itemView}>
              <Text style={styles.itemText}>No search items matched</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

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

export default DropDownSearch;
