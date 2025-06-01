const formatCurrency = (value) => {
    if (value === null || value === undefined || value === '') return '';

    let str = String(value);
    str = str.replace(/\./g, ',');
    const [intPart, decimalPart] = str.split(',');

    const formattedInt = new Intl.NumberFormat('vi-VN', {
        useGrouping: true,
        maximumFractionDigits: 0,
    }).format(Number(intPart || 0));

    // Chỉ thêm phần thập phân nếu có và không phải là "00"
    if (decimalPart !== undefined && decimalPart !== "00") {
        return `${formattedInt},${decimalPart}`;
    }
    return formattedInt;
};

export function convertToNumber(value) {
    if (typeof value !== 'string') {
        return Number(value) || 0;
    }
    
    let processedValue = value.replace(/\./g, '');
    processedValue = processedValue.replace(/,/g, '.');

    const number = Number(processedValue);
    return isNaN(number) ? 0 : number;
}

export function convertToNumberDb(value) {
  const number = parseFloat(value);
  if (number % 1 === 0) {
    return parseInt(value, 10);
  }

  return value.replace('.', ',');
}

export default formatCurrency;
