var alunos = []
for (i = 0; i < 3; i++) {
    var alunoName = prompt("Digite seu nome");
    var notas = [];
    for (a = 1; a <= 2; a++) {
        var notasAlunos = prompt(`Sr.(a)${alunoName}, digite sua nota de número ${a}`);
        notasAlunos = parseInt(notasAlunos);
        notas.push(notasAlunos);
    }
alunosDados = {}
alunosDados.nomesDosAlunos = alunoName
alunosDados.notass = notas
alunos.push(alunosDados);

}

for (x=0;x<alunos.length;x++){
    alunosDados = alunos[x]
    document.write(`O aluno ${alunosDados.nomesDosAlunos} teve as notas: <br>`)
    var somaDasNotas = 0;

    for(i=0;i<alunosDados.notass.length;i++){
        var nota = alunosDados.notass[i];
        somaDasNotas = somaDasNotas + nota
        document.write(`Nota ${i+1} do aluno: ${nota}<br>`);
    }
    var media = somaDasNotas/alunosDados.notass.length;
    document.write(`A média do aluno: ${media}<br>`)
    document.write("===================================== <br>")
}