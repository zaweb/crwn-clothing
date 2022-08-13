import CATEGORIES_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    // const response = await fetch('https://api.myjson.com/bins/1hjv0');
    const categoriesArray = await getCategoriesAndDocuments('categories');

    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    // dispatch(fetchCategoriesFailure(error));
  }
}

// export const fetchCategoriesIfNeeded = () => (dispatch, getState) => {
//   const { categories } = getState();
//   if (categories.categories.length === 0) {
//     dispatch(fetchCategoriesAsync());
//   }
// }

// export const setCategoriesIfNeeded = () => (dispatch, getState) => {
//   const { categories } = getState();
//   if (categories.categories.length === 0) {
//     dispatch(fetchCategoriesAsync());
//   }
// }

// export const setCategoriesIfNeededAndClearError = () => (dispatch, getState) => {
//   const { categories } = getState();
//   if (categories.categories.length === 0) {
//     dispatch(fetchCategoriesAsync());
//   }
//   dispatch(clearError());
// }

export const clearError = () => createAction(CATEGORIES_ACTION_TYPES.CLEAR_ERROR);

export const clearCategories = () => createAction(CATEGORIES_ACTION_TYPES.CLEAR_CATEGORIES);

// export const clearCategoriesAndError = () => (dispatch) => {
//   dispatch(clear
