const readline = require('readline');
const EquipamentoController = require('./controller/EquipamentoController');
const TecnicoController = require('./controller/TecnicoController');
const AuditoriaController = require('./controller/AuditoriaController');


const rl = readline.createInterface({input: process.stdin, output: process.stdout});


async function main() {
    
while(sistemaRodando){
    console.log("=====[SISTEMA]=====");
    console.log("1. Cadastrar Equipamento ");
    console.log("2. LISTA DE EQUIPAMENTOS:");
    console.log("3. Cadastrar Tecnico ");
    console.log("4. LISTA TECNICOS: ");
    console.log("5. Relatorio de Auditoria Geral ");
    console.log("0. Sai do Sistema");


const opcao = (await rl.pergutar("Escolha uma opção: ")).trim();

switch(opcao) {
    case "1":{
        const tag = (await rl.pergutar("Tag de Patrimonio: "));
        const tipo = (await rl.pergutar("Tipo [DESKTOP|NOTEBOOK|SERVIDOR]: "));
        const rem = (await rl.pergutar("RAM [GB]: "));
        console.log(JSON.stringify(EquipamentoController.processarEntradaEquipamento(tag, tipo, ram), null, 2));
        break;
       
    }
    case "2":{
        console.log(JSON.stringify(EquipamentoController.consultarCatalogo(), null, 2));
        break;
    }
    case "3":{
        const nome = (await rl.pergutar("Nome Completo: "));    
        const cred = (await rl.pergutar("Credencial de Acesso: "));
        const turno = (await rl.pergutar("Turno [MANHÂ|TARDE|NOITE]: "));
        console.log(JSON.stringify(TecnicoController.processarAdmissao(nome, cred, turno)));
        break;
    }
    case "4":{
        console.log(JSON.stringify(TecnicoController.consultarEquipe(), null, 2));
        break;
    }
    case "5":{
        console.log(JSON.stringify(AuditoriaController.gerarRelatorioGeral(), null, 2));
        break;
    }
    case "0":
        sistemaRodando = false;
        console.log("\n===[Encerrando o sistema. Até logo!]===");
        break;
        default:
        console.log("\n===[AVISO]: Opção invalida. Escolha de 1 a 0.");
}
}

    rl.close();
}

main();

