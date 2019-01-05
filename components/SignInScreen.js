import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import t from 'tcomb-form-native';
const Form = t.form.Form;

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './../aws-exports';

Amplify.configure(aws_exports);

const User = t.struct({
    username: t.String,
    password: t.String,
  });

const Options = {
    auto: 'placeholders',
    fields: {
      password: {
        password: true,
        secureTextEntry: true
      }
    }
  };

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Form 
                ref={c => this._form = c} 
                type={User}
                options={Options} />
                <Button title="Sign in!" onPress={this._signInAsync} />
                <DropdownAlert ref={ref => this.dropdown = ref} />
            </View>
        );
    }
  
    _signInAsync = async () => {
        const value = this._form.getValue();
        Auth.signIn(value.username, value.password)
            .then(user => {
                AsyncStorage.setItem('userToken', user);
                this.props.navigation.navigate('App');
            })
            .catch(error => {
                this.dropdown.alertWithType('error', 'Error', error.message);
            });

    };
  }