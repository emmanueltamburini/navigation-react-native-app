import {StyleSheet} from 'react-native';

export const defaultTheme = {
  colors: {
    primary: 'rgb(0, 104, 116)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(151, 240, 255)',
    onPrimaryContainer: 'rgb(0, 31, 36)',
    secondary: 'rgb(74, 98, 103)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(88, 86, 214)',
    onSecondaryContainer: 'rgb(5, 31, 35)',
  },
};

export const colors = {
  primary: '#5856D6',
  white: 'white',
  black: 'black',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuButton: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 20,
  },
});
