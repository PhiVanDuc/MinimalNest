import { convertToNumberDb } from "./format-currency";

const calcPrice = (cost = "", interest = "", type, amount) => {
    const convertCost = convertToNumberDb(cost);
    const convertInterest = convertToNumberDb(interest);

    let result = convertCost + (convertCost * (convertInterest / 100));
    if (type) {
        const convertAmount = convertToNumberDb(amount);

        if (type !== "amount") result = result - (result * (convertAmount / 100));
        else result = result - convertAmount;
    }

    return result;
}

export default calcPrice;