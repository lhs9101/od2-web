import crypto from "crypto";

export function encrypt(target) {
    const cipher = crypto.createCipher("aes-256-gcm", process.env.REACT_APP_SECURITY_KEY);
    let result = cipher.update(target, "utf8", "base64");
    result += cipher.final("base64");
    return result;
}

export function decrypt(target) {
    const decipher = crypto.createDecipher("aes-256-gcm", process.env.REACT_APP_SECURITY_KEY);
    let result = decipher.update(target, "base64", "utf8");
    return result;
}
