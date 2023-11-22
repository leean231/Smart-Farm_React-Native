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
import {firebase} from '../../firebase'

const LoginForm = ({navigation}) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have atleast 6 characters'),
  })

const onLogin = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log("Firebase login successful", email, password)
  } catch (error){
    Alert.alert('The user does not exist please Sign-up.',error.message)
  }
}

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) =>{
          onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
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
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
              <Text style={{ color: '#FFA07A' }}>Forgot Password?</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}>
              <Text style={{ color: '#191970', fontWeight: 'bold' }}>
                Log In
              </Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={{ color: '#FFA07A' }}>
                {' '}
                Don&apos;t have an account?{' '}
              </Text>
              <TouchableOpacity onPress={()=>navigation.push('SignUpScreen')}>
                <Text style={{ color: '#00FFFF' }}>Sign Up</Text>
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
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
});
export default LoginForm;
