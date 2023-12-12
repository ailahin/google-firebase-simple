import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedperson = result.user;
        console.log(result);
        setUser(loggedperson);
      })
      .catch((error) => {
        const errorMessage = error.massage;
        console.log("error", errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.Log("sucessfully sign out", error);
      });
  };

  const handleGithubSignin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const resultUser = result.user;
        console.log(resultUser);
        setUser(resultUser);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <p> This is Log in Page</p>

      <div>
        {user ? (
          <div>
            <button onClick={handleSignOut}> SignOut</button>
          </div>
        ) : (
          <div>
            <button onClick={handleGoogleLogin}> Google log in</button>
            <button onClick={handleGithubSignin}> Github Sign in</button>
          </div>
        )}
      </div>

      <div>
        {user && (
          <div>
            <p> name: {user.displayName}</p>

            {user.email && <p> email: {user.email} </p>}
            <p>
              {" "}
              Photo: <img src={user.photoURL} alt="profile picture" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
