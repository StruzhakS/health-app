import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const makeSelectMeal = () =>
  createSelector(
    selectUser,
    (_, selectedMeal) => selectedMeal,
    (user, selectedMeal) => user[selectedMeal.toLowerCase()]
  );
