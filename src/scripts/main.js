import { fetchRequests } from "./dataAccess.js";
import { ButtonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container") // 2. This is like a pipeline; mainContainer references the html #container (document is our website; the container is the main html that viewer will see)

mainContainer.addEventListener("stateChanged",
    (event) => {
        render()
        console.log("State changed.")
    }
)

const render = () => {
        fetchRequests().then(
            () => {
                mainContainer.innerHTML = ButtonsTheClown() //innerHTML means we are going to put some HTML here in the mainContainer
            }
        )
}

render() //1. calling the function here