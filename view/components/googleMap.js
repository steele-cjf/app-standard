import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import MapView from 'react-native-maps';

export default class googleMap extends Component {
  render() {
    return (
      <Container>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      </Container>
    );
  }
}