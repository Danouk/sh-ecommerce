document.getElementById('tuNombreBtn').addEventListener('click', function(){
    console.log('tunombre', document.getElementById('tuNombreInput').value)
    if(document.getElementById('tuNombreInput').value != ''){
    localStorage.setItem('tuNombre', document.getElementById('tuNombreInput').value)
    document.getElementById('tuNombreBtn').innerHTML = `<i class="fas fa-check-double"></i>`
    document.getElementById('tuNombreBtn').classList = "checkName"}
})



function categoriesApi(){
    document.getElementById('animation').style.display = "block"
    document.getElementById('sectionHome').style.display = "none"
    document.getElementById('sectionCategories').style.display = "none"
    document.getElementById('footer').style.display = "none"
    console.log('acá va la funcionalidad'),
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=> res.json())
        .then(res=>{
            const categoriesNac = document.getElementById('categoriesNav')
            const categoriesCard = document.getElementById('cardCategories')
                for (categories of res){
                    let modelo = 
                    `<li><a href="categ.html" type="button" value="${categories}">${categories}</a></li>`
                    categoriesNac.innerHTML+=modelo  

                    let modeloCard = 
                    `<div class="joyHover col-sm">
                    <div>
                        <div>
                            <img src="img/${categories}.jpg" alt="" style="width: 100%;
                            height: auto;">
                            <h1>${categories}</h1>
                            <a href="categ.html" type="button" value="${categories}" class="urlCategori">Ver más! <i class="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                    </div>`
                    categoriesCard.innerHTML+=modeloCard
                }
            document.getElementById('animation').style.display = "none"
            document.getElementById('sectionHome').style.display = "block"
            document.getElementById('sectionCategories').style.display = "block"
            document.getElementById('footer').style.display = "block"
        })
        .then(json=>console.log(json))
}
categoriesApi()

document.addEventListener('click', function(e){
   
    if(e.target.localName == 'a'){
        let selec = e.target.closest("a")
        console.log('selecciono', selec)

        let direccionCate = selec.getAttribute('value')
        localStorage.setItem('url', direccionCate)
        console.log('direccion url value', direccionCate)
    }
})

 let cantCarrito = document.getElementById('cantCarrito')

 if(localStorage.getItem('carrito')){
     console.log('items local', localStorage.getItem('carrito'))
     var item = localStorage.getItem('carrito')
     var cantidadItem = item.split(',')
     cantCarrito.innerHTML = cantidadItem.length

 }



// function darkmode(){
//     var cuerpo = document.body
//     cuerpo.classList.toggle('darkMode')
// }

// let nameCat = 'women clothing'
// let productIdBtn = document.getElementsByClassName('btn')
// let error = true

// if (!categoriesApi()){
//     console.log(productIdBtn)
// } else {
//     console.log(productIdBtn)

// }


// function productsCategory(nameCategory){
//     fetch('https://fakestoreapi.com/products/category/'+nameCategory+'?limit=4')
//             .then(res=>res.json())
//             .then(res=>{
//                 const daddyCategories = document.getElementById('categories')
//                 for (categories of res){
//                     let modelo = 
//                     `<div class="card col-4">
//                     <img src="${categories.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${categories.title}</h5>
//                       <a class="btn btn-primary" class="btnProductCategory" value="${categories.id}">Go somewhere</a>
//                     </div>
//                   </div>`
//                   daddyCategories.innerHTML += modelo
//                 console.log('res for', categories)
//                 }
                
//             })
//             .then(json=>console.log(json))
// }