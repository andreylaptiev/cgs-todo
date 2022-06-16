import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation, useQueryClient } from 'react-query';
import { RootStackParamList } from '../routes';
import todoService from '../service/todo.service';
import { ITodo } from '../types/todo.type';
import Button from '../components/common/Button';
import { Colors, Spacings, Width } from '../constants/theme';
import { editTodo } from '../constants/routerKeys';
import QUERY_KEYS from '../constants/queryKeys';

const TodoElement = ({
  _id,
  title,
  description,
  year,
  isCompleted,
  isPublic,
}: ITodo) => {
  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackParamList>
  >();
  const queryClient = useQueryClient();

  const deleteTodo = useMutation(todoService.deleteTodo.bind(todoService), {
    onError: (err) => console.log(err),
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.todos, {
        refetchActive: true,
        refetchInactive: true,
      });
    },
  });

  return (
    <View style={styles.todoEl}>
      <View style={styles.todo}>
        <Text>{title} {year}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.status}>
          <Text>
            {isCompleted ? 'Completed, ' : 'Not completed, '}
          </Text>
          <Text>
            {isPublic ? 'Public' : 'Private'}
          </Text>
        </View>
      </View>
      <View style={styles.btns}>
        <View style={styles.editBtn}>
          <Button
            onPress={() => navigation.navigate(editTodo, { id: _id })}
            title="Edit"
          />
        </View>
        <Button
          onPress={() => deleteTodo.mutate(_id)}
          title="Delete"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: Width.percent.p40,
  },
  description: {
    paddingVertical: Spacings.s20,
    flexWrap: 'wrap',
  },
  editBtn: {
    marginBottom: Spacings.s12,
  },
  status: {
    flexDirection: 'row',
  },
  todo: {
    width: Width.percent.p60,
  },
  todoEl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: Colors.black,
    paddingVertical: Spacings.s20,
  },
});

export default TodoElement;
