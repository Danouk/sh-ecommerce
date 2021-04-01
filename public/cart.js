let badgeCarrito = document.getElementById('badgeCarrito')
let shopping = document.getElementById('shoppingCart')
var total = 0

if(localStorage.getItem('tuNombre')){
    var nombre = localStorage.getItem('tuNombre')
    document.getElementById('hola').innerHTML = `Hola! ${nombre}`
}

function categoriesApi(){
    console.log('acá va la funcionalidad')
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=> res.json())
        .then(res=>{
            const categoriesNac = document.getElementById('categoriesNav')
            for (categories of res){
                let modelo = 
                `<li><a href="categ.html" type="button" value="${categories}">${categories}</a></li>`
            categoriesNac.innerHTML+=modelo
            }
        })
        .then(json=>console.log(json))
}

document.addEventListener('click', function(e){
    if(e.target.localName == 'a'){
        let selec = e.target.closest("a")
        console.log('selecciono', selec)

        let direccionCate = selec.getAttribute('value')
        localStorage.setItem('url', direccionCate)
        console.log('direccion url value', direccionCate)
    }
})

function verifStorageCarrito(){
if(localStorage.getItem('carrito')){
    console.log('items local', localStorage.getItem('carrito'))
    let guardado = localStorage.getItem('carrito');
    var e = guardado.split(',')
    console.log(e.length)

    document.getElementById('animation').style.display = "block"

    for (let index = 0; index < e.length; index++) {
        mostrarProductoShopping(e[index])
    }
    document.getElementById('animation').style.display = "none"
    document.getElementById('prodList').style.display = "block"
        console.log('total', total)

} else { 
    let modelo = ``
    shopping.innerHTML = modelo

    document.getElementById('total').style.display = "none"

    document.querySelector('p').innerHTML = 'Anda a la categoría que más te guste y agregá productos a tu carrito &#128035;'
    document.getElementById('prodList').style.display = "block"
    document.getElementById('animation').style.display = "none"

}
}

//Cargar nro a badge carrito verifCarrito() - esta
// tomar Id Producto - esta
// buscarlo con Api - esta
// cargarlo con modelo
// sumar precios y cargarlo a TOTAL

// document.getElementById('deleteCart').addEventListener('click', function(){
//     localStorage.clear()
// })

// document.getElementById('deleteCart').click = function(){
//     localStorage.clear()
//     console.log('clear')   
// }
function deleted(){
    localStorage.clear('carrito')
    console.log('clear')
    verifStorageCarrito()
}

function mostrarProductoShopping(id){
fetch('https://fakestoreapi.com/products/'+id+'')
    .then(res=>res.json())
    .then(res =>{
        let modelo = 
        `<div class="car">
            <div class="cartCard">
                <div class="imgCard">
                    <img src="${res.image}" class="card-img-top" alt="...">
                </div>
                <div class="descriptionCard">
                    <h5 class="card-title">${res.title}</h5>
                    <p>$ ${res.price}.- </p>
                </div>
            </div>
        </div>`
        console.log('total api', total)
        total = total + res.price

        shopping.innerHTML += modelo
        document.getElementById('totalPrice').innerHTML = `Total a pagar <span>$${total}</span>.- `

        // none
    })
    .then(json=>console.log(json))
}

function verifCarritoBadge(){
if(localStorage.getItem('carrito')){
    console.log('items local', localStorage.getItem('carrito'))
    var item = localStorage.getItem('carrito')
    var cantidadItem = item.split(',')
    badgeCarrito.innerHTML = cantidadItem.length
} else {
    console.log('no hay productos en el carrito')
    badgeCarrito.innerHTML = 0
}
}

categoriesApi()
verifCarritoBadge()
verifStorageCarrito()

