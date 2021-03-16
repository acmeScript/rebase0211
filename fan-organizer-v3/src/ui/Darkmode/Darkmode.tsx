import React from "react";
import s from './Darkmode.module.css';

export const Darkmode: React.FunctionComponent<{
  src: string;
  size?: number;
  setDarkMode?: any;
}> = ({ src, size = 48, setDarkMode, darkMode }) => {
  return (
        <button
            onClick={()=>setDarkMode(!darkMode)}
            data-testid="dark-mode-action"
            >
            | dark |
        </button>
  );
};
