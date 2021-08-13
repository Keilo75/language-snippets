import React from 'react';
import { ISnippet } from './Reducer';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  snippet: ISnippet;
}

const Snippet: React.FC<Props> = ({ snippet }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.text}>{snippet.text}</Text>
        <Text style={styles.translation}>{snippet.translation}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: '#3e4c5e',
    alignSelf: 'stretch',
    minHeight: 70,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  translation: {
    color: '#1dad76',
    fontSize: 20,
  },
});

export default Snippet;
