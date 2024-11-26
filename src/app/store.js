import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import malefemaleReduser from "../components/slices/MaleFemaleSlice";
import genderReduser from "../components/slices/GenderCategorySlice";
import subcategoryReduser from "../components/slices/NavSlice";
import productsReduser from "../components/slices/ProductsSlice"
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    gender: malefemaleReduser,
    category: genderReduser,
    subcategory: subcategoryReduser,
    products: productsReduser
  },
});
