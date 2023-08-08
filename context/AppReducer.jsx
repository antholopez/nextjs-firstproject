export default (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    default:
      return state;
  }
};
