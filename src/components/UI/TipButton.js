import { useEffect, useState } from "react";
import classes from "./TipButton.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateTip } from "../../features/tipSlice";

const classList = {
  default: classes.btn,
  active: classes.btn + " " + classes.active,
};

const TipButton = ({ value }) => {
  const dispatch = useDispatch();
  const [activeClass, setActiveClass] = useState();
  const { tip, reset } = useSelector((state) => state.tips);

  useEffect(() => {
    tip === value
      ? setActiveClass(classList.active)
      : setActiveClass(classList.default);
  }, [tip, value, setActiveClass]);

  useEffect(() => {
    if (reset) {
      setActiveClass(classList.default);
    }
  }, [reset, setActiveClass]);

  return (
    <button
      onClick={(e) => dispatch(updateTip(parseFloat(value)))}
      className={activeClass}
    >
      {value}%
    </button>
  );
};

export default TipButton;
