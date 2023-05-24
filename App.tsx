import React from 'react';
// import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import IconFontisto from 'react-native-vector-icons/Fontisto';
// import IconEntypo from 'react-native-vector-icons/Entypo';
//import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Home} from 'src/screens/Home';
import {Login} from 'src/screens/Login';
import SignUp from 'src/screens/SignUp/SignUp';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>HELLOOOO</Text>
          <Login />
          <Home />
          <SignUp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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

export default App;
