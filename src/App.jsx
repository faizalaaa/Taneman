import React from "react";
import HomePage from "./pages/HomePage";
import { AnimalProvider } from "./api/Animal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ContinentPage from "./pages/ContinentPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import "./App.scss";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AnimalProvider>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/animal/:id" element={<DetailPage />} />
              <Route path="/Continent" element={<ContinentPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </AnimalProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
