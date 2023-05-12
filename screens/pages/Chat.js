import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { greytext, heading, headingbold, title } from "../../misc/Fonts";
import Icon from "react-native-vector-icons/Ionicons";
import chats from "../../data/chat.json";

const Chat = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.row}>
                        <ScrollView horizontal>
                            <FlatList
                                data={chats.chat}
                                horizontal
                                scrollEnabled={false}
                                renderItem={({ item }) => (
                                    <Image
                                        source={{ uri: item.avatarurl }}
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 50,
                                            margin: 5,
                                            borderColor: "#FFFFFF",
                                            borderWidth: 0.5,
                                        }}
                                    />
                                )}
                            />
                        </ScrollView>
                    </View>
                    <Text style={heading}>Online</Text>
                    <FlatList
                        data={chats.chat.filter(
                            (item) => item.isonline === true
                        )}
                        contentContainerStyle={{
                            paddingBottom: 10,
                            marginTop: 10,
                        }}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <>
                                <TouchableOpacity style={styles.chatItem}>
                                    <Image
                                        source={{ uri: item.avatarurl }}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            margin: 5,
                                            borderColor: "#FFFFFF",
                                            borderWidth: 0.5,
                                        }}
                                    />
                                    <View
                                        style={{
                                            marginLeft: 10,
                                            width: "75%",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <View>
                                            <Text
                                                style={[
                                                    greytext,
                                                    {
                                                        color: "#FFFFFF",
                                                        fontWeight: "bold",
                                                        marginTop: 10,
                                                    },
                                                ]}
                                            >
                                                {item.name}
                                            </Text>
                                            <Text style={greytext}>
                                                {item.lastmsg}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    />
                    <Text style={heading}>Offline</Text>
                    <FlatList
                        data={chats.chat.filter(
                            (item) => item.isonline === false
                        )}
                        contentContainerStyle={{
                            paddingBottom: 250,
                            marginTop: 10,
                        }}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <>
                                <TouchableOpacity style={styles.chatItem}>
                                    <Image
                                        source={{ uri: item.avatarurl }}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            margin: 5,
                                            borderColor: "grey",
                                            borderWidth: 2,
                                        }}
                                    />
                                    <View
                                        style={{
                                            marginLeft: 10,
                                            width: "75%",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <View>
                                            <Text
                                                style={[
                                                    greytext,
                                                    {
                                                        color: "#FFFFFF",
                                                        fontWeight: "bold",
                                                        marginTop: 10,
                                                    },
                                                ]}
                                            >
                                                {item.name}
                                            </Text>
                                            <Text style={greytext}>
                                                {item.lastmsg}
                                            </Text>
                                        </View>
                                        <View>
                                            {item.lastonline === "RN" ? (
                                                <Text
                                                    style={{
                                                        backgroundColor:
                                                            "#1ed760",
                                                        width: 20,
                                                        height: 20,
                                                        marginTop: 10,
                                                        borderRadius: 50,
                                                    }}
                                                >
                                                    .
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={[
                                                        greytext,
                                                        { marginTop: 10 },
                                                    ]}
                                                >
                                                    {item.lastonline}
                                                </Text>
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        backgroundColor: "#171717",
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "space-between",
    },

    chatItem: {
        flexDirection: "row",
    },
});
