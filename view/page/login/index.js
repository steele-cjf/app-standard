import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from './component'
import { login } from '../../store/login/user';

// reducer获取
function mapStateToProps(state){
  return {
    userInfo: state.userInfo
  };
}

// action使用
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);
// export default Login