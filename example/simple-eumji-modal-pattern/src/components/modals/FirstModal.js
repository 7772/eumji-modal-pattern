import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default FirstModal = ({ closeModal }) => {
  return (
    <View style={styles.modal}>
      <TouchableOpacity 
        style={styles.close}
        onPress={closeModal}
      >
        <Text>Close Modal</Text>
      </TouchableOpacity>
      <View style={styles.main}>
        <Text>FirstModal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300, 
    height: 300, 
    backgroundColor: "white",
    alignSelf: "center",
  },
  close: {
    width: 300, 
    height: 40, 
    alignItems:"center", 
    justifyContent: "center", 
    backgroundColor: "yellow",
  },
  main: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  }
});