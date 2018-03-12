export interface UnidadeBasicaSaudeResponse {
  id: number;
  nome: string;
  endereco: string;
  cidade: string;
  telefone: string;
  latitude: number;
  longitude: number;
  scoreEstruturaFisica: number;
  scoreAdaptacao: number;
  scoreEquipamento: number;
  scoreMedicamento: number;

}
