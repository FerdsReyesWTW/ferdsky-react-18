import useCars from '../hooks/useCars';
import CarListRow from "./carListRow";

const CarList = ({ selectCar }) => {
    const { cars, setCars } = useCars();

    const addCar = () => {
        setCars((current) => {
            return ([...current, {
                id: 4,
                brand: "Ford",
                model: "Everest",
                price: "10000000",
                photo: "ford-everest",
                description: "The Ford Everest is a mid-size SUV produced by Ford Motor Company since 2003. Developed and destined mainly for the Asia-Pacific region with production centered in Thailand, the first-generation Everest is based on the Mazda-based Ford Ranger pickup truck, while the following generations are based on the globally-marketed T6 Ranger. Unlike the Ranger which was paralleled with the Mazda B series or BT-50 until 2020, the Everest has no Mazda equivalent, as it was seen as unfitting for the brand."}
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
                            <CarListRow key={car.id} car={car} selectCar={selectCar} />
                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={(e) => addCar(e)}>Add Car</button>
        </>
    )
}

export default CarList;