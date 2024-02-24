"use client";
import Label from "./Label";
import React from "react";
const InputText = ({ register, name, placeholder, id, label, required, type = "text", errors }) => {
  return (
    <>
      <Label htmlFor={id} content={label} required={required} />
      <span className="input-wrapper mb-2">
        <input
          type={type}
          name={name}
          className="input-text"
          {...register(`${name}`, { required: required })}
          placeholder={placeholder}
        />
      </span>
    </>
  );
};
export default InputText;
