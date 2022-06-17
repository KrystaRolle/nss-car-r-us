
import { getPaintColors, setPaintColors } from "./database.js"

// export const Paints = () => {
//     return `<h2>Paints</h2>`
// }

const painted = getPaintColors()

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a technology package</option>'

    for (const paint of painted) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaintColors(parseInt(event.target.value))

        }
    }
)