// inputs

const dataBegInicial = inputs.DataBegInicial;

// Função auxiliar para formatar data YYYY-MM-DD
function formatDate(year, month, day) {
  return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

const hoje = new Date();

// Se vazio → dia 01 do mês atual
let dataBegFinal = dataBegInicial;
if (!dataBegFinal || dataBegFinal === "") {
  dataBegFinal = formatDate(hoje.getFullYear(), hoje.getMonth() + 1, 1);
}

return {
  DataBegFinal: dataBegFinal
};

// outputs
