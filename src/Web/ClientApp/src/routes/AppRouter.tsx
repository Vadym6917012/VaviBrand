import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<h1>About</h1>} />
                    <Route path="contact" element={<h1>Contact</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}