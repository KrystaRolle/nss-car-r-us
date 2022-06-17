const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 500 },
        { id: 4, color: "Spring Green", price: 965 }
    ],
    interiorSeats: [
        { id: 1, type: 'Beige Fabric', price: 405 },
        { id: 2, type: 'Charcoal Fabric', price: 782 },
        { id: 3, type: 'White Leather', price: 1470 },
        { id: 4, type: 'Black Leather', price: 1997 }
    ],
    technologies: [
        { id: 1, packageType: "Basic Package", price: 12.42 },
        { id: 2, packageType: "Navigation Package", price: 736.4 },
        { id: 3, packageType: "Visibility Package", price: 1258.9 },
        { id: 4, packageType: "Ultra Package", price: 795.45 }
    ],
    wheels: [
        {
            id: 1,
            type: '17-inch Pair Radial',
            price: 2434

        },
        {
            id: 2,
            type: '17-inch Pair Radial Black',
            price: 223

        },
        {
            id: 3,
            type: '18-inch Pair Spoke Silver',
            price: 211

        },
        {
            id: 4,
            type: '18-inch Pair Spoke Black',
            price: 980

        }

    ],
    customOrders: [
        {
            id: 1,
            paintColorsId: 1,
            wheelId: 1,
            technologiesId: 1,
            interiorSeatsId: 3,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {

    }
}

export const getPaintColors = () => {
    return database.paintColors.map(paint => ({ ...paint }))
}

export const getInteriorSeats = () => {
    return database.interiorSeats.map(seat => ({ ...seat }))
}

export const getTechnology = () => {
    return database.technologies.map(tech => ({ ...tech }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setPaintColors = (id) => {
    database.orderBuilder.paintId = id
}

export const setInteriorSeats = (id) => {
    database.orderBuilder.intId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
//part two that makes temp state permanent 
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}