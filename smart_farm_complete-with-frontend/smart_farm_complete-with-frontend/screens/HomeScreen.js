// Importing necessary components and data
import React,{useEffect, useState} from 'react'
import { View, Text, SafeAreaView,StyleSheet, ScrollView } from "react-native"
import Header from "../components/home/Header"
import Reminders from "../components/home/Reminder";
import Post from "../components/home/Post";
import {POSTS} from "../data/posts"
import BottomTabs, {bottomTabIcons} from "../components/home/BottomTabs"
import {db} from '../firebase'

//the HomeScreen functional component which renders the header,reminders, and a list of posts using the Post component etc.
const HomeScreen = ({navigation}) => {
   const [posts, setPosts] = useState([])
 useEffect(() => {
  try {
    db.collectionGroup('posts').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
     setPosts(snapshot.docs.map(post => (
       {id: post.id, ...post.data()})))
    })
  } catch (error) {
    console.error(error)
  }
},[])


    return(
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        <Reminders navigation={navigation} />
        <ScrollView>
        {posts.map((post, index) =>(
        <Post post={post} key={index} />
        ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
    )
}

//styles used in the HomeScreen component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000000',
  },
})

export default HomeScreen;