const vpnContainer = document.getElementById('vpn-container');
const proxyContainer = document.getElementById('proxy-container');
const otherContainer = document.getElementById('other-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-icon">
            <i class="${product.icon || 'fa-solid fa-vault'}"></i>
        </div>
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p class="validity">Valid: ${product.valid}</p>
        <a href="${product.telegramLink}" target="_blank" class="buy-btn">
            <i class="fa-brands fa-telegram"></i> Buy Now
        </a>
    `;

    // ক্যাটাগরি চেক করে সঠিক বক্সে ডাটা পাঠানো হচ্ছে
    if (product.category === 'vpn') {
        vpnContainer.appendChild(card);
    } else if (product.category === 'proxy') {
        proxyContainer.appendChild(card);
    } else if (product.category === 'other') {
        otherContainer.appendChild(card);
    }
});
