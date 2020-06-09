import React, {useState} from 'react';



function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(20);
    let [light, setLight] = useState(false);
    let [temp, setTemp] = useState(72);
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
        <br />
        light is {JSON.stringify(light)}
        <br />
        <button onClick={() => setLight(true)}>ON</button>
        <button onClick={() => setLight(false)}>OFF</button>

        light is {JSON.stringify(light)}
        <br />
        Room Temperature : {temp}
        <br />
        <button onClick={() => setTemp(temp+1)}>+</button>
        <button onClick={() => setTemp(temp-1)}>-</button>
    </div>
  );
}

export default Room;
