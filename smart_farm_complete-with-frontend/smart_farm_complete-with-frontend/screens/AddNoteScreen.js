import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import AddNote from '../components/add_Note/AddNote'

const AddNoteScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
          <AddNote navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default AddNoteScreen