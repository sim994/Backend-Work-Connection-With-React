import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { Home } from "../Component/Home";
import { About } from "../Component/About";

function RouteControl() {
  return (
    <BrowserRouter>
      <div className="max-w-3xl mx-auto mt-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouteControl;
