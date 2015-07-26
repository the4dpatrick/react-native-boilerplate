let React = require('react-native');
let {
  StyleSheet,
  Text,
  View,  
} = React;

class Intro extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          React Native Boilerplate
        </Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});

module.exports = Intro;