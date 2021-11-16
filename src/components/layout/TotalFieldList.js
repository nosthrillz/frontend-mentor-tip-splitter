import { useSelector } from "react-redux";
import TotalField from "../UI/TotalField";

import classes from "./TotalFieldList.module.scss";

const TotalFieldList = () => {
  const { total, totalTip } = useSelector((state) => state.tips);

  return (
    <div className={classes.fields}>
      <TotalField value={totalTip}>Tip Amount</TotalField>
      <TotalField value={total}>Total</TotalField>
    </div>
  );
};

export default TotalFieldList;
