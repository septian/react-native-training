import React from 'react';
import {
  Button, Text
} from 'react-native';

const Home = ({navigation}) => {
    return (
      <>
        <Text>Welcome To The Apps</Text>
        <Button title="Go To Login" onPress={() => navigation.navigate('Login')} />
      </>
    );
};

export default Home;
