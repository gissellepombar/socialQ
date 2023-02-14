import { useContext } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PostContext } from "../../App";

export default function Posts({ post, navigation }) {
  const { setCurrentPost } = useContext(PostContext);
  const handleTouch = () => {
    setCurrentPost(post)
    navigation.navigate("Details")
  }
  return (
    <TouchableOpacity onPress={handleTouch}>
      <View style={styles.post}>
        <Image style={styles.image} source={{ uri: post.photo }} />
        <Text style={styles.title}>{post.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    margin: 30,
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'rgba(95,94,130,0.8)',
    
    shadowOffset: {
      width: "0",
      height: "0",
    },
    shadowOpacity: "0.96",
    shadowRadius: "10",
    shadowColor: 'black'
  },

  image: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
    height: 300,
  },
  
  title: {
    textAlign: 'center',
    marginTop: 13,
    fontSize: 19,
    color: 'white'
  },
})