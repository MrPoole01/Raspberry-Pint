import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, Modal, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegList  from './KegList'
import AddButton from './AddButton'
const baseURL = 'https://raspberry-pint-api.herokuapp.com'

 export default class OnTap extends Component {

  constructor(props){
   super(props);
   this.state = {
     active: false,
     kegAndBeer: []
   }
   this.newBeer = this.newBeer.bind(this);
 }

   async componentDidMount(){
     const kegAndBeerResponse = await fetch(`${baseURL}/keg-and-beer`)
     const kegAndBeerJSON  = await kegAndBeerResponse.json()
     this.setState({kegAndBeer: kegAndBeerJSON})
   }

 newBeer (newBeer) {
   console.log(newBeer);
   let beer = this.state.kegAndBeer
   beer.push(newBeer)
   this.setState({kegAndBeer: beer})
 }
 setCurrentReadOffset = (event) => {
   let itemHeight = 402;
   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
 }

 deleteKeg(id) {
   let newKegandBeer = this.state.kegAndBeer.filter(keg => {
     return keg.id != id
   })
   fetch('https://raspberry-pint-api.herokuapp.com/kegs-by-id/' + id, {
     method: 'DELETE',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       id: this.props.KegID
     })
   })
   .then(response => {
     this.setState({kegAndBeer: newKegandBeer})
   })
 }


 render() {
   return (
     <Container>
       <Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset}>
           {this.state.kegAndBeer.map(kegWithItsBeer => {
               return(<KegList deleteKeg={this.deleteKeg.bind(this)} key={kegWithItsBeer.id} BeerID={kegWithItsBeer.beer_id} BeerDescription={kegWithItsBeer.description} KegID={kegWithItsBeer.id} KegSizeLiters={kegWithItsBeer.keg_size_liters} litersUsed={kegWithItsBeer.liters_used} beerName={kegWithItsBeer.name} beerPhoto={kegWithItsBeer.photo}  servingTemp={kegWithItsBeer.serving_temp}  kegTemp={kegWithItsBeer.temperature}/>);
           })}
       </Content>
      <AddButton beers={this.props.beers} newBeer={this.newBeer}/>
    </Container>
   );
 }
}
