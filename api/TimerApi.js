import firebase, {firestore} from 'react-native-firebase';

export function submitTimerInfo(
  customer,
  timerType,
  location,
  insideOutside,
  yearInstalled,
  numPrograms,
  numZones,
  navigation,
) {
  addTimer(customer, {
    type: timerType,
    location: location,
    insideOutside: insideOutside,
    yearInstalled: yearInstalled,
    numPrograms: numPrograms,
    numZones: numZones,
  });
  navigation.navigate('Customer', {
    customer: customer,
  });
}

export function submitTimerChanges(
  customer,
  timer,
  currentTimerType,
  currentLocation,
  currentInsideOutside,
  currentYearInstalled,
  currentNumPrograms,
  currentNumZones,
  navigation,
) {
  if (currentTimerType.length > 0) {
    timer.type = currentTimerType;
  }
  if (currentLocation.length > 0) {
    timer.location = currentLocation;
  }
  if (currentInsideOutside.length > 0) {
    timer.insideOutside = currentInsideOutside;
  }
  if (currentNumPrograms.length > 0) {
    timer.numPrograms = currentNumPrograms;
  }
  if (currentNumZones.length > 0) {
    timer.numZones = currentNumZones;
  }
  if (currentYearInstalled.length > 0) {
    timer.yearInstalled = currentYearInstalled;
  }
  updateTimers(customer, timer);
  navigation.navigate('TimerInfo', {
    customer: customer,
    timer: timer,
    navigation: navigation,
  });
}

// Start of Timer adding and getting functions
export function addTimer(customer, timer, addComplete) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id);
  console.log(customer.id);
  docRef
    .collection('Timers')
    .doc()
    .set({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      type: timer.type,
      location: timer.location,
      insideOutside: timer.insideOutside,
      numPrograms: timer.numPrograms,
      numZones: timer.numZones,
      yearInstalled: timer.yearInstalled,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export function updateTimers(customer, timer) {
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('Timers')
    .doc(timer.id)
    .update({
      type: timer.type,
      numPrograms: timer.numPrograms,
      location: timer.location,
      insideOutside: timer.insideOutside,
      numZones: timer.numZones,
      yearInstalled: timer.yearInstalled,
    })
    // I think this updates the database quicker???
    .then(snapshot => snapshot.get())
    .catch(error => console.log(error));
}

export function getTimers(customer) {
  var timersList = [];
  const docRef = firestore()
    .collection('Customers')
    .doc(customer.id);
  docRef
    .collection('Timers')
    .orderBy('createdAt')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        timersList.push({
          type: doc.data().type,
          location: doc.data().location,
          insideOutside: doc.data().insideOutside,
          numPrograms: doc.data().numPrograms,
          numZones: doc.data().numZones,
          yearInstalled: doc.data().yearInstalled,
          id: doc.id,
          customerID: customer.id,
          utilityType: 'Timers',
        });
      });
    });
  return timersList;
}

export function getTimerNotes(customer, timer) {
  var notesList = [];
  const docRef = firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('Timers')
    .doc(timer.id);
  docRef
    .collection('TimerNotes')
    .orderBy('createdAt', 'desc')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        notesList.push({
          title: doc.data().title,
          noteText: doc.data().noteText,
          utilityID: timer.id,
          customerID: customer.id,
          noteID: doc.id,
          numImages: doc.data().numImages,
          imageRefs: doc.data().imageRefs,
          numVideos: doc.data().numVideos,
          videoRefs: doc.data().videoRefs,
          noteType: 'TimerNotes',
        });
      });
    });
  return notesList;
}
