import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const[isSignInForm, setIsSignInForm]=useState(true);


 const toggleSignInForm=() =>{
    setIsSignInForm(!isSignInForm)

 }

  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src="/bg.jpg" alt="Background  " />
      </div>
      <div>
        <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0  text-white bg-opacity-80">
          <h1 className="text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-4  my-4 w-full bg-gray-700 rounded-lg "
            ></input>
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4  my-4 w-full bg-gray-700 rounded-lg "
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
          <button className="p-1 my-6 bg-red-700 text-xl rounded-lg w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h1 className="p-2  my-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In"}
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
