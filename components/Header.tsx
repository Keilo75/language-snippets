import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  children: JSX.Element;
}

const Header: React.FC<Props> = ({ title, children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#0a0e14',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: { color: 'white', fontSize: 23 },
});

export default Header;
