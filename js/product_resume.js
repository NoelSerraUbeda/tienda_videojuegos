class ProductResume extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    removeItemHandler(event) {
        const listItem = event.target.closest('li');
        
        if (listItem) {
            listItem.remove();
        }
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        
        <style>
            .product {
                background-color: var(--secondary_color);
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-around;
                gap: 1rem;
                padding: 2rem;
                margin: 0;
            }

            

            .title{
                margin: 0;
                width:45rem;
                font-size: var(--title);
                color: var(--white);
                font-weight: 900;
            }

            .product_details {
                width: 100%;
                border-radius: 1rem;
                display: flex;
                justify-content: start;
                align-items: start;
                background-color: var(--primary_color);
                color: var(--secondary_color);
                position: relative;
            }

            .product_details h3{
                color: var(--white);
                font-size: 24px;
                margin: 4rem 0rem 0 0;
                font-weight: 900;
                text-decoration: underline;
            }

            .image_container {
                width: 45%;
                margin: 1rem;
            }

            .product_details img {
                width: 17rem;
                height: auto;
                margin: 1rem;
                cursor: pointer;
                border-radius: 1rem;
            }

            .product_details_item {
                width: 100%;
                font-size: 20px;
            }

            .remove-item{
                height:5rem;
                background:none;
                border: none;
            }

            .remove-item svg {
                position: absolute;
                top: 0;
                right: 0;
                margin: 0.5rem;
                width: 3.5rem;
                fill: red;
                cursor: pointer;
                transition: fill 0.3s ease;
            }

            .remove-item svg:hover {
                animation: shake 0.5s ease-in-out; 
            }

            @keyframes shake {
                0%, 100% {
                    transform: rotate(0deg);
                }
                20% {
                    transform: rotate(5deg);
                }
                40% {
                    transform: rotate(-5deg);
                }
                60% {
                    transform: rotate(3deg);
                }
                80% {
                    transform: rotate(-3deg);
                }
            }

            .sale_price {
                text-decoration:line-through;
                color: red;
            }

            .discounted_price {
                color: green;
                font-weight: 900;
            }
        </style>

        <ul class="product">
            <h3 class="title">Tu carrito</h3>
            <li class="product_details">
                <div class="image_container">
                    <img class="game_image" src="images/box_art1.png" alt="Nombre del juego">
                </div>
                <div class="product_details_item">
                    <h3>Yoshi Commits Tax Fraud</h3>
                    <p>Plataforma: Xbox One</p>
                    <p>Precio: $29.99</p>
                    <p>Versión: Físico</p>
                </div>
                <button class="remove-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </button>
            </li>
            <li class="product_details">
                <div class="image_container">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2395164-1b0c-43f2-b791-eed469f64075/d7r4cap-3e96e574-27d1-41e2-873e-98e565a75521.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyMzk1MTY0LTFiMGMtNDNmMi1iNzkxLWVlZDQ2OWY2NDA3NVwvZDdyNGNhcC0zZTk2ZTU3NC0yN2QxLTQxZTItODczZS05OGU1NjVhNzU1MjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yIyz-FdOK7YiaKZn_5LaiZPwbGP5_8i1sxneoam9YLA"
                        alt="box-art2">
                </div>
                <div class="product_details_item">
                    <h3>Kingdom Hearts 2.5 Remix</h3>
                    <p>Plataforma: PS4</p>
                    <p class="sale_price">Precio: $49.99</p>
                    <p class="discounted_price">Precio: $29.99</p>
                    <p>Versión: Físico</p>
                </div>
                <button class="remove-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </button>
            </li>
        </ul>
        `;

        const removeButtons = this.shadow.querySelectorAll('.remove-item');
        removeButtons.forEach((button) => {
            button.addEventListener('click', this.removeItemHandler);
        });

        const gameImages = this.shadow.querySelectorAll('.game_image');
        gameImages.forEach((image) => {
            image.addEventListener('click', () => {
                window.location.href = 'ficha.html';
            });
        });
    } 
}
customElements.define('resume-component', ProductResume);


