import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import EditDev from "./EditDev";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/edit" render={(props) => <EditDev {...props} />} />
    </BrowserRouter>
  )
}