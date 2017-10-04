
import React, { Component } from 'react';
import {StyleSheet, Image, View, } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Container, Title, Content, Item, FooterTab, Footer, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class Foam extends Component {

    render() {


		return (
      <View style={styles.contain}>
        <Image source={require('../assets/foam.png')}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  contain: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '20%',
    maxHeight: 0,
    marginTop: 50,
    marginLeft: 360,
    zIndex: 2
  },
});
