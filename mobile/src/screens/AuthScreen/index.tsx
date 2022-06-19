import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Button from '../../components/common/Button';
import { Spacings } from '../../constants/theme';
import { container } from '../../styles/base';
import { IAuthScreenProps } from '../../types/screen.type';

const AuthScreen = ({ navigation }: IAuthScreenProps) => {
  const navigateToLogin = () => navigation.navigate('Login');

  const navigateToRegister = () => navigation.navigate('Register');

  return (
    <SafeAreaView style={container.default}>
      <View>
        <Button onPress={navigateToLogin} title="Login" />
      </View>
      <View style={styles.register}>
        <Button onPress={navigateToRegister} title="Register" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  register: {
    marginTop: Spacings.s28,
  },
});

export default AuthScreen;
