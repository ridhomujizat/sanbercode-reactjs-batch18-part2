import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tugas9 from "../Tugas-9/Tugas9";
import Tugas10 from "../TUgas-10/Tugas10";
import Tugas11 from "../Tugas-11/Tugas11";
import Tugas12 from "../Tugas-12/Tugas12";
import Tugas13 from "../Tugas-13/Tugas13";
import Tugas14 from "../Tugas-14/Tugas14";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Tugas9</Link>
          </li>
          <li>
            <Link to="/Tugas10">Tugas10</Link>
          </li>
          <li>
            <Link to="/Tugas11">Tugas11</Link>
          </li>
          <li>
            <Link to="/Tugas12">Tugas12</Link>
          </li>
          <li>
            <Link to="/Tugas13">Tugas13</Link>
          </li>
          <li>
            <Link to="/Tugas14">Tugas14</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/Tugas-10" component={Tugas10}></Route>
        <Route path="/Tugas-11">
          <Tugas11 />
        </Route>
        <Route path="/Tugas-12">
          <Tugas12 />
        </Route>
        <Route path="/Tugas-13">
          <Tugas13 />
        </Route>
        <Route path="/Tugas-14">
          <Tugas14 />
        </Route>
        <Route exact path="/">
          <Tugas9 />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
