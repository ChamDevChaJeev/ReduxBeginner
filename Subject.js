import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { connect } from "react-redux";

const Stack = createNativeStackNavigator();


class Subject extends Component {
  render(){
  return (
    <View style={styles.container}>
    <Text>Select Subjects Below!</Text>

    {
      this.props.subjects.all_subjects.map((subject, index) => (
        <Button
          key={ subject }
          title={ `Add ${ subject }` }
          onPress={() =>
            this.props.addSubject(index)
          }
        />
      ))
    }

    <Button
      title="Back to home"
      onPress={() =>
        this.props.navigation.navigate('Home')
      }
    />
  </View>
  );
  }
}
const mapStateToProps = (state) => {
  const { subjects } = state
  return { subjects }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default connect (mapStateToProps) (Subject)
