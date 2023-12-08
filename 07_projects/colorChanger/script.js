const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "green":
                body.style.backgroundColor = e.target.id
                break
            case "cyan":
                body.style.backgroundColor = e.target.id
                break
            case "white":
                body.style.backgroundColor = e.target.id
                break
        }
    })
})