import TipButton from "../UI/TipButton";
import TipInput from "../UI/TipInput";
import classes from "./TipInputList.module.scss";

const TipInputList = ({ reset }) => {
  return (
    <div className={classes.listWrapper}>
      <p className={classes.title}>Select Tip %</p>
      <div className={classes.buttons}>
        <TipButton value={5} />
        <TipButton value={10} />
        <TipButton value={15} />
        <TipButton value={25} />
        <TipButton value={50} />
        <TipInput />
      </div>
    </div>
  );
};

export default TipInputList;
