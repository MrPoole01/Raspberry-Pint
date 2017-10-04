
import React, { Component } from 'react';
import {StyleSheet, Image, View, } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Container, Title, Content, Item, FooterTab, Footer, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Bubbles extends Component {

    render() {


		return (
      <Animatable.View style={styles.contain}>

          <Animatable.Text
            animation='fadeOutUpBig'
            delay= {1000}
            iterationCount="infinite"
            direction="normal"
            // easing="ease-in-out-quad"
            style={{  color: 'white', fontSize: 8, marginTop: 640 }}>
              ●
          </Animatable.Text>
          <Animatable.Text
          animation='fadeOutUpBig'
          delay= {800}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out-cubic"
          style={{ marginLeft: 50, color: 'white', fontSize: 17, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={1304}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 40, color: 'white', fontSize: 15, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={4000}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 10, color: 'white', fontSize: 20, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={2050}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 20, color: 'white', fontSize: 2, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={8000}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out-quad"
          style={{ textAlign: 'right', color: 'white', fontSize: 5, marginTop: 570 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={7324}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-in-out-quad"
          style={{ marginLeft: 22, color: 'white', fontSize: 10, marginTop: 640 }}>
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={9102}
          iterationCount="infinite"
          direction="normal"
          easing="ease-in-out-quad"
          style={{  color: 'white', fontSize: 8, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={1678}
          iterationCount="infinite"
          direction="normal"
          easing="ease-out-cubic"
          style={{ marginLeft: 50, color: 'white', fontSize: 17, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={676}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 40, color: 'white', fontSize: 15, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={238}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 10, color: 'white', fontSize: 20, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={50}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 20, color: 'white', fontSize: 2, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={397}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ textAlign: 'right', color: 'white', fontSize: 5, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={1030}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-in-out-quad"
          style={{ marginLeft: 22, color: 'white', fontSize: 10, marginTop: 640 }}>
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay= {1000}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-in-out-quad"
          style={{  color: 'white', fontSize: 8, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay= {800}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out-cubic"
          style={{ marginLeft: 88, color: 'white', fontSize: 17, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={1304}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 15, color: 'white', fontSize: 15, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={4000}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 13, color: 'white', fontSize: 20, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={2050}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 45, color: 'white', fontSize: 2, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={8000}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out-quad"
          style={{ textAlign: 'left', color: 'white', fontSize: 5, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={7324}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-in-out-quad"
          style={{ marginLeft: 20, color: 'white', fontSize: 10, marginTop: 640 }}>
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={9102}
          iterationCount="infinite"
          direction="normal"
          easing="ease-in-out-quad"
          style={{  color: 'white', fontSize: 8, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={1678}
          iterationCount="infinite"
          direction="normal"
          easing="ease-out-cubic"
          style={{ marginLeft: 78, color: 'white', fontSize: 17, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={676}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 66, color: 'white', fontSize: 15, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={238}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 24, color: 'white', fontSize: 20, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUpBig'
          delay={56}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ marginLeft: 5, color: 'white', fontSize: 2, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={497}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-out"
          style={{ textAlign: 'center', color: 'white', fontSize: 7, marginTop: 640 }}>
            ●
        </Animatable.Text>
        <Animatable.Text
          animation='fadeOutUp'
          delay={130}
          iterationCount="infinite"
          direction="normal"
          // easing="ease-in-out-quad"
          style={{ marginLeft: 33, color: 'white', fontSize: 3, marginTop: 640 }}>
        </Animatable.Text>

      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: -50

  },
});
