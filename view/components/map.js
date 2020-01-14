import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';
import { MapView, MapTypes, Geolocation, Overlay, MapApp } from 'react-native-baidu-map';
// import { BaiduMapManager } from 'react-native-baidu-map';
// BaiduMapManager.initSDK('yc3ksr8TqEvVduQItAciF3qSQXgDYGpG');
const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow } = Overlay;

export default class MapScreen extends Component {
  render() {
    return (
      <Container>
        <Text>dfdsa</Text>
      </Container>
    );
  }
}