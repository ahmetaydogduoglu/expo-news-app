import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index({ title, Icon, Image, goCategoryNews }) {
    return (
        <TouchableOpacity
            onPress={() => goCategoryNews(title.toLowerCase())}
            style={styles.container}>
            <ImageBackground source={Image} style={{ width: "100%", height: "100%", opacity: .9 }} width="100%" height="100%">
                <View style={{ height: "30%", bottom: 0, position: "absolute", backgroundColor: "rgba(0,0,0,.8)", width: "100%", justifyContent: "center", padding: 10 }}>
                    <Text numberOfLines={3} style={styles.title}>{title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "48%",
        overflow: "hidden",
        borderRadius: 10,
        marginTop: 10
    }, title: {
        color: "white",
        fontSize: 20,
        fontFamily: "oswald-regular"
    }
})
