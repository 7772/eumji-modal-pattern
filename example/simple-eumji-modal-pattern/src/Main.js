import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import FirstModal from "./components/modals/FirstModal";
import SecondModal from "./components/modals/SecondModal";
import ThirdModal from "./components/modals/ThirdModal";

import {withModal} from "./withModal";
 
class Main extends Component {

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress(key) {
    this.props.showModal(key);
  }

  sayHello() {
    alert("Hello");
  }

  render() {
    const modals = {
      firstModal: <FirstModal sayHello={this.sayHello} />,
      secondModal: <SecondModal />,
      thirdModal: <ThirdModal />,
    };
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
        {this.props.renderModal(modals)}
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
 