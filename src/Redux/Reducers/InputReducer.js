export const InputReducer = (state = "", action) => {
  if (action.type === "GETVALUE") {
    return (state = action.payload);
  }

  return state;
};
