import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes.js";
import logo from "assets/img/PinClipart.com_doe-silhouette-clip-art_3796154.png";
import "./Admin.scss";



function Admin() {
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  
  const toggleSidebar = () => {
  document.documentElement.classList.toggle("nav-open");
  setsidebarOpened(!sidebarOpened);
  };
  
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  
  return (

        <>
          <div className="wrapper">
            <Sidebar
              routes={routes}
              logo={{
                outterLink: "https://www.cedartech.com.my/",
                text: "John Doe",
                text2: "",

                imgSrc: logo,
              }}
              toggleSidebar={toggleSidebar}
            />
            <div className="main-panel" ref={mainPanelRef}>
              <AdminNavbar
                brandText={getBrandText(location.pathname)}
                toggleSidebar={toggleSidebar}
                sidebarOpened={sidebarOpened}
              />
              <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/admin/dashboard" />
              </Switch>
            </div>
          </div>
        </>
  );
}

export default Admin;
