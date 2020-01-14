import I18n from 'react-native-i18n'
import enUS from './en-US';
import zhCN from './zh-CN';
I18n.fallbacks = true;
I18n.translations = {
  enUS,
  zhCN
}
// 默认是enus，后面改成请求
I18n.locale = 'enUS'
global.I18n=I18n