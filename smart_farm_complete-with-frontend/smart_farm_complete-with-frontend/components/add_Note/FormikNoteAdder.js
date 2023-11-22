import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';


const addNoteSchema = Yup.object().shape({
  add_header: Yup.string().max(200, 'Add Note has reached the character limit'),
  add_note: Yup.string().max(2200, 'Add Note has reached the character limit'),
});

const FormikNoteAdder = ({ navigation }) => {

  return (
    <Formik
      initialValues={{ add_header: '', add_note: '' }}
      onSubmit={(values) => {
        console.log(values);
        console.log('Your note has been saved successfully ');
        navigation.goBack();
      }}
      validationSchema={addNoteSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
        <View style={{ margin: 20 }}>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Header....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('add_header')}
            onBlur={handleBlur('add_header')}
            value={values.add_header}
          />

          <Text style={{ color: 'white', fontSize: 20 }}>Note:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Note....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('add_note')}
            onBlur={handleBlur('add_note')}
            value={values.add_note}
          />
          <Button onPress={handleSubmit} title="Add" disabled={!values.add_header || !values.add_note} />
          
        </View>
      )}
    </Formik>
  );
}

export default FormikNoteAdder;