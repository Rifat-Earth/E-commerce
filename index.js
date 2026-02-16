// all product
const loadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => displayAllProduct(data))
}

const displayAllProduct = (products) => {
    const productsContainer = document.getElementById("products-container")
    productsContainer.innerHTML = "";

    products.forEach(product => {
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
                    <button onClick= "loadDetails(${product.id})" class="btn"><i class="fa-regular fa-eye"></i>Details</button>
                    <button class=" btn btn-primary"></i><i class="fa-solid fa-cart-plus"></i> Add</button>
                </div>
            </div>
        </div>
     `
        productsContainer.appendChild(productCard)
    })
}

// details-Button

const loadDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(details => displayDetails(details))
}

const displayDetails = (details) => {
    const detailsContainer = document.getElementById("details-container")
    const detailsCard = document.createElement("div")
    detailsCard.innerHTML = `
    <h3 class="text-lg font-bold">Title: ${details.title}</h3>
               <div class="py-4 "> <p ><span class="font-bold text-lg">Description:</span> ${details.description}</p>
               </div>
                <h1 class="p-2 font-bold text-lg"><span class="font-bold text-lg">Price:</span> $ ${details.price}</h1>
    
                
                <div class="modal-action flex justify-between ">
                <button class= "btn btn-primary" > Buy Now</button>
                    <form method="dialog">
                        <button class="btn btn-primary">Close Modal</button>
                    </form>
                </div>
    `

    detailsContainer.appendChild(detailsCard)
    document.getElementById("my_modal_5").showModal()

}

//  single category

const loadSingleCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => displaySingleCategory(data))
}

const displaySingleCategory = (data) => {
    const productsContainer = document.getElementById("products-container")
    productsContainer.innerHTML = "";

    data.forEach(single => {
        const productCard = document.createElement("div")
        productCard.innerHTML = `
     <div class="card bg-base-100 w-76  h-120 shadow-lg">
            <figure>
                <img class="w-52 h-64" src= "${single.image}"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title justify-between">
                    ${single.category}
                    <div class="badge badge-secondary"><i class="fa-regular fa-star"></i> ${single.rating.rate}</div>
                </h2>
                <p class="truncate"> ${single.description} </p>
                <h1 class="font-bold text-lg">$ ${single.price}</h1>
                <div class="card-actions justify-between">
                    <button onClick = "loadDetails(${single.id})" class="btn"><i class="fa-regular fa-eye"></i>Details</button>
                    <button class=" btn btn-primary"></i><i class="fa-solid fa-cart-plus"></i> Add</button>
                </div>
            </div>
        </div>
     `
        productsContainer.appendChild(productCard)
    })


}



//all category
const loadCategory = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
        .then(res => res.json())
        .then(data => displayCategory(data))
}

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById("category-container")
    categoryContainer.innerHTML = "";
    for (let category of categories) {
        const categoryBtn = document.createElement("span")
        categoryBtn.innerHTML = `
        <button id="category-btn" class="p-2 btn text-black border-blue-600 rounded-xl">
        ${category}
        </button>
        `
        categoryBtn.addEventListener("click", () => loadSingleCategory(category));
        categoryContainer.appendChild(categoryBtn)
    }
}

loadCategory()