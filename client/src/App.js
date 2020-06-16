import React from 'react';
import ListView from "../src/components/ListView"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "../src/utils/UserContext"
import Signup from "../src/pages/Signup"
import Login from "../src/pages/Login"
import Detail from "../src/pages/Detail"
import { CompDataProvider } from './utils/CompData/compDataStore';


function App() {
	return (
		<CompDataProvider>
			<UserProvider>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={ListView} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/detail" component={Detail} />
							<Route component={ListView} />
						</Switch>


					</div>
				</Router>
			</UserProvider>
		</CompDataProvider>
	);
}

export default App;
