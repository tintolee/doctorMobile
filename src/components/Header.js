import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { theme } from './forms/Theme';
export const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.headerText}</Text>
      <Text style={styles.subText}>{props.subText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    height: '15%',
    alignItems: 'center',
    // bottom:10,
    // top:30,
    backgroundColor: theme.colors.white,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: theme.colors.black,
    marginBottom: 50,
    marginRight: 241,
    // marginBottom:90
  },

  subText: {
    color: theme.colors.inactiveTintColor,
    textAlign: 'center',
    paddingHorizontal: '10%',
    marginTop: -40,
    // top:10
  },
});

export default Header;
