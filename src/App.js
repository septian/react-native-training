/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  ScrollView,
  View,
} from 'react-native';
import styles from './asset/style';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text 
            style={styles.title}
          >
            Username
          </Text>
          <TextInput 
            style={styles.input}
          />
          <Text style={styles.title}>
            Password
          </Text>
          <TextInput 
            style={styles.input}
            secureTextEntry
          />
          <Button 
            style={styles.button}
            title="Login"
            color="red"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
