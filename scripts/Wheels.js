import { getWheels, setWheels } from "./database.js"

const wheel = getWheels()
// export const Wheels = () => {
//     return `<h2>Wheels</h2>`
// }


export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
            <option value="0">Select a technology package</option>
            ${
                wheel.map(
                    (wheel) => {
                        return `<option name='wheel' value="${wheel.id}">${wheel.type}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheels(parseInt(event.target.value))

        }
    }
)