const loadAllProduct = ()=>{
    fetch ('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>displayAllProduct(data))
}

const displayAllProduct =(products)=>{
 const productsContainer =document.getElementById("products-container")
  productsContainer.innerHTML = "";

  products.forEach(product=>{
    const productCard = document.createElement("div")
     productCard.innerHTML = `
     <div class="card bg-base-100 w-76  h-120 shadow-lg">
            <figure>
                <img class="w-52 h-64" src= "${product.image}"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title justify-between">
                    ${product.category}
                    <div class="badge badge-secondary"><i class="fa-regular fa-star"></i> ${product.rating.rate}</div>
                </h2>
                <p class="truncate"> ${product.description} </p>
                <h1 class="font-bold text-lg">$ ${product.price}</h1>
                <div class="card-actions justify-between">
                    <div class="btn"><i class="fa-regular fa-eye"></i>Details</div>
                    <div class=" btn btn-primary"></i><i class="fa-solid fa-cart-plus"></i> Add</div>
                </div>
            </div>
        </div>
     `
    productsContainer.appendChild(productCard)
  })
}

// category
const loadCategory = ()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=>res.json())
    .then(data=>displayCategory(data))
}

const displayCategory =(categories)=>{
    console.log(categories)
}

loadCategory()