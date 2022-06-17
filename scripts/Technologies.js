import { getTechnology, setTechnology} from "./database.js"


const techs = getTechnology()
// export const Technologies = () => {

//     return `<h2>Technologies</h2>`
// }


export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techs.map((tech) => {
            return `<option value="${tech.id}">${tech.packageType}</option>`
        }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

//add event listener that reacts to user choosing option

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)