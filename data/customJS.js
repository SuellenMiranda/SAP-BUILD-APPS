//return { result: inputs.input1.toUpperCase() };
// Code working
return {
  result: (function(msString) {
    //function
    const ms = parseInt(msString.match(/\d+/)[0], 10);
    const date = new Date(ms);
    //day,month,year
    const day = String(date .getUTCDate()).padStart(2, '0') ;
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // JANUARY IS 0
    const year = date.getUTCFullYear();
    //result
    return `${day}/${month}/${year}`;
  })(inputs.input1)
};
