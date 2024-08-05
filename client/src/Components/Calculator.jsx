import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTimes, FaDivide, FaPercent, FaEquals, FaUndo, FaRegCircle, FaBackspace } from 'react-icons/fa';
import styles from '../assets/styles/Calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setHistory((prev) => [...prev, input]); // Save current input to history
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Replace percentage sign with the appropriate calculation logic
      // For example: 100 * 12% -> 100 - (100 * 12 / 100)
      const modifiedInput = input.replace(/(\d+)\s*\*\s*(\d+)%/g, (match, p1, p2) => 
        `${p1} - (${p1} * ${p2} / 100)`
      );

      // Evaluate the modified input
      const calculatedResult = eval(modifiedInput);

      // Check if result is a number and format accordingly
      if (!isNaN(calculatedResult)) {
        setResult(calculatedResult);
        setInput(calculatedResult.toString()); // Display the result in the input field
        setHistory((prev) => [...prev, input + ' = ' + calculatedResult]); // Save result to history
      } else {
        throw new Error('Invalid calculation');
      }
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastInput = history.pop(); // Get last input from history
      setInput(lastInput);
      setHistory([...history]); // Update history
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <input type="text" value={input} readOnly />
        {/* Result is displayed in the input field directly */}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className={styles.operator} onClick={() => handleButtonClick('+')}><FaPlus /></button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className={styles.operator} onClick={() => handleButtonClick('-')}><FaMinus /></button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className={styles.operator} onClick={() => handleButtonClick('*')}><FaTimes /></button>
        <button className={`${styles.zero}`} onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className={styles.operator} onClick={() => handleButtonClick('%')}><FaPercent /></button>
        <button className={styles.operator} onClick={() => handleButtonClick('/')}><FaDivide /></button>
        <button onClick={handleClear}>C</button>
        <button className={styles.undo} onClick={handleUndo}><FaUndo /></button>
        <button className={styles.operator} onClick={handleCalculate}><FaEquals /></button>
      </div>
    </div>
  );
};

export default Calculator;
