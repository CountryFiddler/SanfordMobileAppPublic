import { StyleSheet } from "react-native";

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
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 17,
  },
  labelText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
  buttonText: {
    marginTop: '15%',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    marginBottom: '7%',
    paddingBottom: 10,
   // marginLeft: '3%',
    //marginRight: '5%',
    //width: '90%',
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },

  submitDataButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 25,
    marginBottom: '7%',
    paddingBottom: 10,
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

    marginBottom: '5%',

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
});
