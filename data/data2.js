// Inputs

//return { result: inputs.input1.toUpperCase() };
return {

  DataBegFinal: (function(dateString) {
    const date = new Date(dateString);           // Ex: "2025-07-10T16:19:36.654-03:00"
    const timestamp = date.getTime();            // Milissegundos desde 1970 UTC
    return `/Date(${timestamp})/`;               // Ex: "/Date(1752178020000)/"
  })(inputs.DataBegInicial),
  DataEndFinal: (function(dateString) {
    const date = new Date(dateString);           // Ex: "2025-07-10T16:19:36.654-03:00"
    const timestamp = date.getTime();            // Milissegundos desde 1970 UTC
    return `/Date(${timestamp})/`;               // Ex: "/Date(1752178020000)/"
  })(inputs.DataEndInicial)

};

// Outputs