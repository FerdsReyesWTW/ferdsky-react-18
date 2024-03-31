const CarListRow = (car) => {
    return (
        <tr>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.price}</td>
        </tr>
    )
};

export default CarListRow;