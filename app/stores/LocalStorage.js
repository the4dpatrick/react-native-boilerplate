/***************************************************************************  
An abstraction on top of React Native's AsyncStorage
https://facebook.github.io/react-native/docs/asyncstorage.html#content

`bootstrap()` is called when the app initializes within `componentWillMount` 
It returns data from AsyncStorage in the form of Promise.
****************************************************************************/

let alt = require('../alt');
let Promise = require('bluebird');
let React = require('react-native');
let {
  AsyncStorage
} = React;

const PREFIX = '@ReactNativeBoilerplate:';
let STORAGE_KEY = `${PREFIX}Storage`;

class LocalStorage {
  static bootstrap() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(STORAGE_KEY)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })
        .done();
    });
  }
}

module.exports = alt.createStore(LocalStorage, 'LocalStorage');