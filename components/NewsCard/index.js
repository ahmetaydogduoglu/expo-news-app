import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
export default function index({ title, newsImage }) {
    return (
        <TouchableOpacity style={styles.container}>

            <Image source={{ uri: newsImage }}  style={{width:"100%",height:150}}/>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: Dimensions.get("window").width / 2.3,
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 9,
        borderWidth:.5
    }
})
