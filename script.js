const productContainer =
document.getElementById("products");

products.forEach(product => {

productContainer.innerHTML += `

<div class="card">

${product.status === "Sold Out"
? '<div class="sold">SOLD OUT</div>'
: ''}

<img src="${product.image}" alt="">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<a href="https://t.me/sajeebtechbd" target="_blank">

<button>Buy Now</button>

</a>

</div>

`;

});
