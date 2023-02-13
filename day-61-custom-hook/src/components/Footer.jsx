import React from "react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  function handleSelectChange(e) {
    e.preventDefault();
    setTheme(e.target.value);
  }
  const { theme, setTheme } = useTheme();
  return (
    <div className="footer-container">
      <p>Footer</p>
      <select name="theme" onChange={handleSelectChange} defaultValue={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
