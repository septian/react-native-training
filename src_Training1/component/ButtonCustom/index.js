import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './style';

const ButtonCustom = () => {
    return (
      <>
        <TouchableOpacity 
          style={styles.button}
        >
            <Text>Login</Text>
        </TouchableOpacity>
      </>
    );
};

export default ButtonCustom;
