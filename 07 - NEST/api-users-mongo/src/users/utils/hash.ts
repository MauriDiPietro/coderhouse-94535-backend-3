import { hashSync, compareSync } from "bcryptjs";

export const createHash = (password: string) => hashSync(password, 10);

export const isValidPassword = (passwordPlain: string, passwordHash: string) => compareSync(passwordPlain, passwordHash);