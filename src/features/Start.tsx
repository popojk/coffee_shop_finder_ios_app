import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from "../utils/colors";

export default function Start(): React.JSX.Element {
    return (
        <View style={styles.startBackground}>
            <Image 
              style={styles.image}
              source={require('../../static/pics/a-cute-coffee-cup-with-legs-icon.png')}
            />
            <Text style={styles.logoText}>跑咖咖</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    startBackground: {
        backgroundColor: colors.start,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
        marginTop: -70,
        marginBottom: -20
    },
    logoText: {
        marginTop: -50,
        fontSize: 30,
        color: colors.logo,
    }
})