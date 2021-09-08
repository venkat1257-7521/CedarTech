
import React from "react";
import classNames from "classnames";
import "./AdminNavbar.scss";

import {
  NavbarBrand,
  Navbar,
  Container,
  NavbarToggler,
} from "reactstrap";



function AdminNavbar(props) {  

return (
    <>
      <Navbar className="navbar-absolute" expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>

            </div>
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
              </NavbarBrand>
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
