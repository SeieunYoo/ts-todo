import { useState } from 'react';

const useInput = () => {
  const [text, setText] = useState<string>('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return { text, onChange, setText };
};

export default useInput;
