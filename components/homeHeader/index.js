import React from 'react'
import { View, StyleSheet, Animated, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
export default function index({ title, backButton, fontSize }) {
    console.log("fontsize:", fontSize)
    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, { fontSize: fontSize }]}>{title}</Animated.Text>
            {
                backButton ? (
                    <TouchableOpacity>
                        <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
                    </TouchableOpacity>
                ) : null
            }

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
        fontWeight: "bold"
    }
})