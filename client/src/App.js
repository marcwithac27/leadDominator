import React from 'react';
import ListView from "../src/components/ListView"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {UserProvider} from "../src/utils/UserContext"
import Signup from "../src/pages/Signup"
import Login from "../src/pages/Login"


function App() {
  return (
	  <UserProvider>
    <Router>
		  <div>
			
				
						<Switch>
							<Route exact path="/" component={ListView} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route component={ListView} />
						</Switch>
					
			
		  </div>
	  </Router>
	  </UserProvider>
  );
}

export default App;
