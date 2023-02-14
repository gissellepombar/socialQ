import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import Feed from './src/components/Feed';
import Details from './src/components/Details'

const Stack = createNativeStackNavigator();
export const PostContext = createContext();

export default function App() {
    const [currentPost, setCurrentPost] = useState();
    return (
    <PostContext.Provider value={{currentPost, setCurrentPost}}>
        <NavigationContainer>
            <StatusBar style="auto" />
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Feed} />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
        </NavigationContainer>
    </PostContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
