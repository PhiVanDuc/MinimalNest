const generateSkuProduct = (name, size, color) => {
    if (!name) return "";

    const normalizedName = name
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');

    const nameParts = normalizedName.trim().split(/\s+/).map(w => w[0]?.toUpperCase() || '');
    const nameCode = nameParts.join('');
    const colorCode = color.code.replace('#', '').toUpperCase();

    return `${nameCode}-${size.size.toUpperCase()}-${colorCode}`
}

export default generateSkuProduct;