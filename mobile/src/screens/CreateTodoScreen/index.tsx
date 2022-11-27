import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { ITodoFormValues } from '../../types/todo.type';
import todoService from '../../service/todo.service';
import { container, title } from '../../styles/base';
import { Spacings } from '../../constants/theme';
import QUERY_KEYS from '../../constants/queryKeys';
import { home } from '../../constants/routerKeys';
import TodoForm from '../../components/TodoForm';
import { ICreateTodoScreenProps } from '../../types/screen.type';

const CreateTodoScreen = ({ navigation }: ICreateTodoScreenProps) => {
  const initialValues: ITodoFormValues = {
    title: '',
    description: '',
    year: '',
    isPublic: false,
    isCompleted: false,
  };

  const queryClient = useQueryClient();

  const createTodo = useMutation(todoService.createTodo.bind(todoService), {
    onError: (err) => console.log(err),
    onSuccess: (data) => {
      queryClient.setQueryData(QUERY_KEYS.todos, data);
      queryClient.invalidateQueries(QUERY_KEYS.todos, {
        refetchActive: true,
        refetchInactive: true,
      });
      navigation.navigate(home);
    },
  });

  return (
    <SafeAreaView style={container.default}>
      <View style={styles.title}>
        <Text style={title.h1}>Create new todo</Text>
      </View>
      <TodoForm
        initialValues={initialValues}
        onSubmit={(values: ITodoFormValues) => createTodo.mutate(values)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: Spacings.s28,
  },
});

export default CreateTodoScreen;
