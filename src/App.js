/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Login from './screens/Login';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component<Props> {
  render() {

    // flex em relação a você mesmo
    // flexDirection em relação aos filhos
    // justifyContent em relação aos filhos
    // alignItems em relação aos filhos

    return (
      <Login email = 'myemail@email.com'/>
    );
  }
}
