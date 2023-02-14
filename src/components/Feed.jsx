import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Post from './Post'

export default function Feed() {
    const [posts, setPosts] = useState();
    useEffect(()=>{
        fetch('https://express-ts-c8.web.app/photos')
        .then(res => res.json())
        .then(setPosts)
        .catch(console.error)
    }, [])
    return (
        <ScrollView style={styles.feed}>
            {!posts 
            ? <Text>Loading...</Text>
            : posts.map(post => (
                <Post key={post.photoId} post={post} />
                // <Text key={post.photoId}>{post.description}</Text>
            ))}
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    feed: {
        backgroundColor: '#e0e0e0',
        marginTop: 40,  
        width: '100%',
    }
})