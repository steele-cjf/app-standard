## 环境

避免一些底层的坑，请一定要按照官网要求版本安装

https://reactnative.cn/docs/getting-started/

## 注意

注意 Node 的版本必须大于等于 10，Python 的版本必须为 2.x（不支持 3.x），而 JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本）。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。


## 启动

##### 依赖安装

```npm install``` 或 ```yarn```

如果在新装依赖时报错，使用```react-native link```解决

##### 安卓启动

```npm run android```

##### ios启动

```npm run ios```

## plugins

当前使用的插件:react-navigation、fetch、native-base

## 部署

#### 安卓部署

1. 生成一个叫做my-release-key.keystore的密钥库文件(放于android/app/):
```
$ keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2. 修改android/gradle.properties文件(下面*****替换成相应密码)
```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

3. 打包部署

```cd android```

```gradlew assembleRelease```

生成的 APK 文件位于android/app/build/outputs/apk/release/app-release.apk，它已经可以用来发布了。