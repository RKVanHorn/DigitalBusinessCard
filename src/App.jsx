import "./App.css";
import React from "react";
import Info from "../components/Info";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="page">
      <Info />
      <Main />
      <Footer />
    </div>
  );
}
