"use client"

import CryptoJS from "crypto-js";

const generateSignatureClient = (data) => {
    return CryptoJS.HmacSHA256(data, "This is key for signature").toString(CryptoJS.enc.Hex);
}

export default generateSignatureClient;