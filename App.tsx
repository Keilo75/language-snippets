import React, { useEffect, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import { FlatList, StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { reducer, ISnippet } from './components/Reducer';
import Snippet from './components/Snippet';
import AddSnippet from './components/AddSnippet';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisiblity = () => {
    setModalVisible((bool) => !bool);
  };

  useEffect(() => {
    AsyncStorage.getItem('snippets').then((value) => {
      let initialData: ISnippet[] = value ? JSON.parse(value) : [];
      dispatch({ method: 'init', array: initialData });
    });
  }, []);

  return (
    <View style={styles.body}>
      <Header title="Language Snippets">
        <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={toggleModalVisiblity}>
          <Text style={[styles.text, styles.btnText]}>
            <Icon name="plus" color="white" size={20} /> Create
          </Text>
        </TouchableOpacity>
      </Header>

      <AddSnippet modalVisibility={modalVisible} toggleModalVisiblity={toggleModalVisiblity} dispatch={dispatch} />
      <FlatList<ISnippet>
        data={state.sort((a, b) => a.text.localeCompare(b.text))}
        renderItem={({ item }) => <Snippet snippet={item} />}
        style={styles.scroll}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#232b36',
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: 'white',
  },
  scroll: {
    marginBottom: 15,
  },
  btn: {
    backgroundColor: '#1dad76',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: { textAlign: 'center', fontSize: 20 },
});
