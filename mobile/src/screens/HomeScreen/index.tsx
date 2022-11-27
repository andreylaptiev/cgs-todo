import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { container } from '../../styles/base';
import { auth, createTodo } from '../../constants/routerKeys';
import Button from '../../components/common/Button';
import { Spacings, Width } from '../../constants/theme';
import userService from '../../service/user.service';
import { useMutation } from 'react-query';
import TodoFilter from '../../components/TodoFilter';
import { IHomeScreenProps } from '../../types/screen.type';

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  const logoutUser = useMutation(
      userService.logout.bind(userService),
      { onSuccess: () => navigation.navigate(auth) },
  );

  return (
    <SafeAreaView style={topContainer}>
      <View style={styles.createBtn}>
        <Button
          onPress={() => navigation.navigate(createTodo)}
          title="Create new Todo"
        />
      </View>
      <View style={styles.todoContainer}>
        <TodoFilter />
      </View>
      <View style={styles.logoutBtn}>
        <Button
          onPress={() => logoutUser.mutate()}
          title="Logout"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createBtn: {
    marginVertical: Spacings.s28,
  },
  logoutBtn: {
    paddingBottom: Spacings.s20,
  },
  todoContainer: {
    paddingHorizontal: Spacings.s20,
    minWidth: Width.pixel.px300,
  },
});

const topContainer = StyleSheet.flatten([container.default, container.top]);

export default HomeScreen;
