/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import stores from './../stores';
import Category from './pages/Category';
import Account from './pages/Account';
import Notification from './pages/Notification';
import Listing from './pages/Listing';
import Detail from './pages/Detail';
import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'https://lottemart.testingnow.me/graphql',
  cache: new InMemoryCache(),
});
const Stack = createStackNavigator();
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={stores}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Listing" component={Listing} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
