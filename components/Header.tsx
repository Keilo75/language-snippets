import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { height: 60, padding: 15, backgroundColor: '#0a0e14', alignSelf: 'stretch' },
  text: { color: 'white', textAlign: 'center', fontSize: 23 },
});

export default Header;
