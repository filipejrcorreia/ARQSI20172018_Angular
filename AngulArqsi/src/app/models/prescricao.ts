export class Prescricao {
    farmaco: string;
    apresentacao: string;
    apresentacaoID: string; //id de apresentacao em GdM
    posologiaPrescrita: string;
    posologiaID: number;
    quantidade: number;
    validade: Date;
    aviamento: [{
        data: Date,
        farmaceutico: string,
        quantidade: number
    }]
}