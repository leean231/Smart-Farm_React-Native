import React from 'react' 
import { SafeAreaView, Text,TouchableOpacity } from 'react-native'
import S_Home from './../components/shop/S_Home'
import Details from './../components/shop/Details'
import BottomTabs, {bottomTabIcons} from "../components/home/BottomTabs"


const ShopScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
       <S_Home navigation={navigation}/>
        <BottomTabs icons={bottomTabIcons}/>
        </SafeAreaView>
  ) 
}
export default ShopScreen