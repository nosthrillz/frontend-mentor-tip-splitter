import classes from "./TotalField.module.scss";

const TotalField = ({ value, children }) => {
  const displayValue =
    Math.round(value) === value ? value + ".00" : parseFloat(value);

  return (
    <div className={classes.wrapper}>
      <div className={classes.texts}>
        <p>{children}</p>
        <span>/ person</span>
      </div>
      <p className={classes.value}>${displayValue}</p>
    </div>
  );
};

export default TotalField;
