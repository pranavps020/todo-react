import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo</h1>
    </header>
  );
}

const headerStyle = {
  background: "#153243",
  color: "#fff",
  textAlign: "center",
};

export default Header;
