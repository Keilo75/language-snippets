import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { reducer, ISnippet } from './components/Reducer';
import Snippet from './components/Snippet';

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const initialData = [
      { id: '24', text: 'Guten Tag', translation: 'Bonjour' },
      { id: '424', text: 'Wie gehts?', translation: 'Ca va?' },
      { id: '4241413', text: 'Mir geht es gut', translation: 'Ca va bien.' },
    ];

    dispatch({ method: 'init', array: initialData });
  }, []);

  const handleNewSnippet = () => {
    console.log('hi');
  };

  return (
    <View style={styles.body}>
      <Header title="Language Snippets" />
      <FlatList<ISnippet>
        data={state.sort((a, b) => a.text.localeCompare(b.text))}
        renderItem={({ item }) => <Snippet snippet={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#232b36',
  },
  text: {
    color: 'white',
  },
});
