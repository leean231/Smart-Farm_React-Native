import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';


const addReminderSchema = Yup.object().shape({
  add_reminder: Yup.string().max(2200, 'Add Reminder has reached the character limit'),
  add_date: Yup.string().required('Date is required'),
  add_time: Yup.string().required('Time is required'),
});

const FormikReminderAdder = ({ navigation }) => {

  return (
    <Formik
      initialValues={{ add_reminder: '', add_date: '', add_time: '' }}
      onSubmit={(values) => {
        console.log(values);
        console.log('Your reminder has been saved successfully ');
        navigation.goBack();
      }}
      validationSchema={addReminderSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
        <View style={{ margin: 20 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Reminder:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Reminder....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('add_reminder')}
            onBlur={handleBlur('add_reminder')}
            value={values.add_reminder}
          />

          <Text style={{ color: 'white', fontSize: 20 }}>Date:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Date....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('add_date')}
            onBlur={handleBlur('add_date')}
            value={values.add_date}
          />

          <Text style={{ color: 'white', fontSize: 20 }}>Time:</Text>
          <TextInput
            style={{ color: 'white', fontSize: 20 }}
            placeholder='Add Time....'
            placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('add_time')}
            onBlur={handleBlur('add_time')}
            value={values.add_time}
          />

          <Button onPress={handleSubmit} title="Add" disabled={!isValid} />
          
        </View>
      )}
    </Formik>
  );
}

export default FormikReminderAdder;