export class Comentario {
    id: number;
    nome: string;
    reacoes: [
        {
            id: number,
            descricao: string
        }
    ]
}