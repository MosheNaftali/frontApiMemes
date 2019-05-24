import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/categorias";
import uploadMeme from "./pages/uploadMeme";
import modifyMeme from "./pages/modifyMeme";
import deleteMeme from "./pages/deleteMeme";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/uploadmeme" component={uploadMeme} />
        <Route exact path="/modifyMeme" component={modifyMeme} />
        <Route exact path="/deleteMeme" component={deleteMeme} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
