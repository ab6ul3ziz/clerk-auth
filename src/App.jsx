import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Welcome from "./pages/Welcome";
import { Suspense } from "react";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
        </Route>

        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
