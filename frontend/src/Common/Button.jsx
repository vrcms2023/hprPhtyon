import React from "react";
import { useSelector } from 'react-redux'


const Button = ({ type, cssClass, label, handlerChange }) => {
  const { isLoading } = useSelector((state) => state.loader)
  console.log(isLoading)
  return (
    <button
      type={type}
      className={`${cssClass}`}
      onClick={() => handlerChange(label)}
    >
     {isLoading ? (<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>)  : ''}
      &nbsp; {label}{" "}
    </button>
  );
};

export default Button;
