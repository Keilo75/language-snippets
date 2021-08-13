import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ISnippet {
  id: string;
  text: string;
  translation: string;
}

export type Action =
  | {
      method: 'init';
      array: ISnippet[];
    }
  | {
      method: 'add';
      snippet: ISnippet;
    };

export const reducer = (state: ISnippet[], action: Action) => {
  switch (action.method) {
    case 'init': {
      return action.array;
    }

    case 'add': {
      const newSnippet = action.snippet;
      newSnippet.id = uuid();
      const newState = [...state, newSnippet];
      handleChange(newState);

      return [...state, newSnippet];
    }
  }
};

const handleChange = (state: ISnippet[]) => {
  AsyncStorage.setItem('snippets', JSON.stringify(state));
};
