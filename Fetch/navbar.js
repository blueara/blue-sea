import Axios from "axios";

import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./navbar.css";
import { HiBars3 } from "react-icons/hi2";

import { TbLoader } from "react-icons/tb";

class navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
