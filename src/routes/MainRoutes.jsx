import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeRes from "../Components/HomeRes";
import ContactRezume from "../Components/ContactRezume";
import Information from "../Components/Information";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeRes />} />
      <Route path="/contacts" element={<ContactRezume />} />
      <Route path="/information" element={<Information />} />
    </Routes>
  );
};

export default MainRoutes;
