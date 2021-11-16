import { configureStore } from "@reduxjs/toolkit";
import tipSlice from "../features/tipSlice";

export default configureStore({
  reducer: {
    tips: tipSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
