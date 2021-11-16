import { useDispatch, useSelector } from "react-redux";
import classes from "./ResetButton.module.scss";
import { resetFlag } from "../../features/tipSlice";

const ResetButton = () => {
  const { bill, tip, people } = useSelector((state) => state.tips);
  const dispatch = useDispatch();

  const isDisabled = bill === 0 && tip === 0 && people === 0;

  const resetFields = (e) => {
    dispatch(resetFlag());
    setTimeout(() => dispatch(resetFlag()), 100);
  };

  return (
    <button className={classes.btn} onClick={resetFields} disabled={isDisabled}>
      RESET
    </button>
  );
};

export default ResetButton;
