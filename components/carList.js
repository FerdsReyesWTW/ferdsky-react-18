import CarListRow from "./carListRow";

const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: 'X1',
        price: 50000.00
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'A3',
        price: 45000.00
    },
    {
        id: 3,
        brand: 'Mercedes',
        model: 'CLA',
        price: 55000.00
    
    }
];

const CarList = () => {
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
        </>
    )
}

export default CarList;