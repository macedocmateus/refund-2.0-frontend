import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";

const isLoading = false;

// Em casos onde usuário não fez login
//const session = undefined;

// Usuário logado com uma role especifica
const session = {
    user: {
        role: "",
    },
};

export function Routes() {
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
