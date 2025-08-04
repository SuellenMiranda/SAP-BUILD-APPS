// Inputs
// DataBegInicial, DataEndInicial, DatumInicial

return { 
  
  //DataBegFinal    : inputs.DataBegInicial.toUpperCase(),
  //DataEndFinal    : inputs.DataEndInicial.toUpperCase(),
  //DatumFinal      : inputs.DatumInicial.toUpperCase()
  
  DataBegFinal: (function(msString) {
    const ms = parseInt(msString.match(/\d+/)[0], 10);
    const date = new Date(ms);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  })(inputs.DataBegInicial),

  DataEndFinal: (function(msString) {
    const ms = parseInt(msString.match(/\d+/)[0], 10);
    const date = new Date(ms);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  })(inputs.DataEndInicial),

  DatumFinal: (function(msString) {
    const ms = parseInt(msString.match(/\d+/)[0], 10);
    const date = new Date(ms);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  })(inputs.DatumInicial)
  
};
0
// Outputs
// Property type - Date/time text (ISO 8601)
// DataBegFinal, DataEndFinal, DatumFinal
