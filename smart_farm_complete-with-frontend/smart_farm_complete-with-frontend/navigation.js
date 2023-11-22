import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import AddReminderScreen from './screens/AddReminderScreen'
import ViewReminderScreen from './screens/ViewReminderScreen'
import ShopScreen from './screens/ShopScreen'
import BottomTabs, { bottomTabIcons } from './components/home/BottomTabs'
import DetailScreen from './screens/DetailScreen'
import AddProductScreen from './screens/AddProductScreen'
import SearchScreen from './screens/SearchScreen'
import NoteScreen from './screens/NoteScreen'
import ViewNoteScreen from './screens/ViewNoteScreen'
import AddNoteScreen from './screens/AddNoteScreen'
import ProfileScreen from './screens/ProfileScreen'
import EditProfile from './components/profile/EditProfile'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
      <Stack.Screen name='AddReminderScreen' component={AddReminderScreen} />
      <Stack.Screen name='ViewReminderScreen' component={ViewReminderScreen} />
      <Stack.Screen name='ShopScreen' component={ShopScreen} />
      <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
     <Stack.Screen name='DetailScreen' component={DetailScreen} />
      <Stack.Screen name='NoteScreen' component={NoteScreen} />
      <Stack.Screen name='ViewNoteScreen' component={ViewNoteScreen} />
       <Stack.Screen name='AddNoteScreen' component={AddNoteScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
      <Stack.Screen name='HomeScreenTabs'>
        {() => (
    <BottomTabs icons={bottomTabIcons} />
  )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
export const SignOutStack = () => (
  <NavigationContainer>
   <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='HomeScreenTabs'>
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)

