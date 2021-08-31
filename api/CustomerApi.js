import {Alert} from 'react-native';

export function checkValidPhoneNumber(phoneNumber) {
  console.log(phoneNumber.length);
  if (phoneNumber !== '' && phoneNumber.length !== 11) {
    Alert.alert(
      'Invalid Phone Number',
      'Please make sure it is 11 digits long and includes a leading 1 (Ex. 1-800-333-7777)',
    );
    return false;
  }
  return true;
}
