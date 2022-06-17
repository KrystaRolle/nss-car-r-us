import { getInteriorSeats,setInteriorSeats } from "./database.js"

// export const Interiors = () => {
//     return `<h2>Interiors</h2>`
// }

const interior = getInteriorSeats()

export const Interiors = () => {
    let html = "<h2>Interior</h2>"

    html += '<select id="int">'
    html += '<option value="0">Select a interior package</option>'

    const arrayOfOptions = interior.map( (int) => {
            return `<option name="int" value="${int.id}">${int.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "int") {
            setInteriorSeats(parseInt(event.target.value))
           
        }
    }
)