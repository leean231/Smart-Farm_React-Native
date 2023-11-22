import React,{useState} from 'react';
import { View, Text,Image, TextInput, Button  } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Divider } from "react-native-elements";
import validUrl from 'valid-url'

{/*Formik is a library for building and managing forms in React applications. It provides a simple and intuitive way to manage form state, validate form inputs, and handle form submissions.*/}

const PLACEHOLDER_IMG =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  product_name: Yup.string().max(100, 'Product Name has reached the character limit'),

  product_price: Yup.number().typeError('Product Price must be a number')
                             .max(999.99, 'Product Price cannot exceed 999.99')
                             .positive('Product Price must be a positive number')
                             .required('Product Price is required'),

  product_details: Yup.string().max(2200, 'Product Details has reached the character limit'),
});

const FormikProductAdder = ({navigation}) => {
  const[thumbnailUrl, setThumnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
        initialValues={{imageUrl:'', product_name:'', product_price:'', product_details:''}}
        onSubmit={(values) =>{
          console.log(values)
          console.log('Your product was submmitted successfully 🎉')
          navigation.goBack()}}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid})=>(
        <>
        <View style={{margin:20, justifyContent:'space-between', alignItems: 'center'}}>
          <Image 
         source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} 
          style={{width:100, height:100}}/>
          <View style={{flex:1, marginLeft:12}}>
          </View>
        </View>
        <Divider width={0.2} orientation='vertical'/>

         <TextInput
         onChange={(e) => setThumnailUrl(e.nativeEvent.text)} 
          style={{color:'white', fontSize:18}}
          placeholder='Enter image Url' 
          placeholderTextColor='gray'
          onChangeText={handleChange('imageUrl')}
          onBlur={handleBlur('imageUrl')}
          value={values.imageUrl}/>

          {errors.imageUrl &&(
            <Text style={{fontSize:10, color:'red'}}>
            {errors.imageUrl}
            </Text>
          )}
          <Divider width={0.2} orientation='vertical'/>
          <Text style={{ color: 'white', fontSize: 20 }}>Product Name:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Product name....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('product_name')}
            onBlur={handleBlur('product_name')}
            value={values.product_name}
          />

          <Divider width={0.2} orientation='vertical'/>
    
          <Text style={{ color: 'white', fontSize: 20 }}>Product Price:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Product Price....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('product_price')}
            onBlur={handleBlur('product_price')}
            value={values.product_price}
          />
          <Divider width={0.2} orientation='vertical'/>

          <Text style={{ color: 'white', fontSize: 20 }}>Product Details:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Product Details....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('product_details')}
            onBlur={handleBlur('product_details')}
            value={values.product_details}
          />
          <Divider width={0.2} orientation='vertical'/>
           <Button onPress={handleSubmit} title="Save" disabled={!isValid} />
          </>
      )}
    </Formik>
  );
};

export default FormikProductAdder;