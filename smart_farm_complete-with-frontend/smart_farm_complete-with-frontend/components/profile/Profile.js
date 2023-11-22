import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProfileBody, ProfileButtons} from './ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import { USERS } from "../../data/users"
import BottomTabView from './BottomTabView'


const Profile = () => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'green'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'green',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="HarvestTime"
          accountName="HarvestTime"
          profileImage= {{uri:USERS[0].image}}
          followers="2"
          following="5"
          post="4"
        />
        <ProfileButtons
          id={0}
          name="HarvestTime"
          accountName="HarvestTime"
          profileImage={{uri:USERS[0].image}}
        />
      </View>
        <BottomTabView />
    </View>
  );
};

export default Profile;