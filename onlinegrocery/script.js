document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Cannabis(100mg)", price: 1000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\cannabis.JPEG" },
        { id: 2, name: "Heroin(100mg)", price: 2000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\heroin.JPEG" },
        { id: 3, name: "Gamma-hydroxybutyrate(GHB)", price: 2500, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\ghb.JPEG" },
        { id: 4, name: "Meth Crystal(100mg)", price: 3000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\meth.JPEG" },
        { id: 5, name: "Hookah Flavor", price: 110, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\Hookah.JPEG" },
        { id: 6, name: "Shatter(300mg)", price: 9000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\shatter.JPEG" },
        { id: 7, name: "MDMA(100mg)", price: 4000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\mdma.JPEG" },
        { id: 8, name: "LSD Stamps(per stamp)", price: 10000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\lsd.JPEG" },
        { id: 9, name: "Ketamine(50mg)", price: 900, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\ketamine.JPEG" },
        { id: 10, name: "Cocaine(100mg)", price: 5000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\coca.JPEG" },
        { id: 11, name: "Opium(100mg)", price: 5000, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\opium.JPG" },
        { id: 12, name: "Poppers(40mg)", price: 3500, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\poppers.JPG" },
        { id: 13, name: "Durex Condom", price: 359, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\Durex.JPEG" },
        { id: 14, name: "OCB sheet", price: 95, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\ocb.JPEG" },
        { id: 15, name: "Magic Mushroom with Forest Honey", price: 1500, image: "C:\\Users\\sowmiya\\OneDrive\\Desktop\\Projects\\img\\MM.JPEG" },
        
    ];

    const productListDiv = document.getElementById("product-list");
    const shoppingCartDiv = document.getElementById("shopping-cart");
    const totalPriceDiv = document.createElement("div");
    totalPriceDiv.classList.add("total-price");

    const shoppingCart = [];

    function formatPrice(price) {
        
        return `₹${price.toFixed(2)}`;
    }

    function updateCart() {
        shoppingCartDiv.innerHTML = "";
        let totalPrice = 0;

        shoppingCart.forEach(cartItem => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            cartItemDiv.innerHTML = `
                <div>
                    <img src="${cartItem.image}" alt="${cartItem.name}" class="product-img">
                    <span>${cartItem.name}</span>
                    <span> ${formatPrice(cartItem.price)}</span>
                </div>
                <button onclick="removeFromCart(${cartItem.id})">Remove</button>
            `;

            shoppingCartDiv.appendChild(cartItemDiv);
            totalPrice += cartItem.price;
        });

        totalPriceDiv.textContent = `Total Price: ${formatPrice(totalPrice)}`;
        shoppingCartDiv.appendChild(totalPriceDiv);
    }

    window.addToCart = function (productId) {
        const selectedProduct = products.find(product => product.id === productId);
        shoppingCart.push(selectedProduct);
        updateCart();
    };

    window.removeFromCart = function (productId) {
        const index = shoppingCart.findIndex(item => item.id === productId);
        if (index !== -1) {
            shoppingCart.splice(index, 1);
            updateCart();
        }
    };

    // Display products
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h5>${product.name}</h5>
                <p>Price: ${formatPrice(product.price)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;

        productListDiv.appendChild(productCard);
    });
});
