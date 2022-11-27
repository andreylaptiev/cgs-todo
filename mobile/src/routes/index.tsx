import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  auth, login, register, home, createTodo, editTodo,
} from '../constants/routerKeys';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';
import EditTodoScreen from '../screens/EditTodoScreen';

export type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  CreateTodo: undefined;
  EditTodo: { id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={auth} component={AuthScreen} />
      <Stack.Screen name={login} component={LoginScreen} />
      <Stack.Screen name={register} component={RegisterScreen} />
      <Stack.Screen name={home} component={HomeScreen} />
      <Stack.Screen name={createTodo} component={CreateTodoScreen} />
      <Stack.Screen name={editTodo} component={EditTodoScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
