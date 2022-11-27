import React from 'react';
import { GestureResponderEvent, View } from 'react-native';
import { ITodoPaginator } from '../types/todo.type';
import Button from './common/Button';
import { Spacings } from '../constants/theme';

const TodoPaginator = ({ loadTodos }: ITodoPaginator) => {
  return (
    <View style={styles.paginator}>
      <Button
        onPress={(loadTodos as unknown) as (
          // eslint-disable-next-line no-unused-vars
          event: GestureResponderEvent
        ) => void
        }
        title="Load more"
      />
    </View>
  );
};

const styles = {
  paginator: {
    marginVertical: Spacings.s20,
  },
};

export default TodoPaginator;
