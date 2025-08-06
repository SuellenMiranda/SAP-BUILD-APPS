// Inputs

//return { result: inputs.input1.toUpperCase() };
return { 
  DataBegFinal: (function(dateString) {
    let date;
    if (dateString.includes('-') && dateString.split('-')[0].length === 2) {
      // DD-MM-YYYY
      const [day, month, year] = dateString.split('-');
      date = new Date(`${year}-${month}-${day}T00:00:00Z`);
    } else {
      date = new Date(dateString);
    }
    const ms = date.getTime();
    return `/Date(${ms})/`;
  })(inputs.DataBegInicial),

  DataEndFinal: (function(dateString) {
    let date;
    if (dateString.includes('-') && dateString.split('-')[0].length === 2) {
      // DD-MM-YYYY
      const [day, month, year] = dateString.split('-');
      date = new Date(`${year}-${month}-${day}T00:00:00Z`);
    } else {
      date = new Date(dateString);
    }
    const ms = date.getTime();
    return `/Date(${ms})/`;
  })(inputs.DataEndInicial)
};

// Outputs
