import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
	if (action.type==="logout"){
		return{...state ,authenticated: false, userName: "", _id: ""};
	}
	return { ...state, authenticated: true, userName: action.userName, _id:action._id }
}

// Stores the currently selected armor for users
const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		authenticated: false,
		userName: "",
		_id:"",
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useUserContext = () => {
	return useContext(UserContext);
}; export { UserProvider, useUserContext };