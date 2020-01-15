import React from "react";
import { Container, Content, Text, Title, Header, Body, Button } from "native-base";
import { StyleSheet} from 'react-native'
export default class HomeScreen extends React.Component {
  openDrawer() {
    this.props.navigation.openDrawer()
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>thingsMatrix2</Title>
          </Body>
        </Header>
        <Content padder>
          <Text style={styles.homeTitle}>Welcome to thingsMatrix</Text>
          <Body>
            <Button style={styles.btn} onPress={this.openDrawer.bind(this)}>
              <Text>Let's Go</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  homeTitle: {
    textAlign: 'center',
    marginTop: 20
  },
  btn: {
    marginTop: 20
  }
})