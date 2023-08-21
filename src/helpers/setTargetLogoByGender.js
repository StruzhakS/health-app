export const imagesByGoalAndGender = (userGender, goal, goalPicture) => {
  const genderPrefix = userGender === 'male' ? 'men' : 'girl';

  switch (goal) {
    case 'lose fat':
      return goalPicture[`lose_fat_${genderPrefix}`];
    case 'maintain':
      return goalPicture[`maintake_${genderPrefix}`];
    case 'gain muscle':
      return goalPicture.gain_muscle;
    default:
      return goalPicture[`lose_fat_${genderPrefix}`];
  }
};
