import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
          <AddNewPost navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default NewPostScreen