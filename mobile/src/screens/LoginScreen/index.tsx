import React from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import IRootStackParamList from '../../types/route.type';
import Button from '../../components/common/Button';
import { container, input, title } from '../../styles/base';
import { Colors, Spacings } from '../../constants/theme';
import { IUserLogin } from '../../types/user.type';
import userService from '../../service/user.service';
import { useMutation } from 'react-query';
import loginValidation from '../../validation/login.validation';

type Props = NativeStackScreenProps<IRootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const initialValues: IUserLogin = { username: '', password: '' };

  const loginUser = useMutation(userService.login.bind(userService), {
    onSuccess: () => navigation.navigate('Home'),
  });

  return (
    <SafeAreaView style={container.default}>
      <View style={styles.title}>
        <Text style={title.h1}>Login</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: IUserLogin) => loginUser.mutate(values)}
        validationSchema={loginValidation}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors, touched,
        }) => (
          <View style={styles.form}>
            <Text>Username</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              style={input.text}
              value={values.username}
            />
            {(errors.username && touched.username) &&
              <Text style={styles.errorText}>{errors.username}</Text>
            }
            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={input.text}
              secureTextEntry={true}
              value={values.password}
            />
            {(errors.password && touched.password) &&
              <Text style={styles.errorText}>{errors.password}</Text>
            }
            <View style={styles.submit}>
              <Button
                onPress={
                  (handleSubmit as unknown) as (
                    // eslint-disable-next-line no-unused-vars
                    event: GestureResponderEvent
                  ) => void
                }
                title='Login'
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: Colors.red,
    marginBottom: Spacings.s12,
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    marginTop: Spacings.s28,
  },
  title: {
    marginBottom: Spacings.s28,
  },
});

export default LoginScreen;
