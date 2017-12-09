export class Receita {
    _id: string;
    paciente: string;
    medico: string;
    data: Date;
    __v: string;
    //prescricoes: string;
    prescricoes: [{
        farmaco : string,
        apresentacao: string,
        apresentacaoID: string, //id de apresentacao em GdM
        posologiaPrescrita: string,
        posologiaID: number,
        quantidade: number,
        validade: Date,
        aviamento: [{
            data: Date,
            farmaceutico: string,
            quantidade: number
        }]
    }]
}