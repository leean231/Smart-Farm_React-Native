import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {firebase} from '../../firebase'

const handleSignout = async() =>{
try{
await firebase.auth().signOut()
console.log('Signed Out Successfully!')
} catch (error){
  console.log(error)
}
}

const Header = ({navigation}) => {
  return (
    //for the logo {smartFarm}.
    //for logo from {13-16}
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image style={styles.logo} source={require("../../assets/logo.png")}/>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress ={()=> navigation.push('NewPostScreen')}>
          <Image
            style={styles.icon}
            source={require("../../assets/post.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/bookmark.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/chat.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// header logo image size managing.
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: "20"
  },

  //To get the icons in the same row.
  iconsContainer: {
    flexDirection: "row"
  },
  //for main logo
  logo: {
    width: 95,
    height: 60,
    resizeMode:"contain"
  },
  //for post logo
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain"
  },
  //for unread badge
  unreadBadge: {
    backgroundColor: "#EC0721",
    position: "absolute",
    left: 30,
    bottom: 18,
    width: 11,
    height: 8,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100
  },
//for the text in the unread badge
  unreadBadgeText: {
    color: "#22FF64",
    fontWeight: 600,
    fontSize: 8
  }
});

export default Header;
