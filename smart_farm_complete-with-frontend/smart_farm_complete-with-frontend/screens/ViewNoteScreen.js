import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import ViewNote from '../components/view_Note/ViewNote'

const ViewNoteScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
          <ViewNote navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default ViewNoteScreen