import axios from 'axios'
import apiConfig from '../../config'
import { Toast } from "native-base";

// 默认配置
const DEFAULT_CONFIG = {
  url: '',
  method: 'get',
  bodyData: {},
  queryData: {},
  actionType: '',
  actionDataKey: 'data',
  extendData: {},
  successConfig: null,
  failConfig: null 
}


/**
 * 拦截器
 */ 
axios.interceptors.response.use(async response => {
  return response
});

/**
 * @desc get、post、drop等请求的response的通用处理器
 */
const responseHandler = (dispatch, config) => {
  config.responseData.extendData = config.extendData
  if (!config.responseData.code) { // TMX code 为0 则返回成功
    if (config.actionType) {
      dispatch({
        type: config.actionType,
        [config.actionDataKey]: config.responseData.data
      })
    }
    if (config.successConfig) {
      if (config.successConfig.msg) {
        Toast.show({
          text: config.successConfig.msg,
          buttonText: "Okay",
          position: "bottom"
        })
      }
      if (config.successConfig.callback) {
        config.successConfig.callback(config.responseData)
      }
    }
  } else { // 其它异常处理: 200的异常情况(success为false)、400、404、500(success标记位不存在)等
    const errorMsg = config.responseData.msg || ''
    if (errorMsg) {
      if (config.failConfig && config.failConfig.isForceShow) { // 判断是否强制执行前端自定义错误提示信息
        Toast.show({
          text: config.failConfig.msg || errorMsg,
          buttonText: "Okay",
          position: "bottom"
        })
      }
    } else { // 如果后端没有默认的错误信息，则执行前端自定义错误提示信息
      if (config.failConfig) {
        if (config.failConfig.msg) {
          Toast.show({
            text: config.failConfig.msg,
            buttonText: "Okay",
            position: "bottom"
          })
        }
      }
    }
    // 执行自定义的failCallback
    if (config.failConfig) {
      if (config.failConfig.callback) {
        config.failConfig.callback(config.responseData)
      }
    }
  }
}

export const axiosHandler = (config) => {
  config = Object.assign({}, DEFAULT_CONFIG, config)
  // 有些post接口也用query传值，有些奇葩，但是这里get、post、drop等都统一支持query传值
  if (config.queryData) {
    let str = ''
    if (typeof config.queryData === 'object') {
      for (let key in config.queryData) {
        str += key + '=' + encodeURIComponent(config.queryData[key]) + '&'
      }
      if (Object.keys(config.queryData).length) {
        config.url = config.url + '?' + str.replace(/&$/, '')
      }
    }
  }

  return (dispatch) => {
    let axiosConfig = {
      url: apiConfig.api + config.url,
      method: config.method
    }
    if (config.method.toLowerCase() === 'post') {
      let contentType = 'application/json'
      axiosConfig = Object.assign(axiosConfig, {
        headers: contentType ? {'content-type': contentType} : {},
        data: config.bodyData
      })
    }
    return axios(axiosConfig).then(response => { // 200
      config.responseData = response.data
      responseHandler(dispatch, config)
    }).catch(error => {
      config.responseData = {success: false, message: {desc:  error.msg}}
      responseHandler(dispatch, config)
    })
  }
}

export const get = (config) => {
  config.method = 'GET'
  return axiosHandler(config)
}

export const drop = (config) => {
  config.method = 'DELETE'
  return axiosHandler(config)
}

export const post = (config) => {
  config.method = 'POST'
  return axiosHandler(config)
}
