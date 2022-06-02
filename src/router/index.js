import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Pengacara,
  Pesan,
  Tempat,
  ListLawyer,
  Chatting,
  UserProfile,
  EditProfile,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen
        name="Pengacara"
        component={Pengacara}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pesan"
        component={Pesan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tempat"
        component={Tempat}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListLawyer"
        component={ListLawyer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
