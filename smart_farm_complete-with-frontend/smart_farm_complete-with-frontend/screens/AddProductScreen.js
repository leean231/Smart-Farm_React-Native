import React from 'react' 
import { SafeAreaView, Text } from 'react-native'
import AddProduct from '../components/add_Product/AddProduct'

const AddProductScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
          <AddProduct navigation={navigation}/>
        </SafeAreaView>
  ) 
}
export default AddProductScreen