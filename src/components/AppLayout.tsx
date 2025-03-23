import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col  text-gray-100">
            <main className="p-3 w-full md:w-auto">
                <Header></Header>
                <Outlet></Outlet>
            </main>
        </div>
    );
}
