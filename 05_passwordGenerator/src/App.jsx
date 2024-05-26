import { useState, useCallback ,useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //ref hook
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]_+:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(() => {
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])
  return (
    <div className="w-full max-w-md px-4 mx-auto my-8 text-orange-500 bg-gray-500 rounded-lg shadow-md">
      <h1 className="text-center text-white">Password Generator</h1>
      <div className="flex mb-4 overflow-hidden rounded-lg shadow">
        <input
          type="text"
          value={password}
          className="w-full px-3 py-1 text-white bg-gray-700 outline-none"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipBoard} 
        className='text-white bg-blue-700 outline-none px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min = {6}
          max = {100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setLength(e.target.value)}}/>
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() =>{
            setNumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='numberInput'
          onChange={(e) =>{
            setNumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
