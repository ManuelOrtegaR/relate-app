import { StyleSheet } from 'react-native';

const colorSchema = {
  primary: "#FF7A17",
  secondary: "#C63A32",
  info: "#0F3047",
  info_light: "#1A6396",
  light: "#F4C05F",
  white: "#FFFBE4",
  gray: "#474747",
  dark: "#C63A3280"
}


const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    backgroundColor: colorSchema.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    justifyContent: 'flex-start',
  },
  wrapper: {
    width: '90%',
  },
  space: {
    marginBottom: 12,
  },
  logo: {
    big: {
      width: 128,
      height: 128,
      resizeMode: 'contain',
    },
    small: {
      width: 32,
      height: 32,
      resizeMode: 'contain',
    },
  },
  backgroundImage: {
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16,
  },
  button: {
    borderRadius: 50,
    padding: 12,
  },
  input: {
    backgroundColor: colorSchema.white,
    borderWidth: 2,
    borderColor: colorSchema.white,
    borderRadius: 50,
    fontSize: 16,
    padding: 12,
    width: '100%',
    textAlign: 'center',
  },
  inputError: {
    borderColor: 'red',
  },
  primary: {
    background: {
      backgroundColor: colorSchema.info,
      borderWidth: 2,
      borderColor: colorSchema.info,
    },
    text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  },
  secondary: {
    background: {
      borderWidth: 2,
      borderColor: colorSchema.white,
    },
    text: {
      color: colorSchema.white,
      fontSize: 16,
      textAlign: 'center',
    },
  },
  facebook: {
    background: {
      backgroundColor: colorSchema.info_light,
      borderWidth: 2,
      borderColor: colorSchema.info_light,
    },
    text: {
      color: colorSchema.white,
      fontSize: 16,
      textAlign: 'center',
    },
  },
  google: {
    background: {
      backgroundColor: colorSchema.white,
      borderWidth: 2,
      borderColor: colorSchema.white,
    },
    text: {
      color: colorSchema.gray,
      fontSize: 16,
      textAlign: 'center',
    },
  },
  colors: {
    background: "#FF7A17",
    primary: '#FF7A17',
    secondary: "#C63A32",
    info: "#0F3047",
    info_light: "#1A6396",
    light: "#F4C05F",
    white: "#FFFBE4",
    gray: "#474747",
    dark: "#C63A3280"
  },
});

export default styles;
