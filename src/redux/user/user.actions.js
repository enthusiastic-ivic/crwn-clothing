import { userActionType } from "./user.types";

const setCurrentUser = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
