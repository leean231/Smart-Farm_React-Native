import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import SignupForm from '../components/signupscreen/SignupForm'


const SignUpScreen = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.png')} style={{height:200, width:200}} />
      </View>
      <SignupForm navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#000000',
    paddingHorizontal:12,
  },
  logoContainer:{
    alignItems: 'center',
    marginTop: 10,
  }

})

export default SignUpScreen