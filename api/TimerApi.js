import firebase from 'react-native-firebase';
import { addTimer, getTimers } from "./FirestoreApi";

export function submitTimerInfo(
  customer,
  timerType,
  numPrograms,
  numZones,
  navigation,
) {
  addTimer(customer, {
    timerType: timerType,
    numPrograms: numPrograms,
    numZones: numZones,
  });
  navigation.navigate('TimerSelection');
}

export function getTimerInfo(customer, setTimers) {
  getTimers(customer, setTimers);
}
