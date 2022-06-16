import { Dimensions, StyleSheet } from 'react-native';
import { Colors, FontSize, Spacings } from '../../constants/theme';

const width = Dimensions.get('window').width; // full width

export const button = StyleSheet.create({
  default: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderStyle: 'solid',
    borderWidth: 1,
    color: Colors.black,
    paddingHorizontal: Spacings.s28,
    paddingVertical: Spacings.s8,
  },
  title: {
    fontSize: FontSize.fs18,
    alignSelf: 'center',
  },
  compact: {
    paddingHorizontal: Spacings.s8,
  },
});

export const container = StyleSheet.create({
  default: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacings.s20,
    paddingVertical: Spacings.s20,
  },
  top: {
    justifyContent: 'flex-start',
  },
});

export const input = StyleSheet.create({
  text: {
    borderWidth: 1,
    marginVertical: Spacings.s12,
    padding: Spacings.s8,
    width: width * 0.8,
  },
});

export const title = StyleSheet.create({
  h1: {
    fontSize: FontSize.fs24,
    fontWeight: '700',
  },
});
