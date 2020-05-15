import React, { useState } from 'react'
import { View, Animated, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, Alert, ImageBackground } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
export default function NewsDetail({ route, navigation }) {
    const [scrollYAnimatedValue, setScrollYAnimatedValue] = useState(new Animated.Value(0))
    const HEADER_MIN_HEIGHT = 50;
    const HEADER_MAX_HEIGHT = Dimensions.get("window").height / 2.7;
    const headerHeight = scrollYAnimatedValue.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });
  
    return (
        <View style={styles.container}>

            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
                )} style={{ flex: 1 }}>

                <View style={{ paddingLeft: "4%", paddingRight: "4%", marginTop: Dimensions.get("window").height / 2.7 + 20 }}>
                    <Text style={{ fontSize: 19 }}>
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
                top: 0,
                left: 0,
                right: 0,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: headerHeight
            }}>
                <ImageBackground style={{ width: "100%", height: "100%", resizeMode: "cover", opacity: 1, }} source={{ uri: route.params.urlToImage }}>
                    <View style={{ height: HEADER_MIN_HEIGHT, backgroundColor: headerBackground }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialIcons name="keyboard-arrow-left" size={50} color="white" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})