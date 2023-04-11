import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Hoome from "../home/Hoome";
import InputControl from "../InputControl/InputControl";
import {auth,useAuth} from "../../firebase";

import styles from "./Login.module.css";

import Navbar from "../Navbar";


function Login({handleemailprofile}) {
 
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const currentUser = useAuth();
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("check again");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then( (res) => {
        setIsLoggedIn(true);
        console.log(res.user);
        handleemailprofile(res.user.displayName);
        setSubmitButtonDisabled(false);
       

        navigate("/");


    
       
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg("check again forget your Password?");
      });
  };


  return (
  <div className="bg-yellow-200"> 
    <h1 className="text-5xl font-bold text-white text-center absolute top-5 w-full">FAST <span className="text-yellow-300">&& </span>  YUMMY</h1>
    <div className={styles.container}>
      
      <div className={styles.innerBox}>
        <h1 className={styles.heading }>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}

            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
          <p>
            You want to return?{" "}
            
            <span>
              <Link to="/">Home</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default Login;