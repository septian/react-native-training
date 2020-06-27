import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const CATEGORY_QUERY = gql`
 query {
    categoryList {
      id
      name
      children {
        id
        name
        children {
          id
          name
          children {
            id
            name
          }
        }
      }
    }
  }
`;

const Category = ({navigation}) => {
    const {data} = useQuery(CATEGORY_QUERY);
  const categories = data.categoryList[0].children;
  console.log("data"+data);
  return (
    <ScrollView>
    {categories.map((catLvl1) => (
        <Text>{catLvl1.name}</Text>
    ))}
    </ScrollView>
  );
};

export default Category;
