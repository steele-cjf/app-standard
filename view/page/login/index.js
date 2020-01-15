import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body, Left, Title, Icon } from 'native-base';
class Login extends React.Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    console.log(1111, this.props.navigation)
  }
  changeLocal () {
    I18n.locale = I18n.locale === 'enUS' ? 'zhCN' : 'enUS'
    this.forceUpdate()
  }
  login () {
    fetch('https://www.baidu.com/home/msg/data/personalcontent?num=8&indextype=manht&_req_seqid=0xc7c58a80000ea109&asyn=1&t=1578370113961&sid=1427_21093_30210_30283_22158')
      .then(res => {
        console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button  onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='more' />
            </Button>
          </Left>
          <Body>
            <Title>thingsMatrix</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.goBack()}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

module.exports = Login;