import React from 'react' 
import { SafeAreaView, Text,View, StyleSheet } from 'react-native'
import BottomTabs, {bottomTabIcons} from "../components/home/BottomTabs"
import Note from './../components/notes/Note'


const NoteScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     <Note navigation={navigation} />
      <View style={styles.content}>
        <BottomTabs icons={bottomTabIcons} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
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


export default NoteScreen