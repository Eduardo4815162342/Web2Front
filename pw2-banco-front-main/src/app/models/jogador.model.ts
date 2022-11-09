import { Atendimento } from "./atendimento.model";
import { Equipe } from "./equipe.model";
import { JogadorPerfilJogo } from "./jogadorPerfilJogo.model";
import { Partida } from "./partida.model";
import { PartidaIndividual } from "./partidaIndividual.model";
import { TorneioEquipe } from "./torneioEquipe.model";

export interface Jogador {
  id: number;
  email: string;
  password: string;
  nome: string;
  equipe: Equipe;
  perfis: JogadorPerfilJogo[];
  atendimentos: Atendimento[];
  partidas: Partida[];
  torneios: TorneioEquipe[];

}
