import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const CATEGORY_QUERY = gql`
query getCategoryById($id: String!) {
    categoryList(filters: { ids: { eq: $id } }) {
        id
        name
        image_path
        description
        products {
            items {
                id
                name
                url_key
                description {
                    html
                }
                small_image {
                    url
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
}
`;

const Category = ({navigation}) => {
    const {data} = useQuery(CATEGORY_QUERY, {variables: {id: '533'}});
    console.log("data: "+data);
    const products = data.categoryList[0].products.items;
  console.log("datass: "+products);
  return (
    <ScrollView>
        {products.map((product) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', {url_key: product.url_key})}
            >
                <Text>{product.name}</Text>
            </TouchableOpacity>
        ))}
        <Text>sd</Text>
    </ScrollView>
  );
};

export default Category;
