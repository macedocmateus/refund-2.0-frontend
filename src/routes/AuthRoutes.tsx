import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";

import { SignIn } from "../pages/SignIn";

import { SignUp } from "../pages/SignUp";

import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    );
}
