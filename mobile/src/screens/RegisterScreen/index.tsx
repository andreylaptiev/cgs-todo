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
import { Formik, FormikValues } from 'formik';
import { RootStackParamList } from '../../routes';
import Button from '../../components/common/Button';
import { Spacings } from '../../constants/theme';
import { container, input, title } from '../../styles/base';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
  verifyPassword: string;
};

const RegisterScreen = ({ navigation }: Props): JSX.Element => {
  const initialValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
  };

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={container.default}>
      <View style={styles.title}>
        <Text style={title.h1}>Register</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <Text>Username</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              style={input.text}
              value={values.username}
            />
            <Text>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={input.text}
              value={values.email}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={input.text}
              secureTextEntry={true}
              value={values.password}
            />
            <Text>Verify password</Text>
            <TextInput
              onChangeText={handleChange('verifyPassword')}
              onBlur={handleBlur('verifyPassword')}
              style={input.text}
              secureTextEntry={true}
              value={values.verifyPassword}
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
