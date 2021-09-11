/*import { Image, Modal, TouchableOpacity, View } from "react-native";
import { styles } from "../api/stylesApi";
import CheckBox from "react-native-checkbox";
import Icons from "../src/components/Icons";
import React from "react";
import { storage } from "react-native-firebase";

function displayImage1() {
  //<Image source={{uri: image1}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 0) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[0].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={image1ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage2() {
  //<Image source={{uri: image2}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 1) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage2ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
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
        <Modal visible={image2ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage2ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
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
/*}
/*
function displayImage3() {
  //if (note.imageRefs.length > 2) {
    //<Image source={{uri: image3}} style={{width: 200, height: 300}} />
    return (
      <View>
        <TouchableOpacity onPress={() => setImage3ZoomIn(true)}>
          <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[2].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={image3ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage3ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage4() {
  //<Image source={{uri: image4}} style={{width: 200, height: 300}} />;
  //if (note.imageRefs.length > 3) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage4ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image4ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage4ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage5() {
  //<Image source={{uri: image5}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 4) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage5ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image5ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage5ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage6() {
  //<Image source={{uri: image6}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 5) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage6ZoomIn(true)}>
          <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image6ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage6ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage7() {
  //<Image source={{uri: image7}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 6) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage7ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image7ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage7ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage8() {
  //<Image source={{uri: image8}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 7) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage8ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image8ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage8ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage9() {
  //<Image source={{uri: image9}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 8) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage9ZoomIn(true)}>
          <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image9ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage9ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage10() {
  //<Image source={{uri: image10}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 9) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage10ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image10ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage10ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage11() {
  // <Image source={{uri: image11}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 10) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage11ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image11ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage11ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage12() {
  //<Image source={{uri: image12}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 11) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage12ZoomIn(true)}>
          <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image12ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage12ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage13() {
  //<Image source={{uri: image13}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 12) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage13ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image13ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage13ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage14() {
  //<Image source={{uri: image14}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 13) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage14ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image14ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage14ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage15() {
  //<Image source={{uri: image15}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 14) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage15ZoomIn(true)}>
          <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image15ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage15ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage16() {
  //<Image source={{uri: image16}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 15) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage16ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image16ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage16ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage17() {
  //<Image source={{uri: image17}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 16) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage17ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image17ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage17ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage18() {
  //<Image source={{uri: image18}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 17) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage18ZoomIn(true)}>
          <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>

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
        <Modal visible={image18ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage18ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/4194331C-1822-468E-975A-EF236711870A_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}
function displayImage19() {
  //<Image source={{uri: image19}} style={{width: 200, height: 300}} />
 // if (note.imageRefs.length > 18) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage19ZoomIn(true)}>
          <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image19ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage19ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
 // }
}
function displayImage20() {
  //<Image source={{uri: image20}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 19) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage20ZoomIn(true)}>
          <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image20ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage20ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={require('src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  //}
}

// REAL CODE IS BELOW!!!
if (note.imageRefs.length > 0) {
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
}
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


function displayImage1() {
  //<Image source={{uri: image1}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 0) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
          <Image source={{uri: image1}} style={styles.noteImage} />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[0].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={image1ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image1}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage2() {
  //<Image source={{uri: image2}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 1) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage2ZoomIn(true)}>
          <Image source={{uri: image2}} style={styles.noteImage} />
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
        <Modal visible={image2ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage2ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image2}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
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
   */ /*
}
/*
function displayImage3() {
  if (note.imageRefs.length > 2) {
    //<Image source={{uri: image3}} style={{width: 200, height: 300}} />
    return (
      <View>
        <TouchableOpacity onPress={() => setImage3ZoomIn(true)}>
          <Image source={{uri: image3}} style={styles.noteImage} />
        </TouchableOpacity>
        {isDeleteMedia ? (
          <CheckBox
            boxType={'square'}
            label=""
            value={agree}
            onChange={() => (
              selectImageToDelete(note.imageRefs[2].imageRef), setAgree(true)
            )}
          />
        ) : null}
        <Modal visible={image3ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage3ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image3}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage4() {
  //<Image source={{uri: image4}} style={{width: 200, height: 300}} />;
  if (note.imageRefs.length > 3) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage4ZoomIn(true)}>
          <Image source={{uri: image4}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image4ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage4ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image4}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage5() {
  //<Image source={{uri: image5}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 4) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage5ZoomIn(true)}>
          <Image source={{uri: image5}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image5ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage5ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image5}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage6() {
  //<Image source={{uri: image6}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 5) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage6ZoomIn(true)}>
          <Image source={{uri: image6}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image6ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage6ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image6}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage7() {
  //<Image source={{uri: image7}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 6) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage7ZoomIn(true)}>
          <Image source={{uri: image7}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image7ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage7ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image7}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage8() {
  //<Image source={{uri: image8}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 7) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage8ZoomIn(true)}>
          <Image source={{uri: image8}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image8ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage8ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image8}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage9() {
  //<Image source={{uri: image9}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 8) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage9ZoomIn(true)}>
          <Image source={{uri: image9}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image9ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage9ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image9}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage10() {
  //<Image source={{uri: image10}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 9) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage10ZoomIn(true)}>
          <Image source={{uri: image10}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image10ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage10ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image10}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage11() {
  // <Image source={{uri: image11}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 10) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage11ZoomIn(true)}>
          <Image source={{uri: image11}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image11ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage11ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image11}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage12() {
  //<Image source={{uri: image12}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 11) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage12ZoomIn(true)}>
          <Image source={{uri: image12}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image12ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage12ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image12}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage13() {
  //<Image source={{uri: image13}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 12) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage13ZoomIn(true)}>
          <Image source={{uri: image13}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image13ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage13ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image13}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage14() {
  //<Image source={{uri: image14}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 13) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage14ZoomIn(true)}>
          <Image source={{uri: image14}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image14ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage14ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image14}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage15() {
  //<Image source={{uri: image15}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 14) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage15ZoomIn(true)}>
          <Image source={{uri: image15}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image15ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage15ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image15}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage16() {
  //<Image source={{uri: image16}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 15) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage16ZoomIn(true)}>
          <Image source={{uri: image16}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image16ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage16ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image16}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage17() {
  //<Image source={{uri: image17}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 16) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage17ZoomIn(true)}>
          <Image source={{uri: image17}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image17ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage17ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image17}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage18() {
  //<Image source={{uri: image18}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 17) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage18ZoomIn(true)}>
          <Image source={{uri: image18}} style={styles.noteImage} />
        </TouchableOpacity>

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
        <Modal visible={image18ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage18ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image18}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage19() {
  //<Image source={{uri: image19}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 18) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage19ZoomIn(true)}>
          <Image source={{uri: image19}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image19ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage19ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image19}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function displayImage20() {
  //<Image source={{uri: image20}} style={{width: 200, height: 300}} />
  if (note.imageRefs.length > 19) {
    return (
      <View>
        <TouchableOpacity onPress={() => setImage20ZoomIn(true)}>
          <Image source={{uri: image20}} style={styles.noteImage} />
        </TouchableOpacity>
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
        <Modal visible={image20ZoomIn === true} animated>
          <View style={styles.modalExitButton}>
            <TouchableOpacity onPress={() => setImage20ZoomIn(false)}>
              <Icons icon={'exit'} size={33} />
            </TouchableOpacity>
          </View>
          <View style={styles.noteImageModalContainer}>
            <View style={styles.modalImageContainer}>
              <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                doubleTapDelay={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image source={{uri: image20}} style={styles.modalImage} />
              </ReactNativeZoomableView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
    return (
    <ScrollView style={styles.noteImageContainer}>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage1()}</View>
        {note.numImages > 1 ? <View>{displayImage2()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage3()}</View>
        {note.numImages > 3 ? <View>{displayImage4()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage5()}</View>
        {note.numImages > 5 ? <View>{displayImage6()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage7()}</View>
        {note.numImages > 7 ? <View>{displayImage8()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage9()}</View>
        {note.numImages > 9 ? <View>{displayImage10()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage11()}</View>
        {note.numImages > 11 ? <View>{displayImage12()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage13()}</View>
        {note.numImages > 13 ? <View>{displayImage14()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage15()}</View>
        {note.numImages > 15 ? <View>{displayImage16()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage17()}</View>
        {note.numImages > 17 ? <View>{displayImage18()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage19()}</View>
        {note.numImages > 19 ? <View>{displayImage20()}</View> : null}
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
}*/

