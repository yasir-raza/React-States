import React, {useState} from 'react';
import './Room.css';


function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(20);
    let [temp, setTemp] = useState(72);
    function updateLit(){
        setLit(!isLit)
    }
  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        Thia Room is {isLit ? "Lit" : "Dark" }
        <br />
        Age = {age}
        <br />
        <button onClick={updateLit}>Toggle Button</button>
        <br />
        <button onClick={() => setAge(++age)}>Increase Age</button>
        <br />
        <button onClick={() => setLit(true)}>ON</button>
        <button onClick={() => setLit(false)}>OFF</button>

        <br />
        Room Temperature : {temp}
        <br />
        <button onClick={() => setTemp(temp+1)}>+</button>
        <button onClick={() => setTemp(temp-1)}>-</button>
    </div>
  );
}

export default Room;
