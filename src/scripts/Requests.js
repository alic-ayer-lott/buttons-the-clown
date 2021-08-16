import { getRequests } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map((request)=> {
                return `<li>${request}</li>`})
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