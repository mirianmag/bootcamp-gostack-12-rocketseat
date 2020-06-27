import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1"/>
      <View style={styles.container}>
        <Text style= {styles.title}>Hello</Text>
      </View>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: 'bold',
  }
});