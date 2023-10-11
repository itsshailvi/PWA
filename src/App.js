import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import addNotification, { Notifications } from "react-push-notification";
import "./App.css";
import Profile from "./Profile";
import Weather from "./Weather";

const App = () => {
  return (
    <>
      <Notifications />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/webcam" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
