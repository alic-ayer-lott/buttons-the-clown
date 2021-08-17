import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const ButtonsTheClown = () => {
    return `
    <h1>Button's Clown Rental</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>
    
    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `
}