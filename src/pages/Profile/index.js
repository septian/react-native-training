import React from 'react';
import {
  SafeAreaView, ScrollView, Text, Button, FlatList, View, TouchableOpacity
} from 'react-native';
import { gql } from 'apollo-boost';
import { query } from '../../../services/graphql/api';

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

  let customer_schema = gql`
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
  const customerData = () => {
    let params = {selectedStore: 1};
    query(customer_schema,params).then((res)=> {
        const {data} = res;
        const user = data.customer;
        console.log("email: "+user.email);
        console.log("First Name: "+user.firstname);
    });
  };

  let notification_schema = gql`
  query customerNotificationList {
    customerNotificationList{
          items {
            createdAt
            content
          }
          totalUnread
      }
  }
  `;
  const notificationData = () => {
    query(notification_schema).then((res)=> {
        const {data} = res;
        const data_notification = data.customerNotificationList;
        console.log("total unread: "+data_notification.totalUnread);
    });
  };

  let category_schema = gql`
  {
    categoryList {
      id
      name
      url_key
      url_path
      children {
        id
        name
        url_key
        url_path
        children {
          id
          name
          url_key
          url_path
        }
      }
    }
  }
  `;
  const categoryData = () => {
    query(category_schema).then((res)=> {
        const {data} = res;
        const data_category = data.categoryList[0];
        console.log("cat: "+data_category.children);
    });
  };

  let product_schema = gql`
    query getProduct(
      $urlKey: String!,
      $selectedStore: Int!
      ) {
      products(
        selectedStore: $selectedStore,
        filter: { url_key: { eq: $urlKey } }
        ) {
          items {
              name
              sku
              stock_status
              description {
                  html
              }
              image {
                  url
                  label
              }
              price_range {
                  minimum_price {
                      regular_price {
                          currency
                          value
                      }
                      final_price {
                          currency
                          value
                      }
                  }
              }
          }
      }
    }
  `;
  const productData = () => {
    let params = {urlKey: "migelas-cup-baso-sapi-bag-5x40g", selectedStore: 1};
    query(product_schema,params).then((res)=> {
        const {data} = res;
        const data_product = data.products.items[0];
        console.log("item: "+data_product.name);
    });
  };

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
        <Button title="My Account" onPress={() => navigation.navigate('Account')} />
        <Text></Text>
        <Button title="Notification" onPress={() => navigation.navigate('Notification')} />
        <Text></Text>
        <Button title="Shop" onPress={() => navigation.navigate('Listing')} />

        <TouchableOpacity 
          onPress={customerData}
          >
              <Text>Show Customer Data</Text>
          </TouchableOpacity>

        <TouchableOpacity 
          onPress={notificationData}
          >
              <Text>Show Notification Data</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={categoryData}
            >
                <Text>Show Category Data</Text>
            </TouchableOpacity>

          <TouchableOpacity 
            onPress={productData}
            >
                <Text>Show Product Data</Text>
            </TouchableOpacity>
          
        <Button title="Go Back" onPress={()=>navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
