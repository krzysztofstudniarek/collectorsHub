import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome Collector!',
    };

    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <View>
          <Button title="My Collections" onPress={this._showCollections} />
          <Button title="New Collection" onPress={this._showNewCollectionForm}/>
          <Button title="Sign Out" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showCollections = () => {
      this.props.navigation.navigate('Collections');
    };
  
    _showNewCollectionForm = () => {
      this.props.navigation.navigate('NewCollectionForm');
    }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
}