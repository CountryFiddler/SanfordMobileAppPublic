import firebase from 'react-native-firebase';
import {
  addNote,
  addTimer,
  getTimers,
  updateTimers,
  UploadImage,
} from './FirestoreApi';

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

export function submitTimerChanges(
  customer,
  timer,
  currentTimerType,
  currentNumPrograms,
  currentNumZones,
  navigation,
) {
  if (currentTimerType.length > 0) {
    timer.timerType = currentTimerType;
  }
  if (currentNumPrograms.length > 0) {
    timer.numPrograms = currentNumPrograms;
    console.log(currentNumPrograms);
  }
  if (currentNumZones.length > 0) {
    timer.numZones = currentNumZones;
  }
  updateTimers(customer, timer);
  navigation.navigate('TimerInfo', {
    customer: customer,
    timer: timer,
    navigation: navigation,
  });
}
export function getTimerInfo(customer, setTimers) {
  getTimers(customer, setTimers);
}

export function submitNote(
  customer,
  images,
  imageRefs,
  utilityType,
  utility,
  noteTitle,
  noteText,
  navigation,
) {
  var utilityNote = {noteTitle, noteText};
  utilityNote.noteTitle = noteTitle;
  utilityNote.noteText = noteText;
  console.log(images[0]);
  UploadImage(images, customer);
  addNote(customer, utilityType, utility, utilityNote, imageRefs, navigation);
  navigation.navigate('UtilityNoteScreen');
}
