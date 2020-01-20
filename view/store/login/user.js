
import { post } from '../../untils/axios'
const USER_INFO = 'USER_INFO'

// actions
export function login(data) {
  return post({
    url: '/user/login',
    actionType: USER_INFO,
    bodyData: data
  })
}

// reducer
export function userInfo(state = { data: {}, isInit: true}, action){
  if (action.type === USER_INFO) {
    return action.data
  }
  return state
}


export default {
  userInfo
}