import DataResources from '../services/DataResource'

export interface PizzaProps {
    title: string,
    description: string,
    toppings: string[],
    price: number,
    //id: (number | string),
}

export const Pizza = new DataResources<PizzaProps>('http://localhost:3000/pizzas')

// Pizza.save({
//     title: "Turtles' Pizza",
//     description: "TMNT favorite pizza.",
//     toppings:["green peppers, olives, mushrooms"],
//     price: 20
// })