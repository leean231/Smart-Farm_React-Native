import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const bottomTabIcons = [
  {
    name: "Home",
    inactive: "https://img.icons8.com/nolan/256/cottage.png",
    active: "https://img.icons8.com/nolan/256/cottage.png",
    screenName: "HomeScreen",
  },
  {
    name: "Shop",
    inactive:
      "https://img.icons8.com/nolan/1x/1A6DFF/C822FF/online-order.png",
    active: "https://img.icons8.com/nolan/1x/1A6DFF/C822FF/online-order.png",
    screenName: "ShopScreen",
  },
  {
    name: "Search",
    inactive: "https://img.icons8.com/nolan/256/1A6DFF/C822FF/search.png",
    active: "https://img.icons8.com/nolan/256/1A6DFF/C822FF/search.png",
    screenName: "SearchScreen",
  },
  {
    name: "Note",
    inactive:
      "https://img.icons8.com/nolan/1x/1A6DFF/C822FF/wish-list.png",
    active: "https://img.icons8.com/nolan/1x/1A6DFF/C822FF/wish-list.png",
    screenName: "NoteScreen",
  },
  {
    name: "Profile",
    inactive: "https://img.icons8.com/nolan/256/user-default.png",
    active: "https://img.icons8.com/nolan/256/user-default.png",
    screenName: "ProfileScreen",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigation = useNavigation();

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => handleTabPress(icon) }>
      <Image
        source={{
          uri: activeTab == icon.name ? icon.active : icon.inactive,
        }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );

  const handleTabPress = (icon) => {
    setActiveTab(icon.name);
    navigation.navigate(icon.screenName);
  };

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomTabs;

