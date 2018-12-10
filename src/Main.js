import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import withModal from "./withModal";
 
class Main extends Component {

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress(key) {
    this.props.show(key);
  }

  render() {
    const modals = ["firstModal", "secondModal", "thirdModal", "fourthModal"];
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.onPress("firstModal")}
        >
          <Text>Open First Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => this.onPress("secondModal")}
        >
          <Text>Open Second Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => this.onPress("thirdModal")}
        >
          <Text>Open Third Modal</Text>
        </TouchableOpacity>
        {this.props.retrieveModal(modals)}
      </View>
    )
  }
}
 
export default withModal(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  button: {
    width: 200, 
    height: 40, 
    margin: 20,
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "yellow"
  },
});
 