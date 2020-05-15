import React, { useEffect, useState } from 'react'
import { View, RefreshControl, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, Alert, Animated } from "react-native"
import Header from "../components/homeHeader"
import Card from "../components/NewsCard/index"
import CategoriesCard from "../components/categoriesCards/Index"
export default function Home({ navigation }) {
    const [news, setNews] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const getNews = () => {
        fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=efa190398a714994a6f0916ceeb1e5aa')
            .then(response => response.json())
            .then(data => {
                setRefreshing(false)
                setNews(data)
            })
            .catch(err => Alert.alert("error"))
    }
    useEffect(() => {
        getNews();
    });
    const goDetail = (content) => {
        navigation.navigate("NewsDetail", content)
    }
    const HEADER_MIN_HEIGHT = 60;
    const HEADER_MAX_HEIGHT = 90;
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });
    const headerTitleFontSize = scrollY.interpolate({
        inputRange: [0, 45 - 20],
        outputRange: [45, 20],
        extrapolate: 'clamp',
    });
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                    )}
                    style={{ flex: 1, }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={getNews} />
                    }>

                    {
                        news === null ? <Text style={{ alignSelf: "center" }}>Loading</Text> : (
                            <ScrollView horizontal={true} style={{ paddingLeft: 10 }} showsHorizontalScrollIndicator={false}>
                                {
                                    news.articles.map((item, i) => <Card content={item} goDetail={goDetail} key={i} title={item.title} newsImage={item.urlToImage} />)
                                }
                            </ScrollView>)
                    }
                    <View style={{ paddingLeft: "4%", paddingRight: "4%", marginTop: 15, marginBottom: 15, justifyContent: "center" }}>
                        <Text style={styles.subtitle}>News Categories</Text>
                    </View>
                    <View style={styles.categoriesCardsContainer}>
                        <CategoriesCard title={"Business"} Image={require("../assets/business.jpg")} />
                        <CategoriesCard title={"Entertainment"} Image={require("../assets/entertaiment.jpg")} />
                        <CategoriesCard title={"Health"} Image={require("../assets/healt.jpg")} />
                        <CategoriesCard title={"Science"} Image={require("../assets/space.jpg")} />
                        <CategoriesCard title={"Sports"} Image={require("../assets/soccer.jpg")} />
                        <CategoriesCard title={"Technology"} Image={require("../assets/phone.jpg")} />
                        <View style={{ width: "100%", height: 20 }} />
                    </View>


                </ScrollView>




                <Animated.View
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        position: "absolute",
                        backgroundColor: "white",
                        width: Dimensions.get("window").width,
                        height: headerHeight,
                    }}
                >
                    <Header fontSize={headerTitleFontSize} title={"News"} backButton={false} />
                </Animated.View>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        backgroundColor: "white",
        flex: 1
    }, subtitle: {
        fontSize: 30,
        fontWeight: "bold"
    }, categoriesContainer: {
        width: "100%",

        paddingRight: "4%",
        paddingLeft: "4%",

    },
    categoriesCardsContainer: {
        paddingLeft: "4%",
        paddingRight: "4%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }

})