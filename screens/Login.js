import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Alert ,Button} from "react-native"
import Input from "../components/Input"
import Logo from "../components/Logo"
import { LinearGradient } from 'expo-linear-gradient';



export default class Login extends Component {

    static navigationOptions = {
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      };

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
                    colors={['white', '#9E58B2',]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        height:"100%",
                    }}
                >
                    <Logo />
                    <Input keyboardType="email-address" placeholder={"E-Mail"} onChange={this.onChangeEmail} value={this.state.email} />
                    <Input secureTextEntry={true} keyboardType="visible-password" placeholder={"Password"} onChange={this.onChangePassword} value={this.state.password} />
                    <TouchableOpacity onPress={this.onSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonTitle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Register")}
                    >
                        <Text style={[styles.submitButtonTitle, { marginTop: 15 }]}>Are you register our app?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Home")}
                    >
                        <Text style={[styles.submitButtonTitle, { marginTop: 15 }]}>Home</Text>
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
