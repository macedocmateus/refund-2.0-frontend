import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
    return (
        <form className="w-full flex flex-col gap-4">
            <Input
                required
                legend="E-mail"
                type="email"
                placeholder="seu@email.com"
            ></Input>

            <Input
                required
                legend="Senha"
                type="password"
                placeholder="123456"
            ></Input>

            <Button>Entrar</Button>
        </form>
    );
}
