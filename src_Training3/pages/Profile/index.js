import React from 'react';
import {
  SafeAreaView, ScrollView, Text, Button, FlatList, View
} from 'react-native';

const Profile = ({navigation}) => {
  function Item ({title}) {
    return (
      <View>
        <Text>
          {title}
        </Text>
      </View>
    );
  }
  const dataSource =[
    {
      __typename: "DataNotification",
      content: "Template 1",
      createdAt: "2020-06-13 05:01:04",
      entityID: 1,
      subject: "Welcome to Main Website",
      unread: false
    },
    {
      __typename: "DataNotification",
      content: "Template 2",
      createdAt: "2020-06-13 05:01:04",
      entityID: 2,
      subject: "Welcome to Main Website",
      unread: false
    },
    {
      __typename: "DataNotification",
      content: "Template 3",
      createdAt: "2020-06-13 05:01:04",
      entityID: 3,
      subject: "Welcome to Main Website",
      unread: false
    },
    {
      __typename: "DataNotification",
      content: "Template 4",
      createdAt: "2020-06-13 05:01:04",
      entityID: 4,
      subject: "Welcome to Main Website",
      unread: false
    }
  ];
  const listData = () => {
    return (
      <FlatList
        data={dataSource}
        renderItem={({item}) => <Item title={item.content} />}
        keyExtractor={(item) => item.entityID}
      />
    )
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {listData()}
        <Text>This is Profile Page</Text>
        <Button title="Go Back" onPress={()=>navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
