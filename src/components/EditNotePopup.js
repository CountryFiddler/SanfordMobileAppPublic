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
  TouchableOpacity,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {styles} from '../../api/stylesApi';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faImage, faStickyNote} from '@fortawesome/free-regular-svg-icons';

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
      <View style={{alignItems: 'center', fontWeight: 'bold'}}>
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
            //flex: 1,
            alignItems: 'flex-start',
            //justifyContent: 'center',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => (
              this.setState({show: false}),
                this.props.navigation.navigate('DeleteNoteMedia', {
                  customer: this.props.customer,
                  note: this.props.note,
                  navigation: this.props.navigation,
                  utilityType: this.props.utilityType,
                  utility: this.props.utility,
                })
            )}
            style={styles.editNotePopUpButtonContainer}>
            <FontAwesomeIcon icon={faImage} size={30} color={'#26660b'} />
            <Text style={styles.editNotePopUpButton}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: 50,
            flex: 1,
            alignItems: 'flex-start',
            //justifyContent: 'center',
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => (
              this.setState({show: false}),
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
            )}
            style={styles.editNotePopUpButtonContainer}>
            <FontAwesomeIcon icon={faStickyNote} size={30} color={'#26660b'} />
            <Text style={styles.editNotePopUpButton}>{item.name}</Text>
          </TouchableOpacity>
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
            //justifyContent: 'flex-end',
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

export default EditNotePopup;
