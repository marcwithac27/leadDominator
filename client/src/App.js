import React from 'react';
import ListView from "../src/components/ListView"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// 
import Signup from "../src/pages/Signup"
import Login from "../src/pages/Login"


function App() {
  return (
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
  );
}

export default App;
