import { createSlice } from "@reduxjs/toolkit";
import { getTotalTip, getTotal } from "./totalCalc";

const INITIAL_STATE = {
  bill: 0,
  tip: 0,
  people: 0,
  totalTip: 0,
  total: 0,
  reset: false,
};

export const tipSlice = createSlice({
  name: "tips",
  initialState: {
    bill: INITIAL_STATE.bill,
    tip: INITIAL_STATE.tip,
    people: INITIAL_STATE.people,
    tipPercent: INITIAL_STATE.tipPercent,
    totalTip: INITIAL_STATE.totalTip,
    total: INITIAL_STATE.total,
    reset: INITIAL_STATE.reset,
  },
  reducers: {
    updateTip: (state, action) => {
      state.tip = action.payload === null ? 0 : action.payload;
      state.totalTip = getTotalTip(state);
      state.total = getTotal(state);
    },
    updateBill: (state, action) => {
      state.bill = action.payload === null ? 0 : action.payload;
      state.totalTip = getTotalTip(state);
      state.total = getTotal(state);
    },
    updatePeople: (state, action) => {
      state.people = action.payload === null ? 0 : action.payload;
      state.totalTip = getTotalTip(state);
      state.total = getTotal(state);
    },
    resetFlag: (state) => {
      state.reset = !state.reset;
      state.tip = INITIAL_STATE.tip;
      state.bill = INITIAL_STATE.bill;
      state.people = INITIAL_STATE.people;
      state.totalTip = INITIAL_STATE.totalTip;
      state.total = INITIAL_STATE.total;
    },
  },
});

export const { updateTip, updateBill, updatePeople, resetFlag } =
  tipSlice.actions;

export default tipSlice.reducer;
