/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Drums = () => {
    return (
        <>
        <View style={styles.section}>
            <Text style={styles.label}>Drummers</Text>
        </View>
        <View style={styles.showcase}>
            <View style={styles.card}>
            <Text>Shawn Broad</Text>
            <Image source={require('../assets/shawn.jpg')} style={styles.img}/>
            <Text>Preferred Genres:</Text>
            <Text>Punk, Metal, Ska</Text>
            </View>
            <View style={styles.card}>
            <Text>Shawn Broad</Text>
            <Image source={require('../assets/shawn.jpg')} style={styles.img}/>
            <Text>Preferred Genres:</Text>
            <Text>Punk, Metal, Ska</Text>
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    img:{
        height:100,
        width: 100,
    },
    card:{
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 2,
        width: 150,
        alignItems: 'center',
        marginTop: 20,
    },
    showcase: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    section:{
        backgroundColor: 'orange',
        height: 50,
        width: 'auto',
        alignItems: 'center',
    },
    label:{
        fontSize: 30,
        color: 'darkslateblue',
    },
});

export default Drums;