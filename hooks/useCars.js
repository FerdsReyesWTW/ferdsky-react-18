import React, { useState, useEffect } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            const res = await fetch("/api/car");
            const cars = await res.json();
            setCars(cars);
        };

        getCars();
    }, []);

    return { cars, setCars };
}

export default useCars;