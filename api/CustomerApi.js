import {Alert} from 'react-native';

export function checkValidPhoneNumber(phoneNumber) {
  console.log(phoneNumber.length);
  if (phoneNumber !== '' && phoneNumber.length !== 10) {
    Alert.alert(
      'Invalid Phone Number',
      'Please make sure it is 10 digits long (Ex. 360-333-7777)',
    );
    return false;
  }
  return true;
}
