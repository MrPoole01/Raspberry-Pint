import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, Modal, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegList  from './KegList'
import AddButton from './AddButton'


export default class OnTap extends Component {

  constructor(props){
   super(props);
   this.state = {
     active: false,
     beers: props.beers
   }
 }

 setCurrentReadOffset = (event) => {
   let itemHeight = 402;
   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
   // this.state.dataset.setReadOffset(currentItemIndex);
 }


 render() {
   return (
     <Container>
       <Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset}>
           {this.props.beers.map(beer => {
               return(<KegList key={beer.id} name={beer.name} description={beer.description} servingTemp={beer.serving_temp}/>);
           })}
       </Content>
      <AddButton beers={this.props.beers}/>
    </Container>
   );
 }
}
