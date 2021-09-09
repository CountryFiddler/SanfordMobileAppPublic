import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenHeader: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  navigatorScreenHeader: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '5%',
  },
  customerInfoContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },
  utilityInfoContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '1.5%',
    marginRight: '1.5%',
    borderRadius: 20,
  },

  infoChildContainer: {
    margin: '5%',
    marginLeft: '1.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 17,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '12%',
  },
  navigatorScreenTitle: {
    //flex: 1,
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 17,
  },
  textInputContainer: {
    marginTop: '5%',
    marginBottom: '0%',
    marginRight: '5%',
    marginLeft: '1.5%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 17,
    alignItems: 'flex-start',

    height: '10%',
  },
  noteMessageInputContainer: {
    marginTop: '5%',
    marginBottom: '0%',
    marginRight: '5%',
    marginLeft: '1.5%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 17,
    height: '20%',
  },
  textInput: {
    fontSize: 17,
    marginRight: '5%',
    marginTop: '-5%',
    marginLeft: '1%',
  },
  labelText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
  buttonText: {
    paddingTop: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    //marginBottom: '7%',
    paddingBottom: 10,
    // marginLeft: '3%',
    //marginRight: '5%',
    //width: '90%',
    //borderBottomWidth: 3,
    //borderBottomColor: '#26660b',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },
  addPhotoButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '-13%',
    paddingBottom: 10,
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },
  editPhotoButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    //marginTop: '5%',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },
  addNoteInfoButtonContainer: {
    height: '75%',
  },
  submitDataButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 25,
    marginBottom: '7%',
    paddingBottom: 50,
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },

  utilityButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '5%',
    height: '17%',

    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },

  generalButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 20,
  },

  longDivider: {
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    marginLeft: '1.5%',
    marginRight: '1.5%',
    borderRadius: 20,
  },
  addTextFieldDivider: {
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    marginLeft: '2%',
    marginRight: '10%',
  },
  numberText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
  icons: {
    marginRight: '2%',
  },
  addInfoScreenHeader: {
    alignItems: 'center',
    justifyContent: 'space-around',
    //flexDirection: 'row',
    width: '100%',
    marginTop: '5%',
  },
  addSolenoidValveDataScreenHeader: {
    alignItems: 'center',
    justifyContent: 'space-around',
    //flexDirection: 'row',
    width: '100%',
    //marginTop: '5%',
  },
  iconHeader: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addInfoScreenTitle: {
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addInfoContainer: {
    height: '80%',
  },
  cancelButtonText: {
    color: '#cc0000',
    fontSize: 20,
  },
  submitButtonText: {
    color: '#26660b',
    fontSize: 20,
  },
  customerFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  utilityFooter: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: '3%',
    width: '90%',
  },

  utilityNavigatorContainer: {
    height: '65%',
    //justifyContent: 'space-around',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderRadius: 7,
  },

  navigatorItemView: {
    //backgroundColor: '#26660b',
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    height: 70,
    //width: '90%',
    flexDirection: 'row',
    //marginBottom: 10,
    //justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //marginLeft: '2%',
    //flex: 1,
  },
  navigatorItemText: {
    color: 'black',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  navigatorNoResultView: {
    alignSelf: 'center',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  navigatorNoResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  noteHeaderBar: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginLeft: '5%',
    // marginRight: '5%',
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft: 'auto',
  },
  noteTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  noteTextContainer: {
    height: '10%',
    marginTop: '5%',
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderRadius: 20,
  },
  noteText: {
    marginTop: '2%',
    marginBottom: '2%',
    fontSize: 16,
    textAlign: 'left',
  },
  imageDisplayContainer: {
    height: '40%',
  },
  editIcon: {
    //flex: 1,
    resizeMode: 'contain',
    marginRight: '4%',
    //alignItems: 'flex-end',
    //resizeMode: 'contain',
  },
  noteImageContainer: {
    //marginTop: '2%',
  },
  noteImageSubContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  deleteNoteImageSubContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    paddingLeft: 12,
    alignItems: 'center',
  },
  noteImage: {
    width: 175,
    height: 175,
    borderRadius: 10,
  },
  noteImageModalContainer: {
    flex: 1,
    backgroundColor: 'black',
    //marginTop: '10%',
    // height: '100%',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImageContainer: {
    //marginTop: '20%',
    height: 500,
    //width: 400,
    //marginBottom: '30%',
  },
  modalImage: {
    width: 400,
    height: 400,
    resizeMode: 'center',
  },
  modalExitButton: {
    backgroundColor: 'black',
    paddingTop: 20,
    paddingRight: 20,
    //position: 'relative',
    //marginBottom: '5%',
    //justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // paddingBottom: 100,
    //width: '90%',
    //height: 100,
  },
  noteMessageLabel: {
    //marginTop: '10%',
    //marginBottom: '10%',
    marginTop: '2%',
    marginLeft: '2%',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
  noteTitleLabel: {
    marginTop: '2%',
    marginLeft: '2%',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  container: {
    // Dont have flex 1, this messes up Android
    //flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6',
   // height: '50%',
    //marginTop: '2%',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  editNoteProgressBarContainer: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNoteProgressBarContainer: {
    //marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    color: '#26660b',
  },
  imageBox: {
    width: 300,
    height: 300,
  },
  spaceHolder: {
    marginBottom: '20%',
  },
  dividerWithSpacing: {
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '2%',
    borderRadius: 20,
  },
  checkBoxContainer: {

    alignItems: 'flex-end',
    width: 195,
  },
  checkBox: {
    alignItems: 'flex-end',
    width: 190,
  },
  deleteImageDisplay: {
    width: 100,
  },
  editNotePopUpButtonContainer: {
    flexDirection: 'row',
  },
  editNotePopUpButton: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  deleteContentScreenTitle: {


    justifyContent: 'center',
    alignItems: 'center',
    //width: '80%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  deleteContentScreenTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //flex: 1,
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    alignItems: 'center',

  },
});
