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
import AsyncStorage from '@react-native-community/async-storage';
import {mutate} from '../../../services/graphql/api';
import {connect} from 'react-redux';
import AUTH_ACTION from '../../../stores/actions/auth';
import { gql } from 'apollo-boost';
//import { storeData } from '../../component/LocalStorage';

const Login = ({navigation, setLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    const storeData = async (value) => {
        try {
            let dataFormat = {
                type: 'signin',
                token: value,
            }
            const jsonValue = JSON.stringify(dataFormat);
            await AsyncStorage.setItem('token',jsonValue);
        } catch (e) {
            console.log(e);
        }
    };
    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('token')
        } catch (e) {
            console.log(e)
        }
        console.log('done.');
    }
    const postLogin = () => {
        let params = {email: username, password: password};
        mutate(schema,params).then((res)=> {
            const {data} = res;
            const user = data.generateCustomerTokenCustom;
            console.log("token: "+user.token);
            if(user.token) {
                storeData(user.token);
                let dataFormat = {
                    type: 'signin',
                    token: user.token,
                }
                setLogin(dataFormat);
                navigation.navigate('Profile');
            }
        });
    };
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

const mapDispatchToProps = (dispatch) => ({
    setLogin: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Login);
