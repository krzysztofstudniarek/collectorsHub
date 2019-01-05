import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class CollectionsScreen extends React.Component {
    static navigationOptions = {
      title: 'My Collections',
    };
  
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <View>
          <Text>Those are your collections</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {

    },
  });