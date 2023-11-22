import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import EditProfile from '../components/profile/EditProfile'

const EditProfileScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000 ', flex: 1}}>
          <EditProfile navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default EditProfileScreen