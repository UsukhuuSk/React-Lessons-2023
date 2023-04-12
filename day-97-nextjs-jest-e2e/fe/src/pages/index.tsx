import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  function add() {
    setResult(num1 + num2);
  }
  function subtract() {
    setResult(num1 - num2);
  }
  function multiply() {
    setResult(num1 * num2);
  }
  function divide() {
    setResult(num1 / num2);
  }
  return (
    <div className={styles.container}>
      <div data-testid="result" className={styles.result}>
        {result}
      </div>
      <input
        className={styles.input}
        type="number"
        data-testid="num1"
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        className={styles.input}
        type="number"
        data-testid="num2"
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button data-testid="add" onClick={add} className={styles.button}>
        Add
      </button>
      <button
        data-testid="subtract"
        onClick={subtract}
        className={styles.button}
      >
        Subtract
      </button>
      <button
        data-testid="multiply"
        onClick={multiply}
        className={styles.button}
      >
        Multiply
      </button>
      <button data-testid="divide" onClick={divide} className={styles.button}>
        Divide
      </button>
    </div>
  );
}
