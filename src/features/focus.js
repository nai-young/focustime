import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/roundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  const handleOnPressAdd = () => addSubject(subject);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          onChangeText={setSubject}
          style={styles.textInput}
        />
        <RoundedButton title="+" size={50} onPress={handleOnPressAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
