import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList,Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {S_ITEM} from '../../data/s_item'
//import DetailScreen from '../../screens/DetailScreen'

const width = Dimensions.get('window').width / 2 - 30;



const S_Home = ({navigation}) => {
   const Card = ({s_item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailScreen", { name: s_item.name,
                                                            price: s_item.price,
                                                            user:s_item.user,
                                                            userimage:s_item.userimage,
                                                            about:s_item.about,
                                                            img:s_item.img})}>
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
          </View>
          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image 
            source={{uri:s_item.img}} 
            style={{height:100, width:129, flex: 1, resizeMode: 'contain'}} />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}>
          {s_item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 4,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              AED:{s_item.price}
            </Text>
            <View
              style={{
                height: 30,
                width: 42,
                backgroundColor: 'green',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                left: "6px",
                top: "1px",
              }}>
              <Text
                style={{fontSize: 19, color:'white', fontWeight: 'bold' }}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, color: 'orange', fontWeight: 'bold' }}> Farm Shop </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
        <Icon name="shopping-cart" size={28} color="green" />
        </TouchableOpacity>

       <View style={{ width: 10 }} />
       <TouchableOpacity onPress ={()=> navigation.push('AddProductScreen')}>
      <Icon name="add" size={28} color="green" />
      </TouchableOpacity>
      </View>
      
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} color="green" />
          <TextInput placeholder=" Search " style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="sort" size={30} color="white" />
        </View>
      </View>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={S_ITEM}
        renderItem={({item}) => {
          return <Card s_item={item} />;
        }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 225,
   backgroundColor: '#BDB76B',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: '#BDB76B',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'grey',
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
);

export default S_Home;

