/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [date, setDate] = useState(new Date());

  const backgroundStyle = {
    backgroundColor: '#222',
    flex: 1,
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.pickerContainer}>
        <DatePicker
          androidVariant="nativeAndroid"
          mode={'date'}
          date={new Date(date.toISOString())}
          onDateChange={newDate => {
            setDate(newDate);
          }}
          textColor={'#fff'}
          fadeToColor={'none'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    alignItems: 'center',
  },
});

export default App;
