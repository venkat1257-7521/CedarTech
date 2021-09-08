import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import "assets/scss/general-styling.scss";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";




ReactDOM.render(

    
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>,
    

  document.getElementById("root")
);
