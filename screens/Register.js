import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Alert } from "react-native"
import Input from "../components/Input"
import Logo from "../components/Logo"
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeEmail = (text) => this.setState({ email: text })
    onChangePassword = (text) => this.setState({ password: text })
    onSubmit = () => {
        Alert.alert(this.state.email, this.state.password)
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Input keyboardType="default" placeholder={"Full Name"} onChange={this.onChangeEmail} value={this.state.email} />
                <Input keyboardType="email-address" placeholder={"E-Mail"} onChange={this.onChangeEmail} value={this.state.email} />
                <Input secureTextEntry={true} keyboardType="visible-password" placeholder={"Password"} onChange={this.onChangePassword} value={this.state.password} />
                <TouchableOpacity onPress={this.onSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonTitle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text style={[styles.submitButtonTitle, { marginTop: 15 }]}>Do you have a account?</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center"
    }, submitButton: {
        width: "90%",
        height: 44,
        borderColor: "#9E58B2",
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }, submitButtonTitle: {
        fontSize: 17,
        color: "#9E58B2",
        fontWeight: "bold"
    }
})
