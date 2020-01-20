import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body, Left, Title, Icon } from 'native-base';
import md5 from 'md5';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginName: '',
      password: ''
    }
  }
  changeLocal () {
    I18n.locale = I18n.locale === 'enUS' ? 'zhCN' : 'enUS'
    this.forceUpdate()
  }
  login () {
    let {password, loginName} = this.state
    this.props.login({
      password,
      loginName
    })
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.userInfo !== nextProps.userInfo) {
      console.log(nextProps.userInfo, 'next')
    }
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
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.login.bind(this)}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

module.exports = Login;