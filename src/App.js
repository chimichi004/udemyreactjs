import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import AuthContext from "./store/auth-context";

function App() {
  const contxt = useContext(AuthContext);
  return (
    <>
      <MainHeader/>
      <main>
        {!contxt.isLoggedIn && <Login/>}
        {contxt.isLoggedIn && <Home/>}
      </main>
    </>
  );
}

export default App;
