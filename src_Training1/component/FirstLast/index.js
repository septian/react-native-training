import React, { useState } from 'react';
import {
  Text,
  TextInput
} from 'react-native';
import styles from './style';

const FirstLast = ({callbacks}) => {
    return (
      <>
        <Text 
          style={styles.title}
        >
          Username
        </Text>
        <TextInput 
          style={styles.input}
          onChangeText={text => callbacks(text)}
        />
        <Text style={styles.title}>
          Password
        </Text>
        <TextInput 
          style={styles.input}
          secureTextEntry
        />
      </>
    );
};

export default FirstLast;
