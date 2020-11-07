import {useEffect} from 'react';
import {useAppState} from '../providers/app.provider';

const useLocal = () => {
    const [state, dispatch] = useAppState();

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('cart_items'));
        let currency = JSON.parse(localStorage.getItem('currency'));

        dispatch({
            type: "GET_LOCAL_STATE",
            payload: items ? items : [],
            currency: currency ? currency : "CAD"
        });
    }, [dispatch]);
}

export default useLocal;