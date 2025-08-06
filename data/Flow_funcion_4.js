// Entradas
const dataBegInicial = inputs.DataBegInicial; // Data de início recebida
const dataEndInicial = inputs.DataEndInicial; // Data de fim recebida

// Função auxiliar para formatar data no padrão YYYY-MM-DD
function formatDate(year, month, day) {
  return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

// Pega a data atual
const hoje = new Date();

// Lógica para DataBegFinal (sempre 01 do mês atual se vazio)
let dataBegFinal = dataBegInicial;
if (!dataBegFinal || dataBegFinal === "") {
  dataBegFinal = formatDate(hoje.getFullYear(), hoje.getMonth() + 1, 1);
}

// Lógica para DataEndFinal (31/12/9999 se vazio)
let dataEndFinal = dataEndInicial;
if (!dataEndFinal || dataEndFinal === "") {
  dataEndFinal = formatDate(9999, 12, 31);
}

// Retorno para o SAP Build Apps
return {
  DataBegFinal: dataBegFinal,
  DataEndFinal: dataEndFinal
};
