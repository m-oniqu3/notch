import Login from "@/components/auth/Login.tsx";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Signup from "./components/auth/Signup.tsx";
import "./index.css";
import AuthLayout from "./layouts/AuthLayout.tsx";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
