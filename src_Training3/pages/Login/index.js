import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import stylesLogin from './style';
import {mutate} from '../../../services/graphql/api';
import { gql } from 'apollo-boost';
import { storeData } from '../../component/LocalStorage';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const postLogin = () => {
        let schema = gql`
            mutation generateCustomerTokenCustom(
                $email: String!,
                $password: String!
            ){
                generateCustomerTokenCustom(
                    username: $email,
                    password: $password
                ){
                    token
                }
            }
        `;
        let params = {email: username, password: password};
        mutate(schema,params).then((res)=> {
            const {data} = res;
            const user = data.generateCustomerTokenCustom;
            console.log(user.token);
            if(user.token) {
                storeData(user.token);
                navigation.navigate('Profile');
            }
        });
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text 
                        style={stylesLogin.title}
                        >
                        Email
                        </Text>
                        <TextInput 
                        style={stylesLogin.input}
                        onChangeText={(text)=>{setUsername(text)}}
                        />
                        <Text style={stylesLogin.title}>
                        Password
                        </Text>
                        <TextInput 
                        style={stylesLogin.input}
                        onChangeText={(text)=>{setPassword(text)}}
                        secureTextEntry
                        />
                        <TouchableOpacity 
                        onPress={postLogin}
                        style={stylesLogin.button}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
      </>
    );
};

export default Login;
