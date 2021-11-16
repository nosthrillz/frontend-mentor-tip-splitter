export const getTotalTip = ({ bill, tip, people }) => {
  if (emptyCheck(bill, people) === 0 || tip === 0) return 0;

  return formulaTotalTip(bill, tip, people);
};

export const getTotal = ({ bill, tip, people }) => {
  if (emptyCheck(bill, people) === 0) return 0;

  if (tip === 0) return billPeople(bill, people);

  return formulaTotal(bill, tip, people);
};

/*
Helpers
*/
const billPeople = (bill, people) =>
  Math.round((bill / people + Number.EPSILON) * 100) / 100;

const formulaTotalTip = (bill, tip, people) =>
  Math.round((((bill / people) * tip) / 100 + Number.EPSILON) * 100) / 100;

const formulaTotal = (bill, tip, people) =>
  Math.round(
    (bill / people + (bill * tip) / 100 / people + Number.EPSILON) * 100
  ) / 100;

const emptyCheck = (bill, people) => {
  if (bill === 0 || people === 0 || bill === null || people === null) return 0;
};
