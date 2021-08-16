import { sendRequest } from "./dataAccess.js";

export const ServiceForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="serviceParentName">Parent's Name</label>
        <input type="text" name="serviceParentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceChildName">Child's Name</label>
        <input type="text" name="serviceChildName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceAddress">Address of Home</label>
        <input type="text" name="serviceAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceReservationDate">Date of Reservation</label>
        <input type="date" name="serviceReservationDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceLength">Length in Hours</label>
        <input type="number" name="serviceLength" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    const userParentName = document.querySelector("input[name='serviceParentName']").value
    const userChildName = document.querySelector("input[name='serviceChildName']").value
    const userAddress = document.querySelector("input[name='serviceAddress']").value
    const userReservationDate = document.querySelector("input[name='serviceReservationDate']").value
    const userLength = document.querySelector("input[name='serviceLength']").value

    const dataToSendToAPI = {
        parentName: userParentName,
        childName: userChildName,
        address: userAddress,
        reservationDate: userReservationDate,
        length: userLength
    }

    sendRequest(dataToSendToAPI)
    
})