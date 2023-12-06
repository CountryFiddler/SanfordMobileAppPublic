import React from 'react';
import {TouchableOpacity, ScrollView, View, Text} from 'react-native';
import {styles} from '../../api/stylesApi';

const UtilitySelection = props => {
  var numUtilitiesCounter = 0;

  return (
    <ScrollView>
      <TouchableOpacity style={styles.navigatorContainer}>
        <View style={styles.navigatorSubContainer}>
          {props.utilityList.length ? (
            props.utilityList.map(utility => {
              numUtilitiesCounter++;
              var utilityTitle;
              if (props.utilityType === 'SolenoidValves') {
                utilityTitle = utility.location;
              } else {
                utilityTitle = utility.type;
              }
              return (
                <View key={utility.id}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(props.utilityInfoScreen, {
                        customer: props.customer,
                        utility: utility,
                        utilities: props.utilityList,
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
};

export default UtilitySelection;
