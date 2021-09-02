/**
 * File Name: HomeScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen allows users to search for an existing customer
 * or navigate to the screen to add a new custoemr to the database.
 *
 * Purpose: Provides users with the ability to search for customers in the
 * database and navigate to the screen to add new customers.
 */
// Import Statements
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  ScrollView,
  render,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {firestore, storage} from 'react-native-firebase';
import {getImageURL, updateNote} from '../../api/FirestoreApi';
import EditNotePopup from '../components/EditNotePopup';
import {deleteNoteMedia} from '../../api/UtilityApi';
import Video from 'react-native-video';
import CheckBox from 'react-native-checkbox';
import {ReactNativeZoomableView} from '@dudigital/react-native-zoomable-view';
import {styles} from '../../api/stylesApi';
import Icons from './Icons';

// Start of Home Screen Display
const NoteMedia = props => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);
  const [image10, setImage10] = useState(null);
  const [image11, setImage11] = useState(null);
  const [image12, setImage12] = useState(null);
  const [image13, setImage13] = useState(null);
  const [image14, setImage14] = useState(null);
  const [image15, setImage15] = useState(null);
  const [image16, setImage16] = useState(null);
  const [image17, setImage17] = useState(null);
  const [image18, setImage18] = useState(null);
  const [image19, setImage19] = useState(null);
  const [image20, setImage20] = useState(null);
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  const [video3, setVideo3] = useState(null);
  const [video4, setVideo4] = useState(null);
  const [video5, setVideo5] = useState(null);
  const [video6, setVideo6] = useState(null);
  const [video7, setVideo7] = useState(null);
  const [video8, setVideo8] = useState(null);
  const [video9, setVideo9] = useState(null);
  const [video10, setVideo10] = useState(null);
  const [video11, setVideo11] = useState(null);
  const [video12, setVideo12] = useState(null);
  const [video13, setVideo13] = useState(null);
  const [video14, setVideo14] = useState(null);
  const [video15, setVideo15] = useState(null);
  const [video16, setVideo16] = useState(null);
  const [video17, setVideo17] = useState(null);
  const [video18, setVideo18] = useState(null);
  const [video19, setVideo19] = useState(null);
  const [video20, setVideo20] = useState(null);
  const [agree, setAgree] = useState(false);
  const [zoomIn1, setZoomIn1] = useState(false);
  const [zoomIn2, setZoomIn2] = useState(false);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const customer = props.customer;
  const utilityType = props.utilityType;
  const utility = props.utility;
  const note = props.note;
  const isDeleteMedia = props.isDeleteMedia;
  const navigation = props.navigation;
  // toString might be just it
  /*if (note.imageRefs.length > 0) {
    console.log('adljkdsafjkldfsjkldfs');
    var imageRef1 = storage()
      .ref('/' + note.imageRefs[0].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage1(url);
      });
  }
  if (note.imageRefs.length > 1) {
    var imageRef2 = storage()
      .ref('/' + note.imageRefs[1].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage2(url);
      });
  }
  if (note.imageRefs.length > 2) {
    var imageRef3 = storage()
      .ref('/' + note.imageRefs[2].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage3(url);
      });
  }
  if (note.imageRefs.length > 3) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[3].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage4(url);
      });
  }*/
  if (note.imageRefs.length > 4) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[4].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage5(url);
      });
  }
  if (note.imageRefs.length > 5) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[5].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage6(url);
      });
  }
  if (note.imageRefs.length > 6) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[6].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage7(url);
      });
  }
  if (note.imageRefs.length > 7) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[7].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage8(url);
      });
  }
  if (note.imageRefs.length > 8) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[8].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage9(url);
      });
  }
  if (note.imageRefs.length > 9) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[9].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage10(url);
      });
  }
  if (note.imageRefs.length > 10) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[10].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage11(url);
      });
  }
  if (note.imageRefs.length > 11) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[11].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage12(url);
      });
  }
  if (note.imageRefs.length > 12) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[12].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage13(url);
      });
  }
  if (note.imageRefs.length > 13) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[13].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage14(url);
      });
  }
  if (note.imageRefs.length > 14) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[14].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage15(url);
      });
  }
  if (note.imageRefs.length > 15) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[15].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage16(url);
      });
  }
  if (note.imageRefs.length > 16) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[16].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage17(url);
      });
  }
  if (note.imageRefs.length > 17) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[17].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage18(url);
      });
  }
  if (note.imageRefs.length > 18) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[18].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage19(url);
      });
  }
  if (note.imageRefs.length > 19) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[19].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage20(url);
      });
  }

  /* if (note.videoRefs.length > 0) {
    var videoRef1 = storage()
      .ref('/' + note.videoRefs[0].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo1(url);
        console.log(url);
      });
  }
  if (note.videoRefs.length > 1) {
    var videoRef2 = storage()
      .ref('/' + note.videoRefs[1].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo2(url);
      });
  }
  if (note.videoRefs.length > 2) {
    var videoRef3 = storage()
      .ref('/' + note.videoRefs[2].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo3(url);
      });
  }
  if (note.videoRefs.length > 3) {
    var videoRef4 = storage()
      .ref('/' + note.videoRefs[3].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo4(url);
      });
  }
  if (note.videoRefs.length > 4) {
    var videoRef5 = storage()
      .ref('/' + note.videoRefs[4].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo5(url);
      });
  }
  if (note.videoRefs.length > 5) {
    var videoRef6 = storage()
      .ref('/' + note.videoRefs[5].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo6(url);
      });
  }
  if (note.videoRefs.length > 6) {
    var videoRef7 = storage()
      .ref('/' + note.videoRefs[6].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo7(url);
      });
  }
  if (note.videoRefs.length > 7) {
    var videoRef8 = storage()
      .ref('/' + note.videoRefs[7].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo8(url);
      });
  }
  if (note.videoRefs.length > 8) {
    var videoRef9 = storage()
      .ref('/' + note.videoRefs[8].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo9(url);
      });
  }
  if (note.videoRefs.length > 9) {
    var videoRef10 = storage()
      .ref('/' + note.videos[9].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo10(url);
      });
  }
  if (note.videoRefs.length > 10) {
    var videoRef11 = storage()
      .ref('/' + note.videoRefs[10].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo11(url);
      });
  }
  if (note.videoRefs.length > 11) {
    var videoRef12 = storage()
      .ref('/' + note.videoRefs[11].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo12(url);
      });
  }
  if (note.videoRefs.length > 12) {
    var videoRef13 = storage()
      .ref('/' + note.videoRefs[12].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo13(url);
      });
  }
  if (note.videoRefs.length > 13) {
    var videoRef14 = storage()
      .ref('/' + note.videoRefs[13].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo14(url);
      });
  }
  if (note.videoRefs.length > 14) {
    var videoRef15 = storage()
      .ref('/' + note.videoRefs[14].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo15(url);
      });
  }
  if (note.videoRefs.length > 15) {
    var videoRef16 = storage()
      .ref('/' + note.videoRefs[15].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo16(url);
      });
  }
  if (note.videoRefs.length > 16) {
    var videoRef17 = storage()
      .ref('/' + note.videoRefs[16].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo17(url);
      });
  }
  if (note.videoRefs.length > 17) {
    var videoRef18 = storage()
      .ref('/' + note.videoRefs[17].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo18(url);
      });
  }
  if (note.videoRefs.length > 18) {
    var videoRef19 = storage()
      .ref('/' + note.videoRefs[18].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo19(url);
      });
  }
  if (note.videoRefs.length > 19) {
    var videoRef20 = storage()
      .ref('/' + note.videoRefs[19].videoRef)
      .getDownloadURL()
      .then(url => {
        setVideo20(url);
      });
  }
  //console.log(imageRef);
  // console.log(note.title);
  //console.log(note.noteText);
  // const imageURL = null;
  /*var counter = 0;
  while (counter < note.numImages) {
    var imageRef = storage().ref('/' + note.images[counter].imageRef);
    imageRef.getDownloadURL().then(url => {
      //setTestImage(url);
      // console.log(url);
      console.log(url);
    //  setTestImage(prevItems => [...prevItems, {url}]);
      //setTestImage(url);
    });
    counter++;
  }
  console.log(counter);*/
  /* const url = storage()
    .ref('/' + note.images[0].imageRef)
    .getDownloadURL();*/
  function displayImage1() {
    //<Image source={{uri: image1}} style={{width: 200, height: 300}} />
    // if (note.imageRefs.length > 0) {
    return (
      <View>
        <TouchableOpacity onPress={() => setZoomIn1(true)}>
          <Image
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')}
            style={styles.noteImage}
          />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[1].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={zoomIn1 === true} animated>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setZoomIn1(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image
                  source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')}
                  style={styles.modalImage}
                />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
    // }
  }
  function displayImage2() {
    //<Image source={{uri: image2}} style={{width: 200, height: 300}} />
    //   if (note.imageRefs.length > 1) {
    return (
      <View>
        <TouchableOpacity onPress={() => setZoomIn2(true)}>
          <Image
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')}
            style={styles.noteImage}
          />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[1].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={zoomIn2 === true} animated>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setZoomIn2(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image
                  source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')}
                  style={styles.modalImage}
                />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
    // }
    /*
              <Modal visible={zoomIn === true} animated>
            <View>
              <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={1}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image
                  source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')}
                  style={{width: 200, height: 200}}
                />
              </ReactNativeZoomableView>
            </View>
          </Modal>
     */
  }
  function displayImage3() {
    // if (note.imageRefs.length > 2) {
    //<Image source={{uri: image3}} style={{width: 200, height: 300}} />
    return (
      <View>
        <TouchableOpacity onPress={() => setZoomIn1(true)}>
          <Image
            source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
            style={styles.noteImage}
          />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[1].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={zoomIn1 === true} animated>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setZoomIn1(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image
                  source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                  style={styles.modalImage}
                />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
    //}
  }
  function displayImage4() {
    if (note.imageRefs.length > 3) {
      return (
        <View>
          <Image source={{uri: image4}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[3].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage5() {
    if (note.imageRefs.length > 4) {
      return (
        <View>
          <Image source={{uri: image5}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[4].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage6() {
    if (note.imageRefs.length > 5) {
      return (
        <View>
          <Image source={{uri: image6}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[5].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage7() {
    if (note.imageRefs.length > 6) {
      return (
        <View>
          <Image source={{uri: image7}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[6].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage8() {
    if (note.imageRefs.length > 7) {
      return (
        <View>
          <Image source={{uri: image8}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[7].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage9() {
    if (note.imageRefs.length > 8) {
      return (
        <View>
          <Image source={{uri: image9}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[8].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage10() {
    if (note.imageRefs.length > 9) {
      return (
        <View>
          <Image source={{uri: image10}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[9].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage11() {
    if (note.imageRefs.length > 10) {
      return (
        <View>
          <Image source={{uri: image11}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[10].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage12() {
    if (note.imageRefs.length > 11) {
      return (
        <View>
          <Image source={{uri: image12}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[11].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage13() {
    if (note.imageRefs.length > 12) {
      return (
        <View>
          <Image source={{uri: image13}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[12].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage14() {
    if (note.imageRefs.length > 13) {
      return (
        <View>
          <Image source={{uri: image14}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[13].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage15() {
    if (note.imageRefs.length > 14) {
      return (
        <View>
          <Image source={{uri: image15}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[14].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage16() {
    if (note.imageRefs.length > 15) {
      return (
        <View>
          <Image source={{uri: image16}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[15].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage17() {
    if (note.imageRefs.length > 16) {
      return (
        <View>
          <Image source={{uri: image17}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[16].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage18() {
    if (note.imageRefs.length > 17) {
      return (
        <View>
          <Image source={{uri: image18}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[17].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage19() {
    if (note.imageRefs.length > 18) {
      return (
        <View>
          <Image source={{uri: image19}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[18].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayImage20() {
    if (note.imageRefs.length > 19) {
      return (
        <View>
          <Image source={{uri: image20}} style={{width: 200, height: 300}} />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[19].imageRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  /*function displayVideo1() {
    if (note.videoRefs.length > 0) {
      console.log("Bob" + video1);
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video1}}
            style={{width: 200, height: 300}}
            resizeMode={'contain'}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[0].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo2() {
    if (note.videoRefs.length > 1) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            resizeMode={'contain'}
            source={{uri: video2}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[1].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayVideo3() {
    if (note.videoRefs.length > 2) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video3}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[2].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo4() {
    if (note.videoRefs.length > 3) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video4}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[3].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo5() {
    if (note.videoRefs.length > 4) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video5}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[4].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo6() {
    if (note.videoRefs.length > 5) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video6}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[5].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo7() {
    if (note.videoRefs.length > 6) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video7}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[6].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo8() {
    if (note.videoRefs.length > 7) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video8}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[7].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo9() {
    if (note.videoRefs.length > 8) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video9}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[8].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo10() {
    if (note.videoRefs.length > 9) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video10}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[9].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo11() {
    if (note.videoRefs.length > 10) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video11}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[10].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo12() {
    if (note.videoRefs.length > 11) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video12}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[11].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo13() {
    if (note.videoRefs.length > 12) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video13}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[12].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo14() {
    if (note.videoRefs.length > 13) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video14}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[13].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo15() {
    if (note.videoRefs.length > 14) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video15}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[14].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo16() {
    if (note.videoRefs.length > 15) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video16}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[15].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo17() {
    if (note.videoRefs.length > 16) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video17}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[16].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo18() {
    if (note.videoRefs.length > 17) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video18}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[17].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo19() {
    if (note.videoRefs.length > 18) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video19}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[18].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo20() {
    if (note.videoRefs.length > 19) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video20}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[19].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
        <View>{displayVideo1()}</View>
      <View>{displayVideo2()}</View>
      <View>{displayVideo3()}</View>
      <View>{displayVideo4()}</View>
      <View>{displayVideo5()}</View>
      <View>{displayVideo6()}</View>
      <View>{displayVideo7()}</View>
      <View>{displayVideo8()}</View>
      <View>{displayVideo9()}</View>
      <View>{displayVideo10()}</View>
      <View>{displayVideo11()}</View>
      <View>{displayVideo12()}</View>
      <View>{displayVideo13()}</View>
      <View>{displayVideo14()}</View>
      <View>{displayVideo15()}</View>
      <View>{displayVideo16()}</View>
      <View>{displayVideo17()}</View>
      <View>{displayVideo18()}</View>
      <View>{displayVideo19()}</View>
      <View>{displayVideo20()}</View>*/
  function selectImageToDelete(imageRef) {
    var isInImagesToDelete = false;
    for (var i = 0; i < imagesToDelete.length; i++) {
      if (imageRef === imagesToDelete[i]) {
        console.log('Bob');
        imagesToDelete.splice(i, 1);
        //console.log(imagesToDelete.length);
        isInImagesToDelete = true;
      }
    }
    if (!isInImagesToDelete) {
      setImagesToDelete(prevItems => [...prevItems, imageRef]);
    }
    console.log(imagesToDelete.length);
    /*isInImagesToDelete = false;
    for (var i = 0; i < imagesToDelete.length; i++) {
      if (imageRef === note.videos[i].videoRef) {
        imagesToDelete.splice(i, 1, imageRef);
        isInImagesToDelete = true;
      }
    }
    if (!isInImagesToDelete) {
      setImagesToDelete(prevItems => [...prevItems, imageRef]);
      //console.log(imagesToDelete);
    }*/
  }

  //console.log(testImage);
  //imageURL = getImageURL(note.images[0].imageRef);
  // console.log(note.images[0].imageRef);
  // getURLS();
  console.log('Num Image Refs: ' + note.imageRefs.length);
  return (
    <ScrollView style={styles.noteImageContainer}>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage1()}</View>
        <View>{displayImage2()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage3()}</View>
        {note.imageRefs.length > 3 ? (
        <View>{displayImage4()}</View>
        ) : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage5()}</View>
        <View>{displayImage6()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage7()}</View>
        <View>{displayImage8()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage9()}</View>
        <View>{displayImage10()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage11()}</View>
        <View>{displayImage12()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage13()}</View>
        <View>{displayImage14()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage15()}</View>
        <View>{displayImage16()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage17()}</View>
        <View>{displayImage18()}</View>
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage19()}</View>
        <View>{displayImage20()}</View>
      </View>
      <View>
        {isDeleteMedia ? (
          <Button
            title={'Delete Selected Photos'}
            onPress={() =>
              deleteNoteMedia(
                imagesToDelete,
                customer,
                note,
                utilityType,
                utility,
                navigation,
              )
            }
          />
        ) : null}
      </View>
    </ScrollView>
  );
};
// End of Home Screen Display

export default NoteMedia;
