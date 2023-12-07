import React, { useState } from 'react';
import "./Calculator.css"

const Calculator = () => {

    const [value, setValue] = useState("");

    function handleClick(e) {
        setValue(value.concat(e.target.name))
    }

    function clearDisplay() {
        setValue("")
    }

    function operation() {
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue("Error");
        }
    }

    return (
        <div>
            <div id='title'>
                <h1>Calculator</h1>
            </div>
            <div className='container'>
                <div className='main'>
                    <div className='box'>
                        <input id="box-content" type="text" value={value} placeholder="0" />
                    </div>
                    <div className='content'>
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                        <button name="+" onClick={handleClick} className="operator">+</button>
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                        <button name="-" onClick={handleClick} className="operator">-</button>
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button>
                        <button name="9" onClick={handleClick}>9</button>
                        <button name="*" onClick={handleClick} className="operator">x</button>
                        <button onClick={clearDisplay}>C</button>
                        <button name="0" onClick={handleClick}>0</button>
                        <button name="/" onClick={handleClick} className="operator">/</button>
                        <button onClick={operation} className="equal">=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator