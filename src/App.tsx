// src/App.tsx
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import JapanTripDiary from "./pages/JapanTripDiary";
import Maps from "./pages/Maps";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={JapanTripDiary} />
      <Route path="/maps" component={Maps} />
      <Redirect to="/" />
    </Switch>
  );
}
