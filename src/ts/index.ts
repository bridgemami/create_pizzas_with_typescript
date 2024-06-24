//npm init -y
// parcel - https://parceljs.org/getting-started/webapp/
//npx parcel src/*.html

import { Pizza, PizzaProps } from './models/Pizza'
const rootElement = document.querySelector('.root')!

function createPizzaTemplate(pizza: PizzaProps):string {
    return `
    <div class='pizza'>
    <h2>${pizza.title}</h2>
    <p class='toppings'>Toppings: ${pizza.toppings.join(', ')}</p>
    <p class='description>Description: ${pizza.description}.</p>
    <span class='price'>$${pizza.price}</span>
    </div>`
}

function renderTemplate(templates:string[], parent: Element):void {
    const templateElement= document.createElement('template')
    for(const t of templates) {
        templateElement.innerHTML +=t
    }
    parent.append(templateElement.content)

}

document.addEventListener('DOMContentLoaded', async ()=> {
        //load the pizza data
        const pizzas = await Pizza.loadAll()
        console.log(pizzas)
        //create template string for each pizza
        const pizzaTemplate = pizzas.map(p => createPizzaTemplate(p))
        //render pizza template to DOM
        renderTemplate(pizzaTemplate, rootElement)
        
})