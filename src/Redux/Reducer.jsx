const Reducer = (oldState, action) => {
  switch (action.type) {
    case "Increase":
      return {
        ...oldState,
        counter: oldState.counter + action.payload,
      };
    case "Decrease":
      return {
        ...oldState,
        counter: oldState.counter - action.payload,
      };
    default:
      return oldState;
  }
};

export default Reducer;
