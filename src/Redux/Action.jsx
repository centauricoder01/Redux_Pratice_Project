export const IncreaseValue = (payload) => {
  return {
    type: "Increase",
    payload,
  };
};

export const DecreaseValue = (payload) => {
  return {
    type: "Decrease",
    payload,
  };
};
