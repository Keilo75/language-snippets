import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Action } from './Reducer';

interface Props {
  modalVisibility: boolean;
  toggleModalVisiblity(): void;
  dispatch: React.Dispatch<Action>;
}

const AddSnippet: React.FC<Props> = ({ modalVisibility, toggleModalVisiblity, dispatch }) => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [errors, setErrors] = useState({ text: '', translation: '' });

  useEffect(() => {
    setText('');
    setTranslation('');
    setErrors({ text: '', translation: '' });
  }, [modalVisibility]);

  const handleTextChange = (string: string) => {
    setText(string);
  };

  const handleTranslationChange = (string: string) => {
    setTranslation(string);
  };

  const createSnippet = () => {
    const newErrors = {
      text: text.length === 0 ? '- Cannot be empty' : '',
      translation: translation.length === 0 ? '- Cannot be empty' : '',
    };

    setErrors(newErrors);

    if (newErrors.text.length > 0 || newErrors.translation.length > 0) return;

    setErrors({ translation: '', text: '' });
    setText('');
    setTranslation('');

    toggleModalVisiblity();

    // Create new snippet
    dispatch({
      method: 'add',
      snippet: {
        id: '',
        text,
        translation,
      },
    });
  };

  return (
    <View>
      <Modal
        isVisible={modalVisibility}
        onBackButtonPress={toggleModalVisiblity}
        onBackdropPress={toggleModalVisiblity}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Text {errors.text}</Text>
          <TextInput style={styles.input} onChangeText={handleTextChange} value={text} />
          <Text style={styles.text}>Translation {errors.translation}</Text>
          <TextInput style={styles.input} onChangeText={handleTranslationChange} value={translation} />
          <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={createSnippet}>
            <Text style={[styles.text, styles.btnText]}>Create Snippet</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 15,
    backgroundColor: '#232b36',
    borderRadius: 5,
  },
  input: {
    alignSelf: 'stretch',
    color: 'white',
    fontSize: 20,
    padding: 5,
    backgroundColor: '#3e4c5e',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#1dad76',
    padding: 5,
  },
  text: { color: 'white', fontSize: 20 },
  btnText: { textAlign: 'center' },
});

export default AddSnippet;
