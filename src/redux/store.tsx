import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';
const TOGGLE = 'TOGGLE';

//action type 지정
export const dispatchAddToDo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

export const dispatchDeleteToDo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};

export const dispatchToggleToDo = (id: number) => {
  return {
    type: TOGGLE,
    id,
  };
};

interface IToDoState {
  text: string;
  id: number;
  toDo: boolean;
}

function reducer(state: IToDoState[] = [], action: any): IToDoState[] {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now(), toDo: true }];
    case DELETE:
      return state.filter((toDo: IToDoState) => toDo.id !== action.id);
    case TOGGLE:
      const toggleItem = state.filter(
        (toDo: IToDoState) => toDo.id == action.id
      );
      toggleItem[0].toDo = !toggleItem[0].toDo;
      return [...state];
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
