import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    setEnteredNameIsTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
    } else setEnteredNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    // enteredName이 빈 값인 경우 제출이 안 되게 수정
    // trim()을 적용했을 때 " abc " -> "abc"
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("");
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  // 에러 메시지를 보여주는 경우, true -> 메시지 노출
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">당신의 이름은?</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">이름값은 빈 값이 아니어야 합니다.</p>
        )}
      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
