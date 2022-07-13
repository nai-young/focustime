import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/timer';
import { colors } from './src/utils/colors';
import { FocusHistory } from './src/features/focusHistory';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { useKeepAwake } from 'expo-keep-awake';

export default function App() {
  useKeepAwake();
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  const handleClearSubject = () => setCurrentSubject(null);

  const handleOnTimerEnd = (subject) => setHistory([...history, subject]);

  return (
    // SafeAreaView automatically applies padding
    // to reflect the portion of the view that is not covered
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={handleOnTimerEnd}
          clearSubject={handleClearSubject}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding applies to Android as SafeAreaView doesn't works on Android
    // padding doesn't applies to IOS as SafeAreaView is applied
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
