'use strict';

let React = require('react-native');
let LocalStorage = require('./app/stores/LocalStorage');
let Intro = require('./app/screens/Intro');
let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBarIOS
} = React;

class ReactNativeBoilerplate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bootstrapped: false,
    };
  }
  componentWillMount() {
    StatusBarIOS.setHidden(true);
    LocalStorage.bootstrap()
      .then((data) => {
        this.setState({
          bootstrapped: true
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    if (this.state.bootstrapped == false) {
      return <View />
    }

    return (
      <Intro />
    );
  }
};

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
