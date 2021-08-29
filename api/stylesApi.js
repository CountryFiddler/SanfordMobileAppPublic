import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenHeader: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    margin: '5%',
  },
  infoContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#26660b',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    height: '30%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '1.5%',
    marginRight: '1.5%',
  },

  infoChildContainer: {
    margin: '5%',
    marginLeft: '1.5%',
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: '3%',
    //marginRight: '5%',
    width: '90%',
    height: '17%',
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
    marginLeft: '0%',
    marginRight: '10%',
  },
  numberText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
