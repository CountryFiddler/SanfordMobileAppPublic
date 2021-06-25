import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  render,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {getCustomers} from '../../api/FirestoreApi';
import DropDownSearch from './DropDownSearch';
import {SearchBar} from 'react-native-screens';
import {contains} from '../../api/SearchingApi';
import ListItem from './ListItem';
import _ from 'lodash';
import firebase from 'react-native-firebase'; /*{searching && (
        <DropDownSearch
          onPress={() => setSearching(false)}
          dataSource={filtered}
        />
      )}
    </View>
  );
}

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
*/ /*class CustomerSearchBar extends Component {
  state = {
    loading: false,
    data: [],
    error: null,
    query: '',
    fullData: [],
    customerList: [],
  };

  onCustomersReceived = customerList => {
    console.log('customer', customerList);
    ///  this.setState(prevState => ({
    // customerList: (prevState.customerList = customerList),
    //}));
    const list = [];
    customerList.forEach(doc => {
      const {name} = doc.data();
      list.push({
        key: doc.id,
        name,
      });
    });
    this.setState({
      fullData: list,
    });
  };

  handleSearch = text => {
    console.log('text', text);
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.customerList, customer => {
      return contains(customer, formatQuery);
    });
    this.setState({query: formatQuery, data});
  };
  componentDidMount() {
    getCustomers(this.onCustomersReceived);
  }

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search Customer"
        lightThemeround
        onChangeText={this.handleSearch}
      />
    );
  };
  render() {
    return (
      <SafeAreaView>
        <TextInput
          placeholder={'Search Customer'}
          onChangeText={this.handleSearch}
        />
        <FlatList
          data={[this.state.fullData]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            <Text> {item.name}</Text>;
          }}
        />
      </SafeAreaView>
    );
  }
}
export default CustomerSearchBar;

/*}
      {searching && (
        <DropDownSearch
          style={styles.dropDownSearchStyle}
          onPress={() => setSearching(false)}
          dataSource={filtered}
        />
      )}
    </View>
  );
}

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

/* Imported Code to Reference
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {dataSource.map((item, index) => {
            return (
              <View
                style={{
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: randomColor(),
                }}>
                <Text style={{fontSize: 15}}>{item}</Text>
              </View>
            );
          })}
        </View>

          const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

        <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, marginTop: 20, marginBottom: 20}}>
          {' '}
          List of data
        </Text>
      </View>
 */ /*}
      {/* and at the end of view */ /*export default function Bob() {
  const [dataSource] = useState([]);
  //const [customerList, setCustomerList] = useState([]);
  const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', '#E8DEF3']);
  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);

  /*useEffect(() => {
    getData();
  });

  function getData() {
    getCustomers(customersRetrieved);
  }*/ /*
  function customersRetrieved(customerList) {
    //setCustomerList(customerList);
    console.log(customerList);
    this.setState(prevState => ({
      dataSource: (prevState.dataSource = customerList),
    }));
  }
  useEffect(() => {
    getCustomers(customersRetrieved);
  });

  const onSearch = text => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = dataSource.filter(item => {
        if (item.match(temp)) {
          return item;
        }
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(dataSource);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search Customer"
        placeholderTextColor="white"
        onChangeText={onSearch}
      />
      <FlatList
        data={dataSource}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem item={item} />}
      />
      {/* your components can stay here like anything */
/*import ListItem from './ListItem'; /*}*/
class CustomerSearchBar extends Component {
  state = {
    customerList: [],
    filteredCustomers: [],
    searching: false,
  };

  /*useEffect(() => {
    getData();
  });

  function getData() {
    getCustomers(customersRetrieved);
  }*/

  customersRetrieved = customerList => {
    //setCustomerList(customerList);
    console.log(customerList);
    this.setState(prevState => ({
      customerList: (prevState.customerList = customerList),
    }));
  };

  componentDidMount() {
    getCustomers(this.customersRetrieved);
  }

  searchUser(textToSearch) {
    if (textToSearch) {
      this.setState({searching: true});
      this.setState({
        filteredCustomers: this.state.customerList.filter(customer =>
          customer.toLowerCase().includes(textToSearch.toLowerCase()),
        ),
      });
    } else {
      this.setState({searching: false});
    }
  }

  /*const onSearch = text => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = dataSource.filter(item => {
        if (item.match(temp)) {
          return item;
        }
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(dataSource);
    }
  };*/
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
          <DropDownSearch dataSource={this.state.filteredCustomers} />
        )}
      </View>
    );
  }
}

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

export default CustomerSearchBar;
