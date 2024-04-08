import React, { useState, useEffect } from "react";
import loadingStatus from '../helpers/loadingStatus';

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        const getCars = async () => {
            setLoadingState(loadingStatus.isLoading);

            try {
                const res = await fetch("/api/car");
                const cars = await res.json();
                setCars(cars);
                setLoadingState(loadingStatus.loaded);
            } catch (error) {
                setLoadingState(loadingStatus.hasError);
            }
        };

        getCars();
    }, []);

    return { cars, setCars, loadingState };
}

export default useCars;