import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import feeds from "../../data/feed.json";
import FeedItem from "../../src/components/FeedItem";

const Feed = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={feeds.feed}
                contentContainerStyle={{ paddingBottom: 280 }}
                renderItem={({ item }) => <FeedItem data={item} />}
            />
        </View>
    );
};

export default Feed;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#171717",
    },
});
