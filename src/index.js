const upload = (accept = ".jpg;.jpeg;.png;") => {
    return new Promise((resolve, reject) => {
        const el = document.createElement("input")
        el.setAttribute("accept", accept)
        el.setAttribute("type", "file")
        el.style.display = "none"
        const eventName = window.ontouchstart !== undefined ? 'touchstart' : 'focus'
        const listener = () => {
            window.addEventListener(eventName, listener, false)
            el.remove()
        }
        window.addEventListener(eventName, listener, false)
        el.addEventListener("change", (e) => {
            resolve(e.target.files)
        })
        document.body.appendChild(el)
        el.click()
    })
}

export default upload
