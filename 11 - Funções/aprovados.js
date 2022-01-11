const alunos = [
    {nome: "Dailo", nota: 10, turma: "1B"}, 
    {nome: "Lilian", nota: 8, turma: "1A"},
    {nome: "Maria", nota: 6, turma: "1B"},
    {nome: "Gabriel", nota: 5, turma: "1A"},
    {nome: "Júlia", nota: 7, turma: "1B"},
    {nome: "Helena", nota: 9, turma: "1A"}
];
function alunosAprovados (arr, media){
    let aprovados = [];
    for (i=0; i<arr.length; i++){
        const {nome, nota} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 8));