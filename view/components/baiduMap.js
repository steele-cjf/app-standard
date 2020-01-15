import React, { Component } from 'react';
import { Header, Body, Title, Button, Footer, FooterTab, Icon, Text, Left } from 'native-base';
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { MapView, MapTypes, Overlay } from 'react-native-baidu-map'
import { BaiduMapManager } from 'react-native-baidu-map';
import Card from './card'
BaiduMapManager.initSDK('yc3ksr8TqEvVduQItAciF3qSQXgDYGpG');
const { Marker } = Overlay;
export default class MapScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='more' />
            </Button>
          </Left>
          <Body>
            <Title>百度地图</Title>
          </Body>
        </Header>
        <MapView
          width={Dimensions.get('window').width}
          height={800}
          zoom={18}
          trafficEnabled={true}
          zoomControlsVisible={true}
          mapType={MapTypes.SATELLITE}
          center={{ longitude: 116.465175, latitude: 39.938522 }}
      >
          <Marker
              title='中心'
              location={{longitude: 116.465175, latitude: 39.938522}}
          />
        </MapView>
        <Card/>
        <Footer style={styles.footTab}>
          <FooterTab>
            <Button vertical>
              <Icon name="camera" />
              <Text>device</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>map</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  footTab: {
    bottom: 0
  }
})