import React, { useState, useEffect } from 'react';
import CarListRow from "./carListRow";

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            const res = await fetch("/api/car");
            const cars = await res.json();
            setCars(cars);
        };

        getCars();
    }, []);

    const addCar = () => {
        setCars((current) => {
            return ([...current, {
                id: 4,
                brand: "Ford",
                model: "Everest",
                price: "10000000"}
            ]);
        });
    };

    return (
        <>
            <div className="mb-5">
                <h4 className="text-center">Cars currenctly available on the market</h4>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => {
                        return (
                            <CarListRow key={car.id} {...car} />
                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={(e) => addCar(e)}>Add Car</button>
        </>
    )
}

export default CarList;