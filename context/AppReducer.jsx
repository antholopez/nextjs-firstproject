export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    default:
      return state;
  }
};
