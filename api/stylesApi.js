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

  utilityButtonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '5%',
    height: '17%',

    // marginLeft: '3%',
    //marginRight: '5%',
    //width: '90%',
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



    //height: 15,
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
});
