import React from 'react';
import { FlatList } from 'react-native';
import { ITodoFetched } from '../types/todo.type';
import TodoElement from './TodoElement';

const TodoContainer = ({ data }: ITodoFetched) => {
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
