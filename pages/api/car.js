const carList = [
    {
        id: 1,
        brand: 'BMW',
        model: 'X1',
        price: 50000.00,
        photo: "audi-a3",
        description: "Bold design meets punchy performance. This compact SUV leads with confident presence, agile handling, and state-of-the-art technology, so you can enjoy every adventure."
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'A3',
        price: 45000.00,
        photo: "bmw-a1",
        description: "The Audi A3 is a subcompact executive/small family car (C-segment) manufactured and marketed by the German automaker Audi AG since September 1996,currently in its fourth generation."
    },
    {
        id: 3,
        brand: 'Mercedes',
        model: 'CLA',
        price: 55000.00,
        photo: "mercedes-c",
        description: "The Mercedes-Benz CLA class is a series of luxury compact executive cars manufactured by Mercedes-Benz since 2013. The first generation was a four-door sedan based on the platform of the W176 A-Class and W246 B-Class compact cars, marketed as a four-door coupé.In 2015, Mercedes-Benz expanded the CLA family to include the Shooting Brake, a station wagon configuration. As the V177 A-Class sedan took its place as the budget-conscious sedan, the second generation got longer and wider than the W205 C-Class."
    
    }
];

export default function handler(req, res) {
    res.status(200).json(carList);
}