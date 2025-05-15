const formatCurrency = (value) => {
    const amount = Number(value) || 0;
    return amount.toLocaleString('vi-VN');
}

export default formatCurrency;