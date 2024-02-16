const boton = document.querySelector("#boton")

boton.addEventListener("click", () => {
    Notification.requestPermission()
        .then(resultado => console.log(`el resultado es ${resultado}`))
});

if(Notification.permission == "granted") {
    new Notification("esta es una noti", {
        icon: "img/bomdia.jpg",
        body: "bom diaaaa"
    })
}