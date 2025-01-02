import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketingPage from './pages/MarketingPage';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import * as React from 'react';

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MarketingPage />}/>
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
  </BrowserRouter>
  );
}
