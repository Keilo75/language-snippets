import { useReducer } from 'react';

export interface ISnippet {
  id: string;
  text: string;
  translation: string;
}

type Action = {
  method: 'init';
  array: ISnippet[];
};

export const reducer = (state: ISnippet[], action: Action) => {
  switch (action.method) {
    case 'init': {
      return action.array;
    }
  }
};
