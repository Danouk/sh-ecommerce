let titleModal = document.getElementById('titleModal')
let imgProdModal = document.getElementById('imgProductModal')
let descriptionProdModal = document.getElementById('descriptionProductModal')
let priceProdModal = document.getElementById('priceProductModal')
let spanId = document.getElementById('spanIdProd')
let cargo = false
let cantCarrito = document.getElementById('cantCarrito')


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
categoriesApi()
productsElectronics()
cargarProductCategori()
verifCarrito()

// document.addEventListener('click', function(e){
//     if(e.target.localName == 'a'){
//         let selec = e.target.closest("a")
//         console.log('selecciono', selec)

//         let direccionCate = selec.getAttribute('value')
//         localStorage.setItem('url', direccionCate)
//         console.log('direccion url value', direccionCate)
//     }
// })

document.addEventListener('click', function(e){
   
    if(e.target.localName == 'a'){
        let selec = e.target.closest("a")
        console.log('selecciono', selec)
        console.log('selecciono', selec.getAttribute('value'))

        
            let direccionCate = selec.getAttribute('value')
            localStorage.setItem('url', direccionCate)
            console.log('direccion url value', direccionCate)  
      

       
    }
})

function verifCarrito(){
    if(localStorage.getItem('carrito')){
        console.log('items local', localStorage.getItem('carrito'))
        var item = localStorage.getItem('carrito')
        var cantidadItem = item.split(',')
        cantCarrito.innerHTML = cantidadItem.length
    }  
}

document.addEventListener('click', function(e){
    
    if(e.target.localName == 'button'){
        let item = e.target.closest('button')
        let id = item.getAttribute('idProduct')
        console.log('item', item)
        console.log('id item', id)
        oneProduct(id)

    }  
    if(e.target.localName == 'a'){
        console.log('target a', e.target)
        let sp = e.target.closest("a")
        // console.log('ver a', sp)
        let idAddCarro = sp.getAttribute('idProduct')
        console.log('idAdd', idAddCarro)
        if(idAddCarro == null){
            console.log('nada paso null', idAddCarro)
        } else {
            $('.toast').toast('show');
            console.log('idAdd wew', idAddCarro)

        // Get the existing data
        var existing = localStorage.getItem('carrito');
        

        // If no existing data, create an array
        // Otherwise, convert the localStorage string to an array
        existing = existing ? existing.split(',') : [];

        // Add new data to localStorage Array
        existing.push(idAddCarro);

        // Save back to localStorage
        localStorage.setItem('carrito', existing.toString());

        // carritoStorage.push(idAddCarro)
        // localStorage.setItem('carrito', carritoStorage)
        console.log('id attribute prod', idAddCarro)
        verifCarrito()
    }
    }
})

function cargarProductCategori(){
    if(localStorage.getItem('url')){
        var u = localStorage.getItem('url')
        console.log('ruta desde local storage', u)
        productsElectronics(u)
    }
}

function productsElectronics(nameCat){
     document.getElementById('animation').style.display = "block"

    fetch('https://fakestoreapi.com/products/category/'+nameCat+'')
    .then(res=>res.json())
    .then(res=>{
        const electronicsProduct = document.getElementById('productsDivRowCategoria')
        for (products of res){
        console.log('products', products)
        let modelo = 
            `<div class="car">
                <div>
                    <div class="imgCard">
                        <img src="${products.image}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body padCard">
                        <h5 class="card-title">${products.title}</h5>
                        <p>$ ${products.price}.- </p>
                        <button type="button"  id="probandoBtn" idProduct="${products.id}" class="btn btn-dark " data-toggle="modal" data-target="#exampleModal">
                        Ver</button>
                        <a type="button"  id="spanIdProd" idProduct="${products.id}" class="btn btn-primary" data-dismiss="modal"> <i class="fas fa-angle-double-right"></i> Agregar al carrito</a>
                    </div>
                </div>
            </div>`
            electronicsProduct.innerHTML += modelo
        }
        // setTimeout(() => {
        document.getElementById('animation').style.display = "none"
        document.getElementById('prodList').style.display = "block"
        // }, 1000);
    })
    .then(json=>console.log(json))
    // document.getElementById('animation').style.display = "none"
    // document.getElementById('prodList').style.display = "block"
}

function oneProduct(id){
    fetch('https://fakestoreapi.com/products/'+id+'')
            .then(res=>res.json())
            .then(res=> {
                spanId.setAttribute('idProduct', res.id)
                titleModalHeader.innerHTML = res.title
                titleModal.innerHTML = res.title
                imgProdModal.src = res.image
                descriptionProdModal.innerHTML = res.description
                let modelo = `$ ${res.price} .-`
                priceProdModal.innerHTML = modelo
            })
            .then(json=>console.log(json))
}

