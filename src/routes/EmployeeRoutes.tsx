import { Routes, Route } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Refund } from "../pages/Refund";
import { Confirm } from "../pages/Confirm";
import { NotFound } from "../pages/NotFound";

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
