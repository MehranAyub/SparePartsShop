import React from "react";
import NavbarComponent from "../../components/NavbarComponent";

const index = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarComponent />
      {children}
    </React.Fragment>
  );
};
export default index;
