import { sendRequest } from "./dataAccess.js";

export const ServiceForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent's Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child's Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address of Home</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationDate">Date of Reservation</label>
        <input type="date" name="reservationDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="length">Length in Hours</label>
        <input type="number" name="length" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userLength = document.querySelector("input[name='length']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            address: userAddress,
            reservationDate: userReservationDate,
            length: userLength
        }

        sendRequest(dataToSendToAPI)
    }
})