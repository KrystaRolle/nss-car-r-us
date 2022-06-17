import {addCustomOrder, getOrders, getInteriorSeats,getTechnology, getWheels, getPaintColors} from './database.js'


const seats = getInteriorSeats()
const techs = getTechnology()
const wheels = getWheels()
const paints = getPaintColors() 

//Order #1 was placed on 16895837301


const buildOrderListItem = (order) => {
    
let totalCost = 0 

    let foundSeats = seats.find(
        (seat) => {
            if (seat.id === order.interiorSeatsId)
           return totalCost += seat.price 
        }


    )

    let foundPaints = paints.find(
        (paint) => {
            if (paint.id === order.paintColorsId)
           return totalCost += paint.price 
        }


    )

    let foundWheel = wheels.find(
        (wheel) => {
            if ( wheel.id === order.wheelId)
           return totalCost += wheel.price
        }
    )

    
    let foundTech = techs.find(
        (tech) => {
            if (tech.id === order.technologiesId) {
               return totalCost += tech.price
            }
        }
    )


 

// add all pricing together
    //might need to loop
    
    return `<li>
    Order# ${order.id} was placed on $${order.timestamp} and costs ${totalCost}
    </li>`
    // Order #${order.id} was placed on ${order.timestamp}
}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}




document.addEventListener(
    'click',
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === 'orderButton') {
            //create new object to save in the database
            addCustomOrder()
        }
     
    })
