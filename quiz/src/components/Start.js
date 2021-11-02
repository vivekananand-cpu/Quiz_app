import { Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../css/Start.css";
import Navbar from "../components/Navbar";
import AdminLogin from "../components/AdminLogin";
import UserLogin from "../components/UserLogin";
import NewLogin from "../components/newLogin";
import Footer from "../components/Footer";
import Mainpage_Admin from "../components/Mainpage_Admin";

function Start() {


  const history = useHistory();
  const [user, setUser] = useState({
    email: "", pass: "", data: []

  });


  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }



  function PostData(e) {
    e.preventDefault();


    axios.post("/Start", user)
      .then(function (response) {
        console.log(response);
        var user = response.data;
        if (user == "Invalid User ... Plz Create Your Account") {
          window.alert(response.data);
        } else {
          history.push("/main/" + user._id);
        }

      }).catch((err) => {
        console.log(err);
      })

  }


  return (
    <>
      <Navbar />
      {/* <div className="container">
      <Mainpage_Admin />

      </div>
      */}
    <div className="loginButtons container ">
    <h1>Get ready for an AUSOME QUIZ !!! </h1>
    <button type="button" class="btn btn-primary btn-lg">Login as User</button>
<button type="button" class="btn btn-secondary btn-lg">Login as Admin</button>
    </div> 
      {/* <NewLogin /> */}
      <Footer />






    </>

  );
}
export default Start;