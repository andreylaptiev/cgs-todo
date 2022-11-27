import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import Checkbox from 'expo-checkbox';
import QUERY_KEYS from '../constants/queryKeys';
import todoService from '../service/todo.service';
import { Spacings } from '../constants/theme';
import TodoContainer from './TodoContainer';
import { input } from '../styles/base';

const TodoFilter = () => {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState({
    title: '',
    isPublic: false,
    isCompleted: false,
  });

  const { data } = useQuery(
      [QUERY_KEYS.todos, filter],
      todoService.getAllTodo.bind(todoService),
      {
        onError: (err) => console.log(err),
        onSuccess: (data) => {
          queryClient.setQueryData(QUERY_KEYS.todos, data);
        },
      },
  );

  return (
    <>
      <View style={styles.filter}>
        <Text style={styles.filterName}>Search:</Text>
        <TextInput
          onChangeText={(newText: string) => setFilter({
            ...filter,
            title: newText,
          })}
          style={input.text}
          value={filter.title}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.filterName}>Public</Text>
        <Checkbox
          value={filter.isPublic}
          onValueChange={() => setFilter({
            ...filter,
            isPublic: !filter.isPublic,
          })}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.filterName}>Completed</Text>
        <Checkbox
          value={filter.isCompleted}
          onValueChange={() => setFilter({
            ...filter,
            isCompleted: !filter.isCompleted,
          })}
        />
      </View>
      <TodoContainer data={data} />
    </>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacings.s20,
  },
  filterName: {
    marginRight: Spacings.s12,
  },
});

export default TodoFilter;
