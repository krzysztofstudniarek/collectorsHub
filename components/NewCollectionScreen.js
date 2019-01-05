import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form;

const Collection = t.struct({
  name : t.String,
  type : t.enums({
    'BOOK': 'Books',
    'COIN': 'Coins',
    'OTHER': 'Other'
  })
});

export default class CollectionsScreen extends React.Component {
    static navigationOptions = {
      title: 'New Collection',
    };

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <View>
          <Text>Create new Collection</Text>
          <Form 
                ref={c => this._form = c} 
                type={Collection} />
          <Button title='Create' />
        </View>
      );
    }
  }