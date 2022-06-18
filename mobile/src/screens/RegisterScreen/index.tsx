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
import { Colors, Spacings } from '../../constants/theme';
import { container, input, title } from '../../styles/base';
import { useMutation } from 'react-query';
import { IUserRegister } from '../../types/user.type';
import userService from '../../service/user.service';
import registerValidation from '../../validation/register.validation';

type Props = NativeStackScreenProps<IRootStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const initialValues: IUserRegister = {
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
  };

  const registerUser = useMutation(userService.register.bind(userService), {
    onError: (err) => console.log(err),
    onSuccess: () => navigation.navigate('Home'),
  });

  return (
    <SafeAreaView style={container.default}>
      <View style={styles.title}>
        <Text style={title.h1}>Register</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: IUserRegister) => registerUser.mutate(values)}
        validationSchema={registerValidation}
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
            <Text>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={input.text}
              value={values.email}
            />
            {(errors.email && touched.email) &&
              <Text style={styles.errorText}>{errors.email}</Text>
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
            <Text>Verify password</Text>
            <TextInput
              onChangeText={handleChange('verifyPassword')}
              onBlur={handleBlur('verifyPassword')}
              style={input.text}
              secureTextEntry={true}
              value={values.verifyPassword}
            />
            {(errors.verifyPassword && touched.verifyPassword) &&
              <Text style={styles.errorText}>{errors.verifyPassword}</Text>
            }
            <View style={styles.submit}>
              <Button
                onPress={
                  (handleSubmit as unknown) as (
                    // eslint-disable-next-line no-unused-vars
                    event: GestureResponderEvent
                  ) => void
                }
                title='Register'
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

export default RegisterScreen;
