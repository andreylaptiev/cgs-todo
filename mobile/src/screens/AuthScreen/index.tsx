import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import IRootStackParamList from '../../types/route.type';
import Button from '../../components/common/Button';
import { Spacings } from '../../constants/theme';
import { container } from '../../styles/base';

type Props = NativeStackScreenProps<IRootStackParamList, 'Auth'>;

const AuthScreen = ({ navigation }: Props): JSX.Element => {
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
