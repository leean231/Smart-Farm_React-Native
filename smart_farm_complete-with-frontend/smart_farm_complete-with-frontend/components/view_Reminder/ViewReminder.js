import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {useRoute} from '@react-navigation/native';


const ViewReminder = ({navigation}) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri:
                'https://img.icons8.com/nolan/256/1A6DFF/C822FF/back.png',
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Reminders</Text>
      </View>
      <View style={styles.listContainer}>
          <Text  style={{ color: 'white', marginTop: 10 }}>
            Reminder:  {route.params.reminders} {"\n"}
            Date:      {route.params.date} {"\n"}
            Time:      {route.params.time}{"\n"}
          </Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
    marginBottom: 600,
    justifyContent: 'space-between',
  },
  headerContainer:{
    flexDirection: 'row',
    justifiyContent:'space-between',
    alignItems:'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
    marginLeft: 50,
  },
  listContainer: {
   flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 2,
  },
});

export default ViewReminder;

