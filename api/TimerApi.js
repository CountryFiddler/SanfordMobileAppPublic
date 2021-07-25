import firebase from 'react-native-firebase';
import {
  addNote,
  addTimer,
  deleteImage,
  deleteImages, deleteUtilityNote,
  getTimers,
  updateNote,
  updateTimers,
  UploadImage,
} from "./FirestoreApi";

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
  isAddNote,
  customer,
  numImages,
  images,
  imageRefs,
  utilityType,
  utility,
  noteTitle,
  noteText,
  noteID,
  navigation,
) {
  var utilityNote = {noteTitle, noteText, noteID};
  utilityNote.noteTitle = noteTitle;
  utilityNote.noteText = noteText;
  console.log(images[0]);
  UploadImage(images, customer);
  if (isAddNote) {
    addNote(
      customer,
      utilityType,
      utility,
      utilityNote,
      imageRefs,
      numImages,
      navigation,
    );
  } else {
    updateNote(
      customer,
      utilityType,
      utility,
      utilityNote,
      imageRefs,
      numImages,
      navigation,
    );
  }
  navigation.navigate('UtilityNoteScreen');
}
export function deleteNoteMedia(
  imagesToBeDeleted,
  customer,
  utilityNote,
  utilityType,
  utility,
) {
  console.log(imagesToBeDeleted);
  for (var i = 0; i < imagesToBeDeleted.length; i++) {
    for (var j = 0; j < utilityNote.images.length; j++) {
      console.log(
        'i = ' +
          imagesToBeDeleted[i] +
          ' j = ' +
          utilityNote.images[j].imageRef,
      );
      if (imagesToBeDeleted[i] === utilityNote.images[j].imageRef) {
        utilityNote.numImages = utilityNote.numImages - 1;
        utilityNote.images.splice(j, 1);
        deleteImage(imagesToBeDeleted[i]);
        console.log('image deleted');
        console.log(utilityNote.title);
      }
    }
  }
  updateNote(
    customer,
    utilityType,
    utility,
    utilityNote,
    utilityNote.images,
    utilityNote.numImages,
  );
}

export function deleteContent(
  isDeleteCustomer,
  isDeleteUtility,
  isDeleteUtilityNote,
  customer,
  utility,
  utilityNote,
  navigation,
) {
  if (isDeleteCustomer) {
    // Call Delete Customer
  }
  if (isDeleteUtility) {
    // Call Delete Utility
  }
  if (isDeleteUtilityNote) {
    deleteUtilityNote(customer, utility, utilityNote);
    //navigation.navigate()
  }
}
