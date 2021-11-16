import { useEffect, useState, useCallback, useRef } from "react";
import classes from "./TipInput.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateTip } from "../../features/tipSlice";

const classList = {
  default: classes.customInput,
  active: classes.customInput + " " + classes.active,
  bolded: classes.customInput + " " + classes.bolded,
  activeAndBolded:
    classes.customInput + " " + classes.active + " " + classes.bolded,
};

const TipInput = () => {
  const dispatch = useDispatch();
  const [activeClass, setActiveClass] = useState();
  const { tip, reset } = useSelector((state) => state.tips);
  const [currentValue, setCurrentValue] = useState();
  const inputRef = useRef();

  const changeHandler = (e) => {
    const passedValue = e.target.value === "" ? 0 : parseFloat(e.target.value);
    dispatch(updateTip(passedValue));
  };

  useEffect(() => {
    if (tip === currentValue) setActiveClass(classList.active);
    else {
      setActiveClass(classList.default);
      setCurrentValue(null);
    }
  }, [tip, currentValue, setActiveClass]);

  const resets = useCallback(() => {
    if (reset) {
      setActiveClass(classList.default);
      inputRef.current.value = 0;
    }
  }, [reset]);

  useEffect(() => {
    resets();
  }, [resets]);

  return (
    <input
      onChange={changeHandler}
      onFocus={(e) => e.target.select()}
      className={activeClass}
      ref={inputRef}
      placeholder="Custom"
    />
  );
};

export default TipInput;
