/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LogIn = () => {
  return (
    <>
    <View style= {styles.titleContianer}>
        <Text style= {styles.titleText}>App Title</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.text}>Log In</Text>
      <TextInput placeholder="Username" style= {styles.textInput} />
      <TextInput placeholder="Password" style= {styles.textInput} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContianer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  titleText:{
    color: 'darkslateblue',
    fontSize: 40,
    marginBottom: 10,
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
    marginBottom: 10,
  },
  textInput:{
      backgroundColor: 'lightblue',
      height: 60,
      width: 300,
      padding: 8,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: 'red',
      marginBottom: 10,
  },
});

export default LogIn;
