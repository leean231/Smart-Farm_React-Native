import React from 'react' 
import { SafeAreaView, Text,TouchableOpacity,View, StyleSheet } from 'react-native'
import BottomTabs, {bottomTabIcons} from "../components/home/BottomTabs"
import Search from '../components/search/Search'


const SearchScreen = ({navigation}) => {
  
  return(
       <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
       <Search navigation={navigation}/>
        <View style={styles.content}>
        <BottomTabs icons={bottomTabIcons} />
      </View>
        </SafeAreaView>
  ) 
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 24,
    position: "absolute",
    width: "100%",
    bottom: "1%",
    zIndex: 999,
    backgroundColor: "#000",
  },
});
export default SearchScreen