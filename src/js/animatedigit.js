document.addEventListener("DOMContentLoaded", function() {
    const text = "Marcos!"
    const speed = 100
    let i = 0
    const span = document.getElementById("animation-name")

    function type() {
        if(i < text.length) {
            span.textContent += text.charAt(i)
            i++
            setTimeout(type, speed)
        } else {
            const cursor = document.createElement("span")
            cursor.className = "cursor"
            span.appendChild(cursor)
        }
    }
    
    type()
})