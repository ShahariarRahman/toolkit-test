import React, { useState } from 'react';
import styles from './Counter.module.css';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
        >
          -
        </button>
        <span className={styles.value}>0</span>
        <button
          className={styles.button}
          aria-label="Increment value"
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
