import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Colors, Spacings } from '../../constants/theme';
import { input } from '../../styles/base';
import { ICustomTextInput } from '../../types/components.type';

const CustomTextInput = ({
  error,
  field,
  label,
  touched,
  value,
  handleBlur,
  handleChange,
  secureTextEntry=false,
}: ICustomTextInput) => {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        style={input.text}
        secureTextEntry={secureTextEntry}
        value={value}
        onBlur={handleBlur(field)}
        onChangeText={handleChange(field)}
      />
      {(error && touched) &&
        <Text style={styles.errorText}>{error}</Text>
      }
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: Colors.red,
    marginBottom: Spacings.s12,
  },
});

export default CustomTextInput;
