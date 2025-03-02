import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch(); 

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser()); 
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user; 
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse"); 
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
 
    return () => unsubscribe(); 
  }, [dispatch, navigate]);

  return (
    <div className="absolute bg-gradient-to-b from-black text-white flex w-full">
      <div className="flex">
        <img className="w-48" src="/logo.png" alt="logo" />
        <div className="flex">
          <ul className="flex gap-8 items-center py-10 cursor-pointer">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Originals</li>
            <li>Recently Added</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="flex py-10 w-8 gap-3 ml-96">
          <img src="search.svg" alt="search" />
          <p>{user?.displayName || "Guest"}</p> 
          <img className="text-white" src="bell1.png" alt="bell" />
          <img className="" src="avatar.png" alt="avatar" />
          {user && <button onClick={handleSignOut}>(Sign Out)</button>} 
        </div>
      </div>
    </div>
  );
};

export default Header;
