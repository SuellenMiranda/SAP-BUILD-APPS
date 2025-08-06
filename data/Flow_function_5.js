// inputs

const dataEndInicial = inputs.DataEndInicial; // Data de fim recebida

// Função auxiliar para formatar data YYYY-MM-DD
function formatDate(year, month, day) {
  return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

// Se vazio → 31/12/9999
let dataEndFinal = dataEndInicial;
if (!dataEndFinal || dataEndFinal === "") {
  dataEndFinal = formatDate(9999, 12, 31);
}

return {
  DataEndFinal: dataEndFinal
};

// outputs
