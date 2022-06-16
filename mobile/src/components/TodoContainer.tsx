import React from 'react';
import { FlatList } from 'react-native';
import { useQuery } from 'react-query';
import QUERY_KEYS from '../constants/queryKeys';
import todoService from '../service/todo.service';
import TodoElement from './TodoElement';

const TodoContainer = () => {
  const { data } = useQuery(
      QUERY_KEYS.todos,
      todoService.getAllTodo.bind(todoService),
  );

  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <TodoElement
            _id={item._id}
            title={item.title}
            description={item.description}
            year={item.year}
            isPublic={item.isPublic}
            isCompleted={item.isCompleted}
          />
        }
        keyExtractor={(item) => item._id}
      />
    </>
  );
};

export default TodoContainer;
