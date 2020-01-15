import React from "react";
import { Container, Content, Text, Title, List, ListItem, Header, Body } from "native-base";
import { pagesRoute, componentsRoute } from '../routers/index'
import { StyleSheet } from 'react-native'
export default class HomeScreen extends React.Component {
  goToPage (data) {
    this.props.navigation.navigate(data)
  }
  render() {
    return (
      <Container >
        <Header>
          <Body>
            <Title>Menu</Title>
          </Body>
        </Header>
        <Content padder bounces={false}>
          <Text style={styles.title1}>业务模块</Text>
          <List
            dataArray={pagesRoute}
            renderRow={data => {
              return (
                <ListItem
                  key={data}
                  button onPress={this.goToPage.bind(this, data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
          <Text style={styles.title2}>组件模块</Text>
          <List
            dataArray={componentsRoute}
            renderRow={data => {
              return (
                <ListItem
                  key={data}
                  button onPress={this.goToPage.bind(this, data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title1: {
    color: 'red',
    marginBottom: 10
  },
  title2: {
    color: 'red',
    marginTop: 30
  }
})