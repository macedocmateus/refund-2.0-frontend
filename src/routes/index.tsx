import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
    const { session, isLoading } = useAuth();

    function Route() {
        switch (session?.user.role) {
            case "employee":
                return <EmployeeRoutes></EmployeeRoutes>;
            case "manager":
                return <ManagerRoutes></ManagerRoutes>;
            default:
                return <AuthRoutes></AuthRoutes>;
        }
    }

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <BrowserRouter>
            <Route></Route>
        </BrowserRouter>
    );
}
