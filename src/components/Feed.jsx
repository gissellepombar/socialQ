import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, ImageBackground } from 'react-native';
import Post from './Post';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch('https://express-ts-c8.web.app/photos')
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error)
  }, [])
  return (
    <ScrollView style={styles.feed}>
      <ImageBackground 
        source={ require("../../assets/bg2.webp") }
        resizeMode="cover"
        style={styles.bg}>
      {!posts
        ? <Text>Loading...</Text>
        : posts.map(post => (
          <Post key={post.photoId} post={post} navigation={navigation} />
        ))
      }
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  feed: {
    backgroundColor: 'rgba(36,46,80,255)',
    // marginTop: 40,
    width: '100%',
  },

  bg: {
    flex: 1,
    justifyContent:'center'
  }
})