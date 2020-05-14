import React from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
export default function index({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity>
                <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    title: {
        fontSize: 45,
        fontWeight: "bold"
    }
})