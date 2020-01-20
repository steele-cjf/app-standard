import { combineReducers } from 'redux';
import { userInfo } from './login/user';
const allReducers= combineReducers({
  userInfo
});
export default allReducers;