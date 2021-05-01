const orderReducer = (state = {}, action) => {
	switch (action.type) {
		case "NEW":
			return action.payload;
		case "CLEAR":
			return {};
		default:
			return state;
	}
};
export default orderReducer;
