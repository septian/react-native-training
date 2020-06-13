/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './asset/style';
import FirstLast from './component/FirstLast';
import ButtonCustom from './component/ButtonCustom';

const App = () => {
  const [username, setUsername] = useState('');
  const getCallbacks = (value) => {
    console.log(value);
    setUsername(value);
  };
  return (
    <View style={styles.container} >
      <FirstLast callbacks={getCallbacks} />
      <ButtonCustom />
      <Text>username: {username}</Text>
    </View>
  );
};

export default App;
