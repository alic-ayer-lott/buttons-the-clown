import { getRequests, deleteRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map((request)=> {
                return `<li>Party for ${request.childName} booked by ${request.parentName} on ${request.reservationDate}.
                <button class"request__delete"
                    id="request--${request.id}">
                DENY
                </button>
                </li>`})
                .join("")
            }
        </ul>
    `

    return html
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})