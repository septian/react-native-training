import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import stylesActivity from './style';

const Activity = ({dataActivity}) => {
  const [activity, setActivity] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit = () => {
    const data = {activity, status};
    dataActivity(data);
  };
    return (
      <>
        <Text 
          style={stylesActivity.title}
        >
          Activity
        </Text>
        <TextInput 
          style={stylesActivity.input}
          onChangeText={text => setActivity(text)}
        />
        <Text style={stylesActivity.title}>
          Status
        </Text>
        <TextInput 
          style={stylesActivity.input}
          onChangeText={text => setStatus(text)}
        />
        <TouchableOpacity 
          onPress={() => handleSubmit()}
          style={stylesActivity.button}
        >
            <Text>Submit</Text>
        </TouchableOpacity>
      </>
    );
};

export default Activity;
