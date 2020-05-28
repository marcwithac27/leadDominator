import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
	if (action.type==="logout"){
		return{authenticated: false, userName: "", _id: ""};
	}
	return { authenticated: true, userName: action.userName, _id:action._id }
}

const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		authenticated: false,
		userName: "",
		_id:"",
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const CurrentUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, CurrentUserContext };
