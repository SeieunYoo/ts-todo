import { useSelector, useDispatch } from 'react-redux';
import { dispatchDeleteToDo, dispatchToggleToDo } from '../redux/store';

type IListState = {
  isToDo: boolean;
};

function List({ isToDo }: IListState) {
  type IToDoState = {
    text: string;
    id: number;
    toDo: boolean;
  };

  const dispatch = useDispatch();
  const toDo: IToDoState[] = useSelector((state: IToDoState[]) => state);

  const toDolist = toDo ? toDo.filter((todos) => todos.toDo === isToDo) : [];

  function deleteToDo(id: number) {
    dispatch(dispatchDeleteToDo(id));
  }

  function toggleToDo(id: number) {
    dispatch(dispatchToggleToDo(id));
  }

  return (
    <ul>
      {toDolist.map((todos: any) => (
        <>
          <li key={todos.id}>
            {todos.text}
            <button onClick={() => deleteToDo(todos.id)}>delete</button>
            <button onClick={() => toggleToDo(todos.id)}>toggle</button>
          </li>
        </>
      ))}
    </ul>
  );
}

export default List;
