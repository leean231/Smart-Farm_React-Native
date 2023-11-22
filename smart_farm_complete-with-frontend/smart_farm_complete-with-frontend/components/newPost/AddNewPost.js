import React from 'react' 
import {View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

//This part is used for rendering
const AddNewPost = ({navigation}) => (
  <View style={styles.container}>
      <Header navigation={navigation}/>  
      <FormikPostUploader navigation={navigation}/>
  </View>
)

//This part is used for designing the header where the back and text comes from.
const Header = ({navigation}) =>(
       <View style={styles.headerContainer}>
    <TouchableOpacity onPress ={() =>navigation.goBack()}>
       <Image 
       source={{uri:'https://img.icons8.com/nolan/256/1A6DFF/C822FF/back.png'}}
       style={{width:30, height:30}}
       />
    </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        </View>
    )


const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
  },
  headerContainer:{
    flexDirection: 'row',
    justifiyContent:'space-between',
    alignItems:'center',
  },
  headerText:{
    color:'#fff',
    fontWeight:'700',
    fontSize:20,
    marginLeft:100,
  },
})

export default AddNewPost