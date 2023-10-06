export const Increment = () => {
  return { type: "INCREMENT" };
};

export const Decrement = () => {
  return { type: "DECREMENT" };
};

export const GetValue = (payload) => {
  return { type: "GETVALUE", payload: payload };
};
