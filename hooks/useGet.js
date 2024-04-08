import { useCallback, useState,  } from "react";
import loadingStatus from '../helpers/loadingStatus';

const useGet = (url) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const get = useCallback(async () => {
        try {
            setLoadingState(loadingStatus.isLoading)
            const res = await fetch(url);
            const values = await res.json();
            setLoadingState(loadingStatus.loaded);

            return values
        } catch (error) {
            setLoadingState(loadingStatus.hasError);
        }
    }, [url]);

    return { get, loadingState };
}

export default useGet;