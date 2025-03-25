// Funções para trabalhar com junção de classes, ideal para criar variações do mesmo componente utilizando tailwind

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function classMerge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