/*
USE THIS WHEN TESTING THE STYLING OF NOTE MEDIA!!!
  function displayImage1() {
    //<Image source={{uri: image1}} style={{width: 20, height: 300}} />
    //if (note.imageRefs.length > 0) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef1 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef1?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Modal visible={image1ZoomIn === true} animated>
              <View style={styles.modalExitButton}>
                <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                  <Icons icon={'exit'} size={33} />
                </TouchableOpacity>
              </View>
              <View style={styles.noteImageModalContainer}>
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
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage2() {
    //<Image source={{uri: image2}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 1) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef2 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef2?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Modal visible={image1ZoomIn === true} animated>
              <View style={styles.modalExitButton}>
                <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                  <Icons icon={'exit'} size={33} />
                </TouchableOpacity>
              </View>
              <View style={styles.noteImageModalContainer}>
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
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
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
}
function displayImage3() {
  //if (note.imageRefs.length > 2) {
  //<Image source={{uri: image3}} style={{width: 200, height: 300}} />
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef3 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef3?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage4() {
  //<Image source={{uri: image4}} style={{width: 200, height: 300}} />;
  //if (note.imageRefs.length > 3) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef4 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef4?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage5() {
  //<Image source={{uri: image5}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 4) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef5 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef5?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage6() {
  //<Image source={{uri: image6}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 5) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef6 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef6?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage7() {
  //<Image source={{uri: image7}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 6) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef7 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef7?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage8() {
  //<Image source={{uri: image8}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 7) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef8 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef8?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage9() {
  //<Image source={{uri: image9}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 8) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef9 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef9?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage10() {
  //<Image source={{uri: image10}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 9) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef10 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef10?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage11() {
  // <Image source={{uri: image11}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 10) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef11 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef11?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage12() {
  //<Image source={{uri: image12}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 11) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef12 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef12?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage13() {
  //<Image source={{uri: image13}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 12) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef13 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef13?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage14() {
  //<Image source={{uri: image14}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 13) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef14 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef14?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage15() {
  //<Image source={{uri: image15}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 14) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef15 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef15?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage16() {
  //<Image source={{uri: image16}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 15) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef16 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef16?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage17() {
  //<Image source={{uri: image17}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 16) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef17 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef17?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage18() {
  //<Image source={{uri: image18}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 17) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef18 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef18?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
function displayImage19() {
  //<Image source={{uri: image19}} style={{width: 200, height: 300}} />
  // if (note.imageRefs.length > 18) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef19 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef19?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  // }
}
function displayImage20() {
  //<Image source={{uri: image20}} style={{width: 200, height: 300}} />
  //if (note.imageRefs.length > 19) {
  return (
    <View>
      {isDeleteMedia ? (
        <View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              fillColor={'#26660b'}
              label=""
              value={agree}
              ref={(ref: any) => (bouncyCheckboxRef20 = ref)}
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => (
              selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef20?.onPress()
            )}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
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
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image
              source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
              style={styles.noteImage}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  //}
}
 */
