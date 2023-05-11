function cargarPagina() {
    var contenedor = document.getElementById("cont")
    contenedor.style.display = "grid"
    contenedor.style.gridTemplateColumns = "25% 25% 25% 25%"


    var cuadro1 = document.createElement("div")
    var img1 = document.createElement("img")
    img1.style.width = "100%"
    img1.style.height = "100%"
    img1.src = "recursos/imagenes/cuadro1.png"
    cuadro1.appendChild(img1)
    contenedor.appendChild(cuadro1)

    var cuadro2 = document.createElement("div")
    var img2 = document.createElement("img")
    img2.style.width = "100%"
    img2.style.height = "100%"
    img2.src = "recursos/imagenes/cuadro2.png"
    cuadro2.appendChild(img2)
    contenedor.appendChild(cuadro2)

    var cuadro3 = document.createElement("div")
    var img3 = document.createElement("img")
    img3.style.width = "100%"
    img3.style.height = "100%"
    img3.src = "recursos/imagenes/cuadro3.png"
    cuadro3.appendChild(img3)
    contenedor.appendChild(cuadro3)

    var cuadro4 = document.createElement("div")
    var img4 = document.createElement("img")
    img4.style.width = "100%"
    img4.style.height = "100%"
    img4.src = "recursos/imagenes/cuadro4.png"
    cuadro4.appendChild(img4)
    contenedor.appendChild(cuadro4)

    var cuadro5 = document.createElement("div")
    cuadro5.style.gridRow = "2 / 4"
    var img5 = document.createElement("img")
    img5.style.width = "100%"
    img5.style.height = "100%"
    img5.src = "recursos/imagenes/cuadro5.png"
    cuadro5.appendChild(img5)
    contenedor.appendChild(cuadro5)

    var cuadro6 = document.createElement("div")
    cuadro6.style.gridColumn = "2 / 4"
    var img6 = document.createElement("img")
    img6.style.width = "100%"
    img6.style.height = "100%"
    img6.src = "recursos/imagenes/cuadro6.png"
    cuadro6.appendChild(img6)
    contenedor.appendChild(cuadro6)

    var cuadro7 = document.createElement("div")
    cuadro7.style.backgroundColor = "black"
    cuadro7.style.gridColumn = "4 / 5"
    cuadro7.style.gridRow = "2 / 4"
    var divgrande = document.createElement("div")
    divgrande.style.margin = "10%"
    var formulario = document.createElement("form")
    cuadro7.appendChild(divgrande)
    var texto = document.createElement("h2")
    texto.innerText = "Book a Session"
    texto.style.color = "white"
    divgrande.appendChild(texto)
    divgrande.appendChild(formulario)

    //primerInput
    var divInput1 = document.createElement("div")
    divInput1.style.padding = "3%"
    divInput1.style.border = "solid white 2px"
    var input1 = document.createElement("input")
    input1.style.color = "white"
    input1.style.width = "100%"
    input1.style.border = "0"
    input1.style.outline = "none"
    input1.placeholder = "Name"
    input1.style.backgroundColor = "black"
    divInput1.appendChild(input1)
    formulario.appendChild(divInput1)


    //segundoInput
    var divInput2 = document.createElement("div")
    divInput2.style.marginTop = "5%"
    divInput2.style.padding = "3%"
    divInput2.style.border = "solid white 2px"
    var input2 = document.createElement("input")
    input2.type = "email"
    input2.style.color = "white"
    input2.style.width = "100%"
    input2.style.border = "0"
    input2.style.outline = "none"
    input2.placeholder = "Email Address"
    input2.style.backgroundColor = "black"
    divInput2.appendChild(input2)
    formulario.appendChild(divInput2)

    //tercerInput
    var divInput3 = document.createElement("div")
    divInput3.style.marginTop = "5%"
    divInput3.style.padding = "3%"
    divInput3.style.border = "solid white 2px"
    var input3 = document.createElement("textarea")
    input3.rows = "11"
    input3.cols = "31"
    input3.style.color = "white"
    input3.style.border = "0"
    input3.style.resize = "none"
    input3.placeholder = "Message"
    input3.style.backgroundColor = "black"
    divInput3.appendChild(input3)
    formulario.appendChild(divInput3)

    //boton
    var divBotonSend = document.createElement("div")
    divBotonSend.style.textAlign = "end"
    divBotonSend.style.width = "100%"
    divBotonSend.style.marginTop = "10%"
    var boton = document.createElement("input")
    boton.type = "button"
    boton.value = "Send Now"
    boton.style.paddingTop = "10px"
    boton.style.paddingBottom = "10px"
    boton.style.paddingLeft = "30px"
    boton.style.paddingRight = "30px"
    boton.style.backgroundColor = "red"
    boton.style.color = "white"

    divBotonSend.appendChild(boton)
    formulario.appendChild(divBotonSend)





    contenedor.appendChild(cuadro7)

    var cuadro8 = document.createElement("div")
    var img8 = document.createElement("img")
    img8.style.width = "100%"
    img8.style.height = "100%"
    img8.src = "recursos/imagenes/cuadro8.png"
    cuadro8.appendChild(img8)
    contenedor.appendChild(cuadro8)

    var cuadro9 = document.createElement("div")
    var img9 = document.createElement("img")
    img9.style.width = "100%"
    img9.style.height = "100%"
    img9.src = "recursos/imagenes/cuadro9.png"
    cuadro9.appendChild(img9)
    contenedor.appendChild(cuadro9)




}