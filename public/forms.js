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