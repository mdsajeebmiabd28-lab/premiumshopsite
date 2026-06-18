const container = document.getElementById('products-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a href="${product.telegramLink}" target="_blank" class="buy-btn">Buy via Telegram</a>
    `;
    container.appendChild(card);
});
