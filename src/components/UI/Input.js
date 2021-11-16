import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBill, updatePeople } from "../../features/tipSlice";
import { shouldSkipValue } from "../../utils/shouldSkipValue";

import classes from "./Input.module.scss";
import IconDollar from "../../images/icon-dollar.svg";
import IconPerson from "../../images/icon-person.svg";

const Input = ({ type }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [activeText, setActiveText] = useState(false);
  const { reset } = useSelector((state) => state.tips);
  const [error, setError] = useState(false);
  const text = type === "bill" ? "Bill" : "Number of People";
  const icon = type === "bill" ? IconDollar : IconPerson;
  let inputClasses = activeText && classes.bolded;
  inputClasses += error ? ` ${classes.error}` : "";

  const handler = (e) => {
    if (shouldSkipValue(e.target.value)) return;

    const passedValue = e.target.value === "" ? 0 : parseFloat(e.target.value);

    e.target.value = passedValue;
    if (type === "bill") dispatch(updateBill(passedValue));
    else dispatch(updatePeople(passedValue));
    zeroCheck(passedValue);
  };

  // error if zero
  const zeroCheck = (value) => {
    value === 0 ? setError(true) : setError(false);
  };

  // no error for first mount
  useEffect(() => {
    setError(false);
  }, []);

  // listen for reset change
  useEffect(
    function ResetInput() {
      if (reset) inputRef.current.value = 0;
    },
    [reset]
  );

  useEffect(
    function ToggleActiveClass() {
      if (parseFloat(inputRef.current.value) !== 0) setActiveText(true);
      else {
        setActiveText(false);
      }
    },
    [inputRef.current?.value]
  );

  return (
    <div className={classes.inputWrapper}>
      <p className={classes.title}>{text}</p>
      <input
        onChange={handler}
        onFocus={(e) => e.target.select()}
        placeholder={0}
        ref={inputRef}
        className={inputClasses}
      />
      <img src={icon} alt="input icon" />
      {error && <p className={classes.errorText}>Can't be zero</p>}
    </div>
  );
};

export default Input;
