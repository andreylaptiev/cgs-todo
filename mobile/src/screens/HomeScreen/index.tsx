import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import IRootStackParamList from '../../types/route.type';
import { container } from '../../styles/base';
import { createTodo } from '../../constants/routerKeys';
import Button from '../../components/common/Button';
import TodoContainer from '../../components/TodoContainer';
import { Spacings } from '../../constants/theme';

export type HomeProps = NativeStackScreenProps<IRootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView style={topContainer}>
      <View style={styles.createBtn}>
        <Button
          onPress={() => navigation.navigate(createTodo)}
          title="Create new Todo"
        />
      </View>
      <View style={styles.todoContainer}>
        <TodoContainer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createBtn: {
    marginVertical: Spacings.s28,
  },
  todoContainer: {
    paddingHorizontal: Spacings.s20,
  },
});

const topContainer = StyleSheet.flatten([container.default, container.top]);

export default HomeScreen;
