const carList = [
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

export default function handler(req, res) {
    res.status(200).json(carList);
}