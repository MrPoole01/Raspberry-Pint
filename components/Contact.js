import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';


export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Grid>
          <Col>
          <Row>
            <Content>
              <Card style={{flex: 0, height:180}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqjAAAAJDAyN2UyODAwLTk4MDUtNGIzYi04ZDFkLTMyMjhiNDY2NjA5Mw.jpg'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold'}}>Hyunmo Yang</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>

                    <Text style={{fontSize:12}}>
                    <Icon name= "logo-github" />
                          /yhmgood0130
                    </Text>
                    <Text style={{fontSize:12}}>
                    <Icon name= "logo-linkedin" />
                       /in/hyunmoyang/
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Row>
          <Row>
            <Content>
              <Card style={{flex: 0, height:180}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAAnGAAAAJDlmOWEyYTgyLTEwZGMtNDRjNS1hNDI5LTFjNTdiMTFkYjAwNQ.jpg'}} />
                    <Body>
                      <Text style={{fontWeight: 'bold'}}>Eric Wallen</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>

                    <Text style={{fontSize:12}}>
                    <Icon name= "logo-github" />
                          /ericwallen
                    </Text>
                    <Text style={{fontSize:12}}>
                    <Icon name= "logo-linkedin" />
                       /in/ericwallen/
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Row>
          <Row>
            <Content>
              <Card style={{flex: 0, height:169}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAAzdAAAAJDZmN2YzZTcxLTE3YTktNDJhMy1hMzgzLWY4MzliZDNiNDRhMQ.jpg'}} />
                    <Body>
                      <Text style={{ fontWeight: 'bold' }}>Recardo Poole</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{fontSize:12}}>
                    <Icon name= "logo-github" />
                      /MrPoole01
                    </Text>
                    <Text style={{fontSize:12}}>
                    <Icon name= "logo-linkedin" />
                      /in/recardo-poole/
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Row>
          </Col>
          <Col>
              <Row>
                <Content>
                  <Card style={{flex: 0, height:269}}>
                    <CardItem>
                      <Left>
                        <Thumbnail style={{ height: 70, width: 70, borderRadius:35 }} source={{uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAAuIAAAAJDZlZTFiMmZmLTkxMDktNDU0OC04NDUwLTc3YjU5NzQyMGQ0Yw.jpg'}} />
                        <Body>
                          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Casey Herold</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize:14, marginBottom:10,marginTop:10}}>
                        <Icon name= "logo-github" style={{fontSize:40}} />
                          /KCN8
                        </Text>
                        <Text style={{fontSize:14}}>
                        <Icon name= "logo-linkedin" style={{fontSize:40}} />
                          /in/casey-herold/
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Content>
              </Row>
              <Row>
                <Content>
                  <Card style={{flex: 0, height:260}}>
                    <CardItem>
                      <Left>
                        <Thumbnail style={{ height: 70, width: 70, borderRadius:35 }} source={{uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAAuNAAAAJDI5MTgyMjFjLWQ4NDctNDdmOC05MmU2LTU1Nzg1MTUyMDViZg.jpg'}} />
                        <Body>
                          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Jonathan Sax</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize:14, marginBottom:10,marginTop:10}}>
                        <Icon name= "logo-github" style={{fontSize:40}} />
                          /in/jonathan-sax/
                        </Text>
                        <Text style={{fontSize:14}}>
                        <Icon name= "logo-linkedin" style={{fontSize:40}} />
                          /Redrecovery9
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Content>
              </Row>
          </Col>
      </Grid>
    );
  }
}
