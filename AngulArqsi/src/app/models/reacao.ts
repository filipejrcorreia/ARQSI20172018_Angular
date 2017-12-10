export class Reacao {
    id: number;
    descricao: string;
    farmacoId: number;
    farmaco: {
        id: number,
        nome: string
    }
}