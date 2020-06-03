import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, Animated, SafeAreaView, Alert, FlatList } from "react-native"
import axios from "axios"
import NewsCard from "../components/NewsCard/index"
export default function CategoriesNews({ route, navigation }) {
    const [news, setNews] = useState([])
    const [scrollY, setScrollY] = useState(new Animated.Value(0))

    // useEffect(() => {

    //     const getNews = async () => {
    //         const category = route.params;
    //         console.log(category.toString());
    //         const resposne = await axios.get("http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=efa190398a714994a6f0916ceeb1e5aa")
    //         resposne.data.status === "ok" ? setNews(resposne.data.articles) :
    //             Alert.alert("Error!", "There is a problem, So Sorry :(")

    //     }
    //     getNews();



    // }, [])
    const headerTitlePosition = scrollY.interpolate({
        inputRange: [0,120],
        outputRange: [100, 15],
        extrapolate: 'clamp'
    })
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                )}
                scrollEventThrottle={16}
                style={{ flex: 1 }}
            >
                <View style={{ height: 75 }} />
                <View style={{ width: "95%", alignSelf: "center", justifyContent: "center", marginTop: 15, marginBottom: 15 }}>
                    <Text style={{ fontSize: 30, fontFamily: "oswald-bold" }}>Business</Text>
                </View>
                <View style={{ width: "95%", alignSelf: "center", backgroundColor: "blue", marginBottom: 15, height: 150 }}>

                </View>
                <View style={{ width: "95%", alignSelf: "center", backgroundColor: "blue", marginBottom: 15, height: 150 }}>

                </View>
                <View style={{ width: "95%", alignSelf: "center", backgroundColor: "blue", marginBottom: 15, height: 150 }}>

                </View>
                <View style={{ width: "95%", alignSelf: "center", backgroundColor: "blue", marginBottom: 15, height: 150 }}>

                </View>
                <View style={{ width: "95%", alignSelf: "center", backgroundColor: "blue", marginBottom: 15, height: 150 }}>

                </View>

                <View style={{ width: "95%", alignSelf: "center", backgroundColor: "blue", marginBottom: 15, height: 150 }}>

                </View>
            </ScrollView>
            {/* <FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                )}
                data={news}
                renderItem={item=> <NewsCard content={item}  title={item.title} newsImage={item.urlToImage} />}
                ListEmptyComponent={()=><Text>No News</Text>}
            /> */}
            <View style={styles.screenHeader}>
                <Animated.Text style={{alignSelf:"center",color:"#fff",fontSize:20,transform:[
                     {
                        translateY: headerTitlePosition
                    }
                ]}}>
                    Business
                </Animated.Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1
    },
    screenHeader: {
        width: Dimensions.get("window").width,
        height: 60,
        overflow:"hidden",
        top: 0,
        right: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,.9)"
    }
})
