import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Footer } from 'native-base';
export default class ListIconExample extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>中/英文</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>地图</Text>
            </Body>
            <Right>
              <Text>Google Map</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
        <Footer>
          <Button onPress={() => this.props.navigation.openDrawer()}>
            <Text>退出登录</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}