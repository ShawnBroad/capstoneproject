/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Home = () => {
  return (
    <>
        <View style ={styles.header}>
            <Text style= {styles.title}>Instrumentation</Text>
        </View> 
        <View style={styles.showcase}>
        <View style= {styles.card}>
        <Text style= {styles.label}>Drums</Text>
        <Image source={require('../assets/drums.jpg')} style={styles.img}/>
        </View>
        <View style= {styles.card}>
        <Text style= {styles.label}>Guitar</Text>
        <Image source={require('../assets/guitar.jpg')} style={styles.img}/>
        </View>
        <View style= {styles.card}>
        <Text style ={styles.label}>Bass</Text>
        <Image source={require('../assets/bass.jpg')} style={styles.img}/>
        </View>
        <View style= {styles.card}>
        <Text style= {styles.label}>Vocals</Text>
        <Image source={require('../assets/vocals.jpg')} style={styles.img}/>
        </View>
        <View style= {styles.card}>
        <Text style= {styles.label}>Brass</Text>
        <Image source={require('../assets/brass.jpg')} style={styles.img}/>
        </View>
        <View style= {styles.card}>
        <Text style= {styles.label}>Winds</Text>
        <Image source={require('../assets/winds.jpg')} style={styles.img}/>
        </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'orange',
        height: 50,
        width: 'auto',
        alignItems: 'center',
    },
    title:{
        fontSize: 40,
        color: 'darkslateblue',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },

    showcase: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    label:{
        fontSize: 30,
        color: 'darkslateblue',
    },
    card: {
        alignItems: 'center',

    },
});

export default Home;
