const applicationState = {
    requests: [] //12. store the data referenced by serviceRequests
}

const API = "http://localhost:8088" // 7. see that API references a URL and can go to get API online
const mainContainer = document.querySelector("#container")


export const fetchRequests = () => { //5. defines fetchRequests function; get JSON data from API and turn into JS
    return fetch(`${API}/requests`) //6. go to this website and go to the section where there are requests 8. we are not fetching the requests data section of APIs website
    .then(response => response.json()) //9. taking the response of the promise{} made in step 6; translating into JavaScript language we can use
    .then(
        (serviceRequests) => { //10. taking the data that is now in JS translation and naming it to be serviceRequests
            applicationState.requests = serviceRequests //11. take the external state referenced by 'serviceRequests' and store in empty requests array
        }
    )
}
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}