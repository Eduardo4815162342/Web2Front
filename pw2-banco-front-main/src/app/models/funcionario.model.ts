import { Organizacao } from "./organizacao.model";

export interface Funcionario {
  id: number;
  nome: string;
  email: string;
  password: string;
  endereco: string;
  dataNascimento: string;
  organizacao: Organizacao;
}
