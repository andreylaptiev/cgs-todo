import React from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import IRootStackParamList from '../../types/route.type';
import Button from '../../components/common/Button';
import { Spacings } from '../../constants/theme';
import { container, title } from '../../styles/base';
import { useMutation } from 'react-query';
import { IUserRegister } from '../../types/user.type';
import userService from '../../service/user.service';
import registerValidation from '../../validation/register.validation';
import CustomTextInput from '../../components/common/CustomTextInput';

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
            <CustomTextInput
              error={errors.username}
              field="username"
              label="Username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.username}
              touched={touched.username}
            />
            <CustomTextInput
              error={errors.email}
              field="email"
              label="Email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              touched={touched.email}
            />
            <CustomTextInput
              error={errors.password}
              field="password"
              label="Password"
              secureTextEntry={true}
              touched={touched.password}
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <CustomTextInput
              error={errors.verifyPassword}
              field="verifyPassword"
              label="Verify password"
              secureTextEntry={true}
              touched={touched.verifyPassword}
              value={values.verifyPassword}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
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
