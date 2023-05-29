import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import KotakTeks from "./components/KotakTeks.jsx";
import Tombol from "./components/Tombol.jsx";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header /> */}
    {/* <KotakTeks /> */}
    {/* <Tombol /> */}
    <Login />
  </React.StrictMode>
);
