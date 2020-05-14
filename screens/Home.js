import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView,Alert } from "react-native"
import Header from "../components/homeHeader"
import Card from "../components/NewsCard/index"
export default function Home({ }) {
    const [news, setNews] = useState(null)
    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=efa190398a714994a6f0916ceeb1e5aa')
            .then(response =>response.json())
            .then(data=>setNews(data))
            .catch(err=> Alert.alert("error"))
    });
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingRight: "5%", paddingLeft: "4%" }}>
                <Header />
                {
                    news === null ? <Text>Loading</Text> : (<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                       {
                           news.articles.map((item,i)=><Card key={i} title={item.source.name} newsImage={item.urlToImage}/>)
                       }
                    </ScrollView>)
                }

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        backgroundColor: "white",
        padding: 50
    }
})