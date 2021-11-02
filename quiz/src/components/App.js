
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch , Route } from "react-router-dom";

// import Register from "./Register"; 
// import User_Login from "./User_Login"; 
 import Start from "./Start"; 

// import Mainpage_User from "./Mainpage_User";
// import Mainpage_Admin from "./Mainpage_Admin";
// import User_Profile from "./User_Profile";
// import Admin_Login from "./Admin_Login";
// import Create_quiz from "./Create_quiz";



function App() {

  

  return (
  <>
    <Router>
      <Switch>
          <Route path="/" exact component={Start} />
            
        
      </Switch>
    </Router>


  </>
  );
}
export default App;