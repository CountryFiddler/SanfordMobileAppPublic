import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddCustomerScreen from './src/screens/AddCustomerScreen';
import EditCustomerScreen from './src/screens/EditCustomerScreen';
import CustomerScreen from './src/screens/CustomerScreen';
import TimerSelectionScreen from './src/screens/TimerSelectionScreen';
import AddTimerScreen from './src/screens/AddTimerScreen';
import TimerInfoScreen from './src/screens/TimerInfoScreen';
import EditTimerInfoScreen from './src/screens/EditTimerInfoScreen';
import TimerNotesNavigatorScreen from './src/screens/TimerNotesNavigator';
import UtilityNoteScreen from './src/screens/UtilityNoteScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';
import DeleteNoteMediaScreen from './src/screens/DeleteNoteMediaScreen';
//import AddCustomer from './src/components/AddCustomer';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    AddCustomer: AddCustomerScreen,
    EditCustomer: EditCustomerScreen,
    Customer: CustomerScreen,
    TimerSelection: TimerSelectionScreen,
    AddTimer: AddTimerScreen,
    TimerInfo: TimerInfoScreen,
    EditTimer: EditTimerInfoScreen,
    TimerNotesNavigator: TimerNotesNavigatorScreen,
    UtilityNote: UtilityNoteScreen,
    AddNote: AddNoteScreen,
    EditNote: EditNoteScreen,
    DeleteNoteMedia: DeleteNoteMediaScreen,
    //AddCustomerComponent: AddCustomer,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Sanford Irrigation',
    },
  },
);
export default createAppContainer(navigator);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local


import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;*/
