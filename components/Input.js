import React from 'react'
import { TextInput, StyleSheet } from "react-native"
export default function input({ onChange, value, placeholder,keyboardType,secureTextEntry=false }) {
    return (
        <TextInput
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            style={styles.input}
            onChangeText={(text) => onChange(text)} />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 44,
        width: "90%",
        backgroundColor: "transparent",
        borderWidth: .5,
        borderRadius: 20,
        color: "#814094",
        paddingRight: "3%",
        paddingLeft: "3%",
        fontSize: 15,
        borderColor: "#9E58B2",
        marginBottom:15
    }
})
