import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import AddReminder from '../components/add_Reminder/AddReminder'

const AddReminderScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
          <AddReminder navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default AddReminderScreen