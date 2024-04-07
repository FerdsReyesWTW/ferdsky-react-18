import CurrencyFormatter from "@/helpers/currencyFormatter";

const Car = ({ car }) => {

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" 
                        src={car?.photo ? `./car/${car.photo}.jpg` : ""} 
                        alt="" 
                    />
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>{ car?.brand }</li>
                    <li>{ car?.model }</li>
                    <li>{ CurrencyFormatter(car?.price) }</li>
                </ul>
                <span>
                    { car?.description }
                </span>
            </div>
        </div>
    );
}

export default Car;