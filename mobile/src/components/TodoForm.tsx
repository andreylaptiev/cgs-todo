import Checkbox from 'expo-checkbox';
import { Formik } from 'formik';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Spacings } from '../constants/theme';
import { input } from '../styles/base';
import { ITodoForm } from '../types/todo.type';
import Button from '../components/common/Button';

const TodoForm = ({ initialValues, onSubmit }: ITodoForm) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
      }) => (
        <View>
          <Text style={styles.fieldTitle}>Title</Text>
          <TextInput
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            style={input.text}
            value={values.title}
          />
          <Text style={styles.fieldTitle}>Desciption</Text>
          <TextInput
            multiline={true}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            style={input.text}
            value={values.description}
          />
          <Text style={styles.fieldTitle}>Year</Text>
          <TextInput
            onChangeText={handleChange('year')}
            onBlur={handleBlur('year')}
            style={input.text}
            value={values.year}
          />
          <View style={styles.check}>
            <Text>Public</Text>
            <Checkbox
              value={values.isPublic}
              onValueChange={() => setFieldValue(
                  'isPublic',
                  !values.isPublic,
              )}
            />
          </View>
          <View style={styles.check}>
            <Text>Completed</Text>
            <Checkbox
              value={values.isCompleted}
              onValueChange={() => setFieldValue(
                  'isCompleted',
                  !values.isCompleted,
              )}
            />
          </View>
          <View style={styles.submit}>
            <Button
              onPress={
                (handleSubmit as unknown) as (
                  // eslint-disable-next-line no-unused-vars
                  event: GestureResponderEvent
                ) => void
              }
              title='Create'
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  check: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: Spacings.s28,
  },
  fieldTitle: {
    alignSelf: 'flex-start',
  },
  submit: {
    marginTop: Spacings.s28,
  },
});

export default TodoForm;
