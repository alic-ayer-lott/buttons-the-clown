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

mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("request--")) {
            const [,requestId] = event.target.id.split("--")
            deleteRequest(requestId)
        }
    }
)