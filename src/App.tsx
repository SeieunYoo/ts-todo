import { useDispatch } from 'react-redux';
import useInput from './hooks/useInput';
import { dispatchAddToDo } from './redux/store';

function App() {
  const { text, onChange, setText } = useInput();
  const dispatch = useDispatch();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setText('');

    if (text.trim()) {
      dispatch(dispatchAddToDo(text));
    }
  }
  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={onChange}
        />
        <button>+</button>
      </form>
    </>
  );
}

export default App;
