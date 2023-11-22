import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { C_NOTE } from '../../data/c_note';

// To make notes
const Notes = ({ navigation }) => {
  const [noteList, setNoteList] = useState(C_NOTE);

  const addNote = () => {
    navigation.navigate("AddNoteScreen", {
      onAddNote: (newNote) => {
        setNoteList((prevList) => [...prevList, newNote]);
      },
    });
  };

  const viewNote = (c_note) => {
    navigation.navigate("ViewNoteScreen", { header: c_note.header, notes: c_note.notes });
  };

  const removeNote = (index) => {
    const newNoteList = [...noteList];
    newNoteList.splice(index, 1);
    setNoteList(newNoteList);
  };

  return (
    <View style={{ marginBottom: 13 }}>
      <Text style={styles.headerText}>Notes</Text>

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={addNote} style={{ alignItems: "center" }}>
          <ImageBackground
            source={{ uri: "ADD_BUTTON_IMAGE_URI" }}
            style={[styles.notes, { marginBottom: 10 }]}
          >
            <Text style={styles.notesText}>Add Notes</Text>
          </ImageBackground>
        </TouchableOpacity>

        {noteList.map((note, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => viewNote(note)}
            onLongPress={() => removeNote(index)}
          >
            <View style={[{ alignItems: "center" }, styles.notesContainer]}>
    <ImageBackground source={{ uri: note }} style={styles.notes}>
      <Text style={styles.headernotes}>
        {note.header.length > 20
          ? note.header.slice(0, 10).toLowerCase() + "..."
          : note.header}
      </Text>
      <Text style={styles.notesText}>
        {note.notes.length > 30
          ? note.notes.slice(0, 20).toLowerCase() + "..."
          : note.notes}
      </Text>
    </ImageBackground>
  </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  notesContainer: {
    marginBottom: 10
  },
  notes: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 5,
    borderColor: "#0d98ba",
  },
  headernotes: {
    color: "#7B68EE",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 20,
    numberOfLines: 2,
    ellipsizeMode: "tail",
  },
  notesText: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    numberOfLines: 2,
    ellipsizeMode: "tail",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
  },
});

export default Notes;