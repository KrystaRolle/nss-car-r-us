import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./customOrder.js"
export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Technologies()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${Wheels()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${Paints()}
            </section>
            ${Interiors()}
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
            ${Orders()}
        </article>
    `
}