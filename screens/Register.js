import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Alert } from "react-native"
import Input from "../components/Input"
import Logo from "../components/Logo"
import { LinearGradient } from 'expo-linear-gradient';
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
                <LinearGradient
                    colors={['white', '#9E58B2']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
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
                </LinearGradient>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#DFBEE9",
        justifyContent: "center"
    }, submitButton: {
        width: "90%",
        height: 44,
        borderColor: "#9E58B2",
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9E58B2"
    }, submitButtonTitle: {
        fontSize: 17,
        color: "#fff",
        fontWeight: "bold"
    }
})
