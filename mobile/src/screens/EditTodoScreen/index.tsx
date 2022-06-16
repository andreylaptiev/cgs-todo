import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import QUERY_KEYS from '../../constants/queryKeys';
import todoService from '../../service/todo.service';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { container, title } from '../../styles/base';
import TodoForm from '../../components/TodoForm';
import { ITodo, ITodoFormValues } from '../../types/todo.type';
import { home } from '../../constants/routerKeys';
import { Spacings } from '../../constants/theme';

export type Props = NativeStackScreenProps<RootStackParamList, 'EditTodo'>;

const EditTodoScreen = ({ navigation, route }: Props) => {
  const queryClient = useQueryClient();
  const id = route.params.id;
  const { data } = useQuery<ITodo[]>(QUERY_KEYS.todos);
  const todo = data?.find((d: ITodo) => d._id === id);
  const initialValues: ITodoFormValues = todo ?
    {
      title: todo.title,
      description: todo.description,
      year: todo.year,
      isPublic: todo.isPublic,
      isCompleted: todo.isCompleted,
    } :
    {
      title: '',
      description: '',
      year: '',
      isPublic: false,
      isCompleted: false,
    };

  const updateTodo = useMutation(todoService.updateTodo.bind(todoService), {
    onError: (err) => console.log(err),
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.todos, {
        refetchActive: true,
        refetchInactive: true,
      });
      navigation.navigate(home);
    },
  });

  return (
    <SafeAreaView style={container.default}>
      <View style={styles.title}>
        <Text style={title.h1}>Edit todo</Text>
      </View>
      <TodoForm
        initialValues={initialValues}
        onSubmit={(values: ITodoFormValues) => {
          const data: ITodo = { ...values, _id: id };
          updateTodo.mutate(data);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: Spacings.s28,
  },
});

export default EditTodoScreen;
