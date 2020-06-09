import React, {useState} from 'react';



function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(20);
    function updateLit(){
        setLit(!isLit)
    }
  return (
    <div>
        Thia Room is {isLit ? "Lit" : "Dark" }
        <br />
        Age = {age}
        <br />
        <button onClick={updateLit}>Toggle Button</button>
        <br />
        <button onClick={() => setAge(++age)}>Increase Age</button>
    </div>
  );
}

export default Room;
