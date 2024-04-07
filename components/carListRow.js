import currencyFormatter from "../helpers/currencyFormatter";

const CarListRow = ({ car, selectCar}) => {
    return (
        <tr onClick={() => selectCar(car)} style={{ cursor: "pointer" }}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            {car.price && <td className={car.price >= 50000 ? "text-primary" : ""}>
                {currencyFormatter(car.price)}
            </td>}
        </tr>
    )
};

export default CarListRow;