import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Right,
  Left,
  Body} from 'native-base';

export default class KegStatus extends Component {
  render() {
    return (

        <Content>
        <Card style={{flex: 1}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'http://blog.patternbank.com/wp-content/uploads/2012/12/vintage-beer-labels-michigan-all-over-beer-02-700x733.jpg'}} />
              <Body>
                <Text>Detroit Premium Beer</Text>
                <Text note>ABV: 12%</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <Image
                source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brewpalacekegbot.com%2Fstatic%2Fimages%2Fkeg%2Ffull%2Fkeg-srm14-3.png&f=1'}}
                style={styles.image}/>
                <Text>KegSizeLiters: {this.props.KegSizeLiters}</Text>
                <Text>litersUsed: {this.props.litersUsed}</Text>
                <Text>kegTemp: {this.props.kegTemp}</Text>
            </Body>
          </CardItem>

            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="beer" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image: {

    height:200,
    width: 200,
    marginLeft: 80,
    marginTop: 20,
  }
});
