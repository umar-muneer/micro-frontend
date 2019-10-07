import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <a className="element" href="/app1">
          App1
        </a>
        <a className="element" href="/app2">
          App2
        </a>
      </div>
    );
  }
}

export default Header;
