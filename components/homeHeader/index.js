import React from 'react'
import { View, StyleSheet, Animated, Text, TouchableOpacity } from "react-native"
import { Entypo } from '@expo/vector-icons';
export default function index({ title, backButton, fontSize }) {
    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, { fontSize: fontSize }]}>{title}</Animated.Text>
            <TouchableOpacity>
                <Entypo name="login" size={25} style={{marginTop:10}} color="black" />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingRight: "4%",
        paddingLeft: "4%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontFamily: "oswald-bold",
    }
})