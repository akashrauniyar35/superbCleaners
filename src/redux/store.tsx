import { configureStore } from '@reduxjs/toolkit';
import quoteSlice from '../redux/slice';

export default configureStore({
    reducer: quoteSlice,
})