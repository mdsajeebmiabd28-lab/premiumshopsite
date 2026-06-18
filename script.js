const vpnBox = document.getElementById('vpn-box');
const proxyBox = document.getElementById('proxy-box');
const subsBox = document.getElementById('subs-box');

products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'custom-product-card';
    // আ্যনিমেশন লেট করার জন্য staggered delay ইফেক্ট
    card.style.animationDelay = `${index * 0.08}s`;
    
    card.innerHTML = `
        <div class="card-visual-header">
            <img src="${product.imageUrl}" alt="${product.name}" class="card-cover-img" loading="lazy">
            <div class="card-glitch-overlay"></div>
        </div>
        <div class="card-details-area">
            <h3 class="card-product-title">${product.name}</h3>
            <div class="card-meta-metrics">
                <span class="card-price-tag">${product.price}</span>
                <span class="card-duration">${product.valid}</span>
            </div>
            <a href="${product.telegramLink}" target="_blank" class="card-action-trigger">
                <i class="fa-brands fa-telegram"></i> Acquire Access
            </a>
        </div>
    `;

    if (product.category === 'vpn') {
        vpnBox.appendChild(card);
    } else if (product.category === 'proxy') {
        proxyBox.appendChild(card);
    } else if (product.category === 'other') {
        subsBox.appendChild(card);
    }
});
