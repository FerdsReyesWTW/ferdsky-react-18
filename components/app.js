import React, { useState } from 'react';
import Banner from './banner';
import Car from './car';
import CarList from './carList';

const App = () => {
    const [selectedCar, setSelectedCar ] = useState(null);

    return (
        <>
            <Banner>Provider amazing cars for you!</Banner>
            { selectedCar 
                ? <Car car={selectedCar} />
                : <CarList selectCar={setSelectedCar} /> }
        </>
    )
}

export default App