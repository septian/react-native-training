import React from 'react';
import {
  Text, Button
} from 'react-native';

const Profile = ({navigation}) => {
    return (
      <>
        <Text>This is Profile Page</Text>
        <Button title="Go Back" onPress={()=>navigation.goBack()} />
      </>
    );
};

export default Profile;
