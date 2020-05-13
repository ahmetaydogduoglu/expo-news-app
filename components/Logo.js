import React from 'react'
import { View, Text, StyleSheet } from "react-native"
export default function input() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:25,color:"#fff",letterSpacing:3}}>Our App!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "70%", 
        height: 60,
        borderRadius:15,
        marginBottom:25,
        backgroundColor: "#9E58B2",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#A49AA7",
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: .7,
        shadowRadius: 4,
        
        elevation: 11,
    }
})
