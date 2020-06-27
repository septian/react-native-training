import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const PRODUCT_QUERY = gql`
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

const Detail = ({route}) => {
    const {url_key} = route.params;
    console.log("key: "+url_key);
    const {data} = useQuery(PRODUCT_QUERY, {variables: {urlKey: url_key, selectedStore: 1}});
    console.log("data prsoddd: "+data)
    const product = data.products.items[0];
    console.log("data prodss: "+product.name)
    // const product = data.products.items[0];
    return (
        <ScrollView>
            <Text>{product.name}</Text>
            <Text>{product.sku}</Text>
        </ScrollView>
    );
};

export default Detail;
