import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueInputBlurHandler = (event) => {
    setisTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setisTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
