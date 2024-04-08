import React, { useState, useEffect } from "react";
import useGet from "./useGet";

const useCars = () => {
    const [cars, setCars] = useState([]);
    const { get, loadingState } = useGet("/api/car");

    useEffect(() => {
        const getCars = async () => {
            const cars = await get();
            setCars(cars);
        };

        getCars();
    }, [get]);

    return { cars, setCars, loadingState };
}

export default useCars;