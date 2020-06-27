import React from 'react';
import {
  Button, Text
} from 'react-native';
import { gql } from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const CUSTOMER_QUERY = gql`
query customer(
    $selectedStore: Int!
  ) {
      customer(
        selectedStore: $selectedStore
      ) {
          email
          firstname
      }
  }
`;

const Account = ({navigation}) => {

    const {data} = useQuery(CUSTOMER_QUERY, {variables: {selectedStore: 1}});
    console.log("data: "+data);
    return (
        <>
          <Text>Account Page</Text>
        </>
    );
};

export default Account;
