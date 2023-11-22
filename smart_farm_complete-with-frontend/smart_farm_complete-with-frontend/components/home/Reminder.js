import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { REMINDER_EACH } from '../../data/reminder_each';


// To make reminders
const Reminders = ({ navigation }) => {
  const [reminderList, setReminderList] = useState(REMINDER_EACH);

  const addReminder = () => {
    navigation.navigate("AddReminderScreen", {
      onAddReminder: (newReminder) => {
        setReminderList((prevList) => [...prevList, newReminder]);
      },
    });
  };

 const viewReminder = (reminder_each) => {
  navigation.navigate("ViewReminderScreen", { reminders: reminder_each.reminders ,
                                              date:reminder_each.date ,
                                              time:reminder_each.time });
};

  const removeReminder = (index) => {
    const newReminderList = [...reminderList];
    newReminderList.splice(index, 1);
    setReminderList(newReminderList);
  };

  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {reminderList.map((reminder, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => viewReminder(reminder)}
            onLongPress={() => removeReminder(index)}
          >
            <View style={{ alignItems: "center" }}>
              <ImageBackground
                source={{ uri: reminder.image }}
                style={styles.reminders}
              >
                <Text style={styles.remindersText}>
                  {reminder.reminders.length > 11
                    ? reminder.reminders.slice(0, 7).toLowerCase() + "..."
                    : reminder.reminders}
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={addReminder}
          style={{ alignItems: "center" }}
        >
          <ImageBackground
            source={{ uri: "ADD_BUTTON_IMAGE_URI" }}
            style={styles.reminders}
          >
            <Text style={styles.remindersText}>Add Reminder</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  //to manage the circle of the image.
  reminders: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#0d98ba",
    justifyContent: 'center' //only use this when displaying the app in ios.
  },

  //to manage the text in the image.
  remindersText: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    position: "relative",
    left: "0px",
    top: "20px",
    fontSize: 12,
  },
});

export default Reminders;



