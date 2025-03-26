import { Routes, Route, Router } from "react-router";

import { AppLayout } from "../components/AppLayout";

import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout></AppLayout>}>
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/refund/:id" element={<Refund></Refund>}></Route>
            </Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    );
}
