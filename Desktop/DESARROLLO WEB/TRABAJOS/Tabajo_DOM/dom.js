//1
function mostrarOcultarParrafo() {
    if (document.getElementById("parrafo1").style.visibility != "hidden")
    {
        document.getElementById("parrafo1").style.visibility = "hidden";
    } else {
        document.getElementById("parrafo1").style.visibility = "visible";
    }
}

document.getElementById("boton1").addEventListener("click", mostrarOcultarParrafo);

//2
function mostrarOcultarTituloFoto() {
    if (document.getElementById("titulo_foto").style.visibility != "hidden")
    {
        document.getElementById("titulo_foto").style.visibility = "hidden";
    } else {
        document.getElementById("titulo_foto").style.visibility = "visible";
    }
}

document.getElementById("gato_lloron").addEventListener("mouseover", mostrarOcultarTituloFoto);
document.getElementById("gato_lloron").addEventListener("mouseout", mostrarOcultarTituloFoto);

//3

function listar() {
    const section = document.getElementById("perros_gatos")
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const node1 = document.createTextNode("Perros");
    const node2 = document.createTextNode("Gatos");
    section.appendChild(ul);
    ul.appendChild(li1);
    li1.appendChild(node1);
    ul.appendChild(li2)
    li2.appendChild(node2);


}

document.getElementById("boton2").addEventListener("click", listar);