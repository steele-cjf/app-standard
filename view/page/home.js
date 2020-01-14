import React from "react";
import { Container, Content, Text, Title, List, ListItem, Header, Body } from "native-base";
import { routeKeys } from '../routers/index'
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content padder>
          <List
            dataArray={routeKeys}
            renderRow={data => {
              return (
                <ListItem
                  key={data}
                  button onPress={() => this.props.navigation.navigate(data)}>
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
