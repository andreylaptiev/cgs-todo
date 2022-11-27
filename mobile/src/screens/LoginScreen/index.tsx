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
import { container, input, title } from '../../styles/base';
import { Spacings } from '../../constants/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type LoginFormValues = {
  usernameEmail: string;
  password: string;
};

const LoginScreen = ({ navigation }: Props): JSX.Element => {
  const initialValues: LoginFormValues = { usernameEmail: '', password: '' };

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={container.default}>
      <View style={styles.title}>
        <Text style={title.h1}>Login</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <Text>Username / Email</Text>
            <TextInput
              onChangeText={handleChange('usernameEmail')}
              onBlur={handleBlur('usernameEmail')}
              style={input.text}
              value={values.usernameEmail}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={input.text}
              secureTextEntry={true}
              value={values.password}
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
