import React, { useEffect, useState } from 'react'
import { View, RefreshControl, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, Alert, Animated, StatusBar, Platform } from "react-native"

export default function CategoriesNews({ route, navigation }) {
    const [news, setNews] = useState(null)

    useEffect(() => {
        const category = route.params;
        console.log(category);
        fetch(`http://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=efa190398a714994a6f0916ceeb1e5aa`)
            .then(response => response.json())
            .then(data => {
                setRefreshing(false)
                setNews(data)
            })
            .catch(err => Alert.alert("error"))
    }, [])

    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})
