import { Routes, Route } from "react-router";
import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Confirm } from "../pages/Confirm";

export function EmployeeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout></AppLayout>}>
                <Route path="/" element={<Refund></Refund>}></Route>
                <Route path="/confirm" element={<Confirm></Confirm>}></Route>
            </Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    );
}
