import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from "react-native-elements";

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Review Jobs",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => { navigation.navigate("Settings");}}
        backgroundColor = "rgba(0,0,0,0)"
        color= "rgba(0,122,,255,1"
      />
    ),
    style: {
      paddingTop: Platform.OS === 'ios' ? 0 : 24
    }
  });

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}

export default ReviewScreen;
