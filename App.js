import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import Subject from "./Subject";
import subjectsReducer from "./SubjectsReducer";
import { createStore } from "redux";
import {Provider} from "react-redux"



const Stack = createNativeStackNavigator();
const store = createStore(subjectsReducer);

class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Subjects"
          component={Subject}
          options={{ title: 'Welcome again!!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
