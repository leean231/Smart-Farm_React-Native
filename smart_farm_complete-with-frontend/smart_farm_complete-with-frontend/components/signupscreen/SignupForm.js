import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import {firebase, db} from '../../firebase'

const SignupForm = ({navigation}) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username:Yup.string().required().min(3, 'A username is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have atleast 6 characters'),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch ('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }

  const onSignup = async (email, username, password) => {
     try{
       const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
       console.log("firebase signup successfull", email, password)
       db.collection('users').doc(authUser.user.email).set({
         owner_uid: authUser.user.uid,
         username: username,
         email: authUser.user.email,
         profile_picture: await getRandomProfilePicture(),
         })
     }catch(error){
       Alert.alert('Incorrect Details,Please Try Again.',error.message)
     }
   }
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '',username:'', password: '' }}
        onSubmit={values => {onSignup(values.email, values.username, values.password)}}
        validationSchema={SignupFormSchema}
        validateOnMount={true}>
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={[styles.inputField,
           { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#CCC' : 'red'
            }]}>
              <TextInput
                placeholderTextColor="#FFA07A"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{ color: '#FFA07A', marginBottom: 10 }}
              />
            </View>

             <View style={[styles.inputField,
           { borderColor: 1 > values.username.length  || values.username.length > 2 ? '#CCC' : 'red'
            }]}>
              <TextInput
                placeholderTextColor="#FFA07A"
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={{ color: '#FFA07A', marginBottom: 10 }}
              />
            </View>
            <View style={[styles.inputField,
           { borderColor: 1 > values.password.length  || values.password.length > 5 ? '#CCC' : 'red'
            }]}>
              <TextInput
                placeholderTextColor="#FFA07A"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={{ color: '#FFA07A', marginBottom: 10 }}
              />
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}>
              <Text style={{ color: '#191970', fontWeight: 'bold' }}>
                Sign Up
              </Text>
            </Pressable>
            <View style={styles.loginContainer}>
              <Text style={{ color: '#FFA07A' }}>
                {' '}
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={()=>navigation.goBack('LoginScreen')}>
                <Text style={{ color: '#00FFFF' }}>Log In </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 1,
  },
  inputField: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: '#2F4F4F',
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? '#FF4500' : '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  loginContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
});
export default SignupForm;