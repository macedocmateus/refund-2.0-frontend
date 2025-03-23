import { Routes, Route } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";

import { AppLayout } from "../components/AppLayout";

export function EmployeeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout></AppLayout>}>
                <Route path="/" element={<Refund></Refund>}></Route>
            </Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    );
}
