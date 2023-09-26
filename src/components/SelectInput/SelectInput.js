import React, { useState } from "react";

const CustomSelect = ({
  handleChange,
  selectedValue,
  label = true,
  options = [
    { value: "option one", label: "Option One" },
    { value: "option two", label: "Option Two" },
  ],
}) => {
  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        display: "inline-block",
        position: "relative",
      }}
    >
      {label && (
        <label
          style={{
            display: "block",
            background: "#fff",
            position: "absolute",
            top: "-10px",
            left: "10px",
            padding: "0 5px",
            fontSize: "10px",
          }}
        >
          Sort by
        </label>
      )}
      <select
        value={selectedValue}
        onChange={handleChange}
        style={{
          padding: "5px",
          border: "none",
          width: "100%",
          outline: "none",
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
