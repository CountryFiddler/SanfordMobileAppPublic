import firebase from 'react-native-firebase';
import {
  addNote,
  addTimer,
  deleteImage,
  deleteImages,
  deleteUtilityNote,
  getTimers,
  updateNote,
  updateTimers,
  UploadMedia,
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
  isAddNote,
  customer,
  numImages,
  numVideos,
  images,
  imageRefs,
  videos,
  videoRefs,
  utilityType,
  utility,
  noteTitle,
  noteText,
  noteID,
  noteType,
  navigation,
) {
  var utilityNote = {noteTitle, noteText, noteID, noteType};
  utilityNote.title = noteTitle;
  utilityNote.noteText = noteText;
  utilityNote.noteID = noteID;
  utilityNote.noteType = noteType;
  //console.log(videos[0]);
  if (isAddNote) {
    utilityNote.noteID = addNote(
      customer,
      utilityType,
      utility,
      utilityNote,
      imageRefs,
      numImages,
      videoRefs,
      numVideos,
      navigation,
    );
    console.log(utilityNote.noteID);
    for (var i = 0; i < images.length; i++) {
      const {uri} = images[i].source;
      imageRefs[i].imageRef =
        imageRefs[i].imageRef +
        '/' +
        utilityNote.noteID +
        '/' +
        uri.substring(uri.lastIndexOf('/') + 1);
      //console.log(imageRefs[i].imageRef);
    }
    for (var j = 0; j < videos.length; j++) {
      const {uri} = videos[i].source;
      videoRefs[i].videoRef =
        videoRefs[i].videoRef +
        '/' +
        utilityNote.noteID +
        '/' +
        uri.substring(uri.lastIndexOf('/') + 1);
    }
    updateNote(
      customer,
      utilityType,
      utility,
      utilityNote,
      imageRefs,
      numImages,
      videoRefs,
      numVideos,
      navigation,
    );
    // Get Single Note
    // Set The Remaining ImageRefs and VideoRefs
  } else {
    //onsole.log(videoRefs);
    updateNote(
      customer,
      utilityType,
      utility,
      utilityNote,
      imageRefs,
      numImages,
      videoRefs,
      numVideos,
      navigation,
    );
  }
  UploadMedia(images, customer, utility, utilityNote);
  UploadMedia(videos, customer, utility, utilityNote);
  //navigation.navigate('UtilityNoteScreen');
}
export function deleteNoteMedia(
  imagesToBeDeleted,
  customer,
  utilityNote,
  utilityType,
  utility,
) {
  console.log('Deleting Images');
  for (var i = 0; i < imagesToBeDeleted.length; i++) {
    for (var j = 0; j < utilityNote.imageRefs.length; j++) {
      if (imagesToBeDeleted[i] === utilityNote.imageRefs[j].imageRef) {
        utilityNote.numImages = utilityNote.numImages - 1;
        utilityNote.imageRefs.splice(j, 1);
        deleteImage(imagesToBeDeleted[i]);
        console.log('image deleted');
        console.log(utilityNote.title);
      }
    }
    console.log(utilityNote.videoRefs[0].videoRef);
    //console.log(imagesToBeDeleted[0]);
    for (var j = 0; j < utilityNote.videoRefs.length; j++) {
      if (imagesToBeDeleted[i] === utilityNote.videoRefs[j].videoRef) {
        utilityNote.numVideos = utilityNote.numVideos - 1;
        utilityNote.videoRefs.splice(j, 1);
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
    utilityNote.imageRefs,
    utilityNote.numImages,
    utilityNote.videoRefs,
    utilityNote.numVideos,
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
