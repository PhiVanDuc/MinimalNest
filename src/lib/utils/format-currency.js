function formatCurrency(input) {
    let str = input.toString().trim();
    
    let sign = "";
    if (str.startsWith("-")) {
        sign = "-";
        str = str.slice(1);
    }

    let parts = str.split(",");
    let integerPart = parts[0];
    let decimalPart = parts[1] || "";

    integerPart = integerPart.replace(/\D/g, "");
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return sign + integerPart + (decimalPart !== "" ? "," + decimalPart : "");
}

export function convertToNumber(value) {
    if (typeof value !== 'string') {
        return Number(value) || 0;
    }
    
    let processedValue = value.replace(/\./g, '');
    processedValue = processedValue.replace(/,/g, '.');

    const number = Number(processedValue);
    return isNaN(number) ? 0 : number;
}

export function convertToNumberDb(value = 0) {
  const newValue = `${value}`;

  const number = parseFloat(newValue);
  if (number % 1 === 0) {
    return parseInt(newValue, 10);
  }

  return newValue.replace('.', ',');
}

export default formatCurrency;