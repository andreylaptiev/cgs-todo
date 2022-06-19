import { NativeStackScreenProps } from '@react-navigation/native-stack';
import IRootStackParamList from './route.type';
import {
  auth, login, register, home, createTodo, editTodo,
} from '../constants/routerKeys';

export type IAuthScreenProps = NativeStackScreenProps<
  IRootStackParamList, typeof auth
>;

export type ILoginScreenProps = NativeStackScreenProps<
  IRootStackParamList, typeof login
>;

export type IRegisterScreenProps = NativeStackScreenProps<
  IRootStackParamList, typeof register
>;

export type IHomeScreenProps = NativeStackScreenProps<
  IRootStackParamList, typeof home
>;

export type ICreateTodoScreenProps = NativeStackScreenProps<
  IRootStackParamList, typeof createTodo
>;

export type IEditTodoScreenProps = NativeStackScreenProps<
  IRootStackParamList, typeof editTodo
>;
