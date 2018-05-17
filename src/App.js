/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
      <View ref='Main' style={{ flex: 1, flexDirection: 'column', backgroundColor: '#000'}} >
        <View ref='First' style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', margin: 40, borderColor: 'yellow', borderWidth: 1 }} >
          <View style={{ height: 50, width: 50, backgroundColor: 'powderblue' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'skyblue' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View ref='Second' style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', margin: 40, borderColor: 'red', borderWidth: 1 }} >
          <View style={{ height: 50, width: 50, backgroundColor: 'powderblue' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'skyblue' }} />
          <View style={{ height: 50, width: 50, backgroundColor:'steelblue' }} />
        </View>

    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontSize: 50
  },
  smallRed: {
    color: 'red',
    fontSize: 20
  }
});
