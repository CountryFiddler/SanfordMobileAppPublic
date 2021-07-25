// Import Statements
import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';

// Start of Home Screen Display
const deviceHeight = Dimensions.get('window').height;
class EditNotePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({show: true});
  };
  close = () => {
    this.setState({show: false});
  };
  //const ref = props.ref;
  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) {
      return view;
    }
    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const {title} = this.props;
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#182E44',
            fontSize: 25,
            fontWeight: '500',
            marginTop: 15,
            marginBottom: 30,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  renderContent = () => {
    const {data} = this.props;
    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          style={{marginBottom: 20}}
          showsVerticalScrollIndicator={false}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeperator}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </View>
    );
  };

  renderItem = ({item}) => {
    if (!item.deleteNote) {
      return (
        <View
          style={{
            height: 50,
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 50,
          }}>
          <Button
            style={{fontSize: 18, fontWeight: 'normal', color: '#182E44'}}
            title={item.name}
            onPress={() =>
              this.props.navigation.navigate('DeleteNoteMedia', {
                customer: this.props.customer,
                note: this.props.note,
                navigation: this.props.navigation,
                utilityType: this.props.utilityType,
                utility: this.props.utility,
              })
            }
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: 50,
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 50,
          }}>
          <Button
            style={{fontSize: 18, fontWeight: 'normal', color: '#182E44'}}
            title={item.name}
            onPress={() =>
              this.props.navigation.navigate('DeleteContent', {
                deleteCustomer: false,
                deleteUtility: false,
                deleteUtilityNote: true,
                customer: this.props.customer,
                utility: this.props.utility,
                utilityNote: this.props.note,
                contentToDelete: this.props.note.title,
                prevScreen: 'EditNote',
              })
            }
          />
        </View>
      );
    }
  };

  renderSeparator = () => (
    <View
      style={{
        opacity: 0.1,
        backgroundColor: '#102E44',
        height: 1,
      }}
    />
  );

  render() {
    const {onTouchOutside, title} = this.props;
    let {show} = this.state;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingHorizontal: 10,
              maxHeight: deviceHeight * 0.4,
            }}>
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}

// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  homePageContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    //alignSelf: 'center',
  },
  addCustomerButton: {
    //position: 'absolute',
    marginTop: 50,
  },
});

export default EditNotePopup;
