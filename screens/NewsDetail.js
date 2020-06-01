import React, { useState } from 'react'
import { View, Animated, Text,StatusBarIOS, StyleSheet, Dimensions, ScrollView, SafeAreaView, ImageBackground, StatusBar } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
export default function NewsDetail({ route, navigation }) {
    const [scrollYAnimatedValue, setScrollYAnimatedValue] = useState(new Animated.Value(0))
    const HEADER_MIN_HEIGHT = 50;
    const HEADER_MAX_HEIGHT = Dimensions.get("window").height / 2.7;
    const MAX_FONT_SIZE = 25;
    const MIN_FONT_SIZE = 16;
    const headerHeight = scrollYAnimatedValue.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });
    const headerBackground = scrollYAnimatedValue.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: ['rgba(0, 0, 0, .7)', 'rgba(0, 0, 0, .8)']
    });
    const headerTitleFontSize = scrollYAnimatedValue.interpolate({
        inputRange: [0, 26],
        outputRange: [MIN_FONT_SIZE, MAX_FONT_SIZE],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" translucent={true}/>
            <View style={{ height: 5 }} />
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
                )} style={{ flex: 1 }}>

                <View style={{ paddingLeft: "4%", paddingRight: "4%", marginTop: Dimensions.get("window").height / 2.7 + 20 }}>
                    <Text style={{ fontFamily: "oswald-bold", fontSize: 25 }}>{route.params.title}</Text>
                    <Text style={{
                        fontSize: 19, fontFamily: "oswald-regular",
                    }}>
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                        {route.params.title}
                    </Text>
                </View>
                <View style={{ paddingLeft: "4%", paddingRight: "4%", height: 35 }} />
            </ScrollView>
            <Animated.View style={{
                width: "100%",
                position: 'absolute',
                top: 18,
                left: 0,
                right: 0,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: headerHeight
            }}>
                <ImageBackground style={{ width: "100%", height: "100%", resizeMode: "cover", opacity: 1, }} source={{ uri: route.params.urlToImage }}>
                    <Animated.View style={{ height: HEADER_MIN_HEIGHT, backgroundColor: headerBackground, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Animated.Text style={{ alignSelf: "center", color: "white", fontFamily: "oswald-regular", marginLeft: 10, fontSize: headerTitleFontSize }}>News Detail</Animated.Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialIcons name="keyboard-arrow-left" size={50} color="white" />
                        </TouchableOpacity>
                    </Animated.View>
                </ImageBackground>
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})