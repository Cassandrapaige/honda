import {useAppState} from '../providers/app.provider'

export const useLocaleNum = (price) => {
    const [{currency, exchangeRate}, dispatch] = useAppState();

    const convertedPrice =  Math.floor(price * exchangeRate).toLocaleString("en-CA", {
        style: "currency",
        currency: currency
    })

    return convertedPrice;
}