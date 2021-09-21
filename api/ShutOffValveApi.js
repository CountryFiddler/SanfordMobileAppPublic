import firebase, {firestore} from 'react-native-firebase';

export function submitShutOffInfo(
  customer,
  shutoffType,
  size,
  location,
  backFlow,
  yearInstalled,
  navigation,
) {
  addShutOff(customer, {
    type: shutoffType,
    size: size,
    location: location,
    backFlow: backFlow,
    yearInstalled: yearInstalled,
  });
  navigation.navigate('Customer', {
    customer: customer,
  });
}

export function submitShutOffChanges(
  customer,
  shutoff,
  currentShutOffType,
  currentSize,
  currentLocation,
  currentBackFlow,
  currentYearInstalled,
  navigation,
) {
  if (currentShutOffType.length > 0) {
    shutoff.type = currentShutOffType;
  }
  if (currentSize.length > 0) {
    shutoff.size = currentSize;
  }
  if (currentLocation.length > 0) {
    shutoff.location = currentLocation;
  }
  if (currentBackFlow.length > 0) {
    shutoff.backFlow = currentBackFlow;
  }
  if (currentYearInstalled > 0) {
    shutoff.yearInstalled = currentYearInstalled;
  }
  updateShutOffs(customer, shutoff);
  navigation.navigate('ShutOffInfo', {
    customer: customer,
    shutoff: shutoff,
    navigation: navigation,
  });
}

// Start of Timer adding and getting functions
export function addShutOff(customer, shutoff, addComplete) {
  const docRef = firebase.firestore().collection('Customers').doc(customer.id);
  console.log(customer.id);
  docRef
    .collection('ShutOffValves')
    .doc()
    .set({
      type: shutoff.type,
      size: shutoff.size,
      location: shutoff.location,
      backFlow: shutoff.backFlow,
      yearInstalled: shutoff.yearInstalled,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export function updateShutOffs(customer, shutoff) {
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('ShutOffValves')
    .doc(shutoff.id)
    .update({
      type: shutoff.type,
      size: shutoff.size,
      location: shutoff.location,
      backFlow: shutoff.backFlow,
      yearInstalled: shutoff.yearInstalled,
    })
    // I think this updates the database quicker???
    .then(snapshot => snapshot.get())
    .catch(error => console.log(error));
}

export function getShutOffs(customer) {
  var shutOffValvesList = [];
  const docRef = firestore().collection('Customers').doc(customer.id);
  docRef
    .collection('ShutOffValves')
    .orderBy('createdAt')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        shutOffValvesList.push({
          type: doc.data().type,
          size: doc.data().size,
          location: doc.data().location,
          backFlow: doc.data().backFlow,
          yearInstalled: doc.data().yearInstalled,
          id: doc.id,
          customerID: customer.id,
          utilityType: 'ShutOffValves',
        });
      });
    });
  return shutOffValvesList;
}

export function getShutOffValveNotes(customer, timer) {
  var notesList = [];
  const docRef = firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('ShutOffValves')
    .doc(timer.id);
  docRef
    .collection('ShutOffValveNotes')
    .orderBy('createdAt')
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
          noteType: 'ShutOffValveNotes',
        });
      });
    });
  return notesList;
}
