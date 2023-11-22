import React from 'react' 
import { SafeAreaView, Text,TouchableOpacity } from 'react-native'
import Details from './../components/shop/Details'
//import S_ITEM from '../data/s_item'


const DetailScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
        <Details  navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default DetailScreen