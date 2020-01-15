import React, { Component } from 'react';
import { Container, Text, Header, Button, Left, Icon, Body } from 'native-base';
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
export default class googleMap extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button  onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='more' />
            </Button>
          </Left>
          <Body/>
        </Header>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 map: {
    position: 'absolute',
    top: 100,
    left: 0,
    height: 800,
    width: 300,
    bottom: 20,
    right: 200
  },
});