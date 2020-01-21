import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body, Left, Title, Icon } from 'native-base';
import md5 from 'md5';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginName: '',
      password: '',
      cookieObje: {}
    }
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.userInfo, prevProps.userInfo)
    if (this.props.userInfo !== prevProps.userInfo) {
      this.props.navigation.navigate('BaiduMap')
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.userInfo && props.userInfo !== state.prevPropsUserInfo) {
      return {
        cookieObje: props.userInfo
      };
    }
    return null;
  }
  componentDidUpdate(prevProps) {
    // 典型用法（不要忘记比较 props）：
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  login () {
    let { password, loginName } = this.state
    password = md5(password)
    this.props.login({
      password,
      loginName
    })
  }
  change (name, value) {
    this.setState({
      [name]: value
    })
  }
  render() {
    let { loginName, password } = this.state
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
              <Input onChangeText={this.change.bind(this, 'loginName')} value={loginName}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={this.change.bind(this, 'password')} value={password}/>
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