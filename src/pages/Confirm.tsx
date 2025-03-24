import { Navigate, useLocation } from "react-router";
import okSvg from "../assets/ok.svg";

export function Confirm() {
    const location = useLocation();

    if (!location.state?.fromSubmit) {
        return <Navigate to={"/"}></Navigate>;
    }

    return (
        <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center gap-6 p-10">
            <h1 className="text-2xl font-bold text-center text-green-100">
                Solicitação enviada!
            </h1>
            <img src={okSvg} alt="Ícone de ok" className="w-28" />
            <p className="text-sm text-gray-200 text-center">
                Agora é apenas aguardar! A sua solicitação será analisada e, em
                breve, o setor financeiro irá encontrar em contato com você.
            </p>

            <a
                href="/"
                className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear"
            >
                Nova solicitação
            </a>
        </div>
    );
}
