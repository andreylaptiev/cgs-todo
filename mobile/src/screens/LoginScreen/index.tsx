import React from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Formik } from 'formik';
import Button from '../../components/common/Button';
import { container, title } from '../../styles/base';
import { Spacings } from '../../constants/theme';
import { IUserLogin } from '../../types/user.type';
import userService from '../../service/user.service';
import { useMutation } from 'react-query';
import loginValidation from '../../validation/login.validation';
import CustomTextInput from '../../components/common/CustomTextInput';
import { ILoginScreenProps } from '../../types/screen.type';

const LoginScreen = ({ navigation }: ILoginScreenProps) => {
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
              error={errors.password}
              field="password"
              label="Password"
              secureTextEntry={true}
              touched={touched.password}
              value={values.password}
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
