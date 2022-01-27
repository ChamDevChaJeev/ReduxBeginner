import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { connect } from "react-redux";

const Stack = createNativeStackNavigator();


class Home extends Component {
  render(){
  return (
    <View style={styles.container}>
        //<Text>You have { this.props.all_subjects.current.length } subjects.</Text>
        <Button
          title="Select more subjects"
          onPress={() =>
            this.props.navigation.navigate('Subjects')
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
export default connect(mapStateToProps) (Home)
