import React from "react";
import "./TransparentButton.scss"; // Импортируем стили из CSS-модуля

function TransparentButton({ text, onClick }) {
  return (
    <button className="transparentButton" onClick={onClick}>
      {text}
    </button>
  );
}

export default TransparentButton;
