import Storage from 'react-native-storage';
// import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage();

// 对于web
window.storage = storage;

// 对于react native
global.storage = storage;

var userA = {
  name: 'A',
  age: 20,
  tags: ['geek', 'nerd', 'otaku']
};

storage.save({
  key: 'user', // Note: Do not use underscore("_") in key!
  id: '1001', // Note: Do not use underscore("_") in id!
  data: userA,
  expires: 1000 * 60
});