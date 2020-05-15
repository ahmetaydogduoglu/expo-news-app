import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from "react-native"
export default function index({ title, newsImage, goDetail, content }) {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>goDetail(content)}>
            <ImageBackground source={newsImage ? { uri: newsImage } : null} style={styles.image} width="100%" height="100%">
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>

            </ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: Dimensions.get("window").width - 50,
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 5,
        marginLeft: 5,
    }, image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: .8
    }, titleContainer: {
        backgroundColor: "rgba(0,0,0,.6)",
        height: 150,
        width: "100%",
        bottom: 0,
        position: "absolute",
        padding: "2%"
    }, titleText: {
        color: "white",
        fontSize: 25
    }
})
