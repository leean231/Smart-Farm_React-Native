import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import ViewReminder from '../components/view_Reminder/ViewReminder'

const ViewReminderScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
          <ViewReminder navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default ViewReminderScreen