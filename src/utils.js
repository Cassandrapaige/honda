export const getLocaleNum = (price, rate, currency) => {
    return Math.floor(price * rate).toLocaleString("en-CA", {
        style: "currency",
        currency: currency
    }).replace(/\.00/g, '');
}