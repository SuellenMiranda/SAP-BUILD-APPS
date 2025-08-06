//inputs

return { 
  
  //DataBegFinal    : inputs.DataBegInicial.toUpperCase(),
  //DataEndFinal    : inputs.DataEndInicial.toUpperCase(),
  
  DataBegFinal: (function(msString) {
    const ms = parseInt(msString.match(/\d+/)[0], 10);
    const date = new Date(ms);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}T00%3A00%3A00`;
  })(inputs.DataBegInicial)
  
};

//outputs
