export class Apresentacao {
    id: number;
    descricao: string;
    forma: string;
    concentracao: string;
    qtd: string;
    //nomeMedicamento: string;
    //nomeFarmaco: string;
    medicamentoId: number;
    medicamento: {
        id: number,
        nome: string
    };
    farmacoId: number;
    farmaco: {
        id: number,
        nome: string
    };
}