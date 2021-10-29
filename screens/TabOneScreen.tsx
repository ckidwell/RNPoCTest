import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState(
    'Type in the input above and press submit to update this text'
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Input
        label="Test Text Input area:"
        value={text1}
        onChangeText={setText1}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />

      <Button
        title="Submit"
        onPress={() => {
          console.log('Text 1 value is : ' + text1);
          setText2(text1);
        }}
      />
      <Text
        testID="appiumWontFindThisOnAndroid"
        accessibilityLabel="appiumWillFindThisOnAndroid"
      >
        {text2}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    width: '80%',
  },
});
