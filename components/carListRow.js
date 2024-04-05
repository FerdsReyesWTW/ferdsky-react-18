import currencyFormatter from "../helpers/currencyFormatter";

const CarListRow = (car) => {
    return (
        <tr>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td className={car.price >= 50000 ? "text-primary" : ""}>
                {currencyFormatter(car.price)}
            </td>
        </tr>
    )
};

export default CarListRow;