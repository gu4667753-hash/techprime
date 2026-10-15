const EquipamentoModel = require('../models/EquipamentoModel');
const TecnicoModel = require('../models/TecnicoModel');

class AuditoriaControlle{

   static gerarRelatorioGeral(){
     
    const equipamento = EquipamentoModel.listarInventario();
    const tecnico = TecnicoModel.listarEquipe();
   
   return{
      status: 200,
      total: {
         equipamento: equipamento.lengh,
         tecnico: tecnico.lengh,
         totalOperacao: equipamento.lengh + tecnico.lengh,

      },
      equipamento,
      tecnico,
   };
   
   }
}
module.exports = AuditoriaControlle;




