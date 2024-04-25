import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import NotFound from "./components/not-found";
import NavBar from "./components/nav-bar";
import PureCom from "./components/reactjs/pure-component-example/pure-com";
import About from "./components/about";
import styled from "styled-components";
import Hoc from "./components/reactjs/hoc/hoc";
import Profile from "./components/profile";
import { UseEffect } from "./components/reactjs/hooks/use-effect";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="*" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/profile" Component={Profile}></Route>
          <Route path="/pure-com" Component={PureCom}></Route>
          <Route path="/use-effect" Component={UseEffect}></Route>
          <Route path="/hoc" Component={Hoc}></Route>
          <Route path="/not-found" Component={NotFound}></Route>
        </Routes>
      </BrowserRouter>
      <Footer>
        Contact us @
        <a href="mailto:hege@example.com">mpushparaja13@gmail.com</a>
      </Footer>
    </>
  );
}

export default App;

const Footer = styled.div`
  background-color: #008b8b;
  color: #fff;
  height: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
