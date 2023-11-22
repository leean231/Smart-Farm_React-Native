import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {useRoute} from '@react-navigation/native';


const ViewNote = ({navigation}) => {
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
           <Text style={styles.headers}>Notes</Text>
      </View>
      <View style={styles.listContainer}>
         <Text style={{ color: 'white' }}>
  <Text
    style={{
      color: '#7B68EE',
      fontWeight: 'bold',
      fontSize: 20,
    }}>
    {route.params.header}
  </Text>
  {'\n'}
  {route.params.notes} {'\n'}
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
  headers: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
    marginLeft: 50,
  },
  listContainer: {
   marginTop: 20,
    marginLeft: 50,
  },
});

export default ViewNote;