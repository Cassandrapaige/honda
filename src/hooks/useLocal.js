import {useEffect} from 'react';
import {useAppState} from '../providers/app.provider';

const useLocal = () => {
    const [state, dispatch] = useAppState();

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('cart_items'));

        dispatch({
            type: "GET_LOCAL_STATE",
            payload: items ? items : [],
        });
    }, [dispatch]);
}

export default useLocal;