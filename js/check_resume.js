class Resume extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        <div class="resume_zone">
            <div class="resume_zone_product">
                <div class="image_container">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2395164-1b0c-43f2-b791-eed469f64075/d7r4cap-3e96e574-27d1-41e2-873e-98e565a75521.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyMzk1MTY0LTFiMGMtNDNmMi1iNzkxLWVlZDQ2OWY2NDA3NVwvZDdyNGNhcC0zZTk2ZTU3NC0yN2QxLTQxZTItODczZS05OGU1NjVhNzU1MjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yIyz-FdOK7YiaKZn_5LaiZPwbGP5_8i1sxneoam9YLA"
                        alt="box-art2">
                </div>
                <div class="product_summary">
                    <p>Kingdom Hearts 2.5 Remix</p>
                    <p>Plataforma:</p>
                    <p>$29,99</p>
                </div>
            </div>
            <div class="resume_zone_product">
                <div class="image_container">
                    <img class="game_image" src="images/box_art1.png" alt="Nombre del juego">
                </div>
                <div class="product_summary">
                    <p>Yoshi Commits Tax Fraud</p>
                    <p>Plataforma:</p>
                    <p>$29,99</p>
                </div>
            </div>
            <div class="price_summary">
                <p>Total a Pagar: $59,98</p>
            </div>
            <div class="cart_summary">
                <h4>Resumen:</h4>
                <div class="checkout_button">
                    <button><a href="checkout.html">Proceder al Pago</a></button>
                </div>
                <div class="pay_platform">
                    <button class="paypal"></button>
                    <button class="stripe"></button>
                </div>
                <p>2 Articulos</p>
                <p>Tarifa de servicios:--</p>
            </div>
        </div>

        <style>
            .resume_zone {
                display: flex;
                flex-direction: column;
                display: flex;
                justify-content: start;
                align-items: end;
                gap: 0.2rem;
                font-size: 27px;
            } 

            .checkout_button {
                width: 100%;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .checkout_button button {
                width: 60%;
                height: 100%;
                font-size: 2rem;
                background-color: var(--primary_color);
                border: 3px solid var(--white);
                cursor: pointer;
            }

            .pay_platform button{
                width:12rem;
                height:5rem;
                cursor:pointer;
                border:none;
                border-radius:1rem;
            }

            .checkout_button button:hover {
                background-color: var(--hovered_primary);
            }

            .checkout_button a {
                text-decoration: none;
                color: var(--white);
            }
 
            .resume_zone_product, .price_summary, .cart_summary {
                padding: 2rem;
                color: var(--white);
                background-color: var(--secondary_color);
                width: 100%;
            }

            .cart_summary {
                line-height: 0;
            }

            .price_summary {
                font-size: 30px;
            }

            .resume_zone_product {
                line-height: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: start;
            }

            .resume_zone_product img {
                width: 8rem;
            }

            .product_summary {
                padding: 0 1rem 1rem 1rem;
                width: 90%;
            }

            .pay_platform {
                display:flex;
                justify-content:center;
                align-items:center;
                margin:1rem;
                gap:2rem;
            }

            button {
                transition: transform 0.3s;
            }

            button:hover{
                transform: scale(1.1);
            }

            .paypal {
                background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14GyMwGoBN1K9sNRIkm2YRcPmyazZUluFJU1o2ZSpj1G6wqCCF_vWz2-BnHJGPbeF8sc&usqp=CAU");
                background-size:cover;
            }

            .stripe {
                background-image: url("https://ps.w.org/easy-stripe/assets/icon-256x256.png?rev=1749623");
                background-size:cover;
                background-position: center;
            }

        </style>

      `;
    }
    
}
customElements.define('product-checkout-component', Resume);


