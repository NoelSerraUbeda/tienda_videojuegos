class Product extends HTMLElement {
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
            <h1>Yoshi Commits Tax Fraud</h1>
            <div class="section">
                <img class="product_image" src="images/box_art1.png" alt="Nombre del Juego">
                <div class="game_description">
                    <p class=""><span>Plataformas:</span> PlayStation, Xbox, PC</p>
                    <p class="developer"><span>Desarrollador:</span> Nombre del Desarrollador</p>
                    <p class="publisher"><span>Editor:</span> Nombre del Editor</p>
                    <p class="genre"><span>Género:</span> Acción, Aventura</p>
                    <p class="release_date"><span>Fecha de lanzamiento:</span> 01 de enero de 2023</p>
                    <p class="languages"><span>Idiomas:</span> Español, Inglés</p>
                    <div class="product_status">
                        <a class="send_cart" href="carrito.html">
                            <div class="price">
                                <p>$29.99</p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 18C20.3978 18 20.7794 18.158 21.0607 18.4393C21.342 18.7206 21.5 19.1022 21.5 19.5C21.5 19.8978 21.342 20.2794 21.0607 20.5607C20.7794 20.842 20.3978 21 20 21C19.1675 21 18.5 20.325 18.5 19.5C18.5 18.6675 19.1675 18 20 18ZM8 6H10.4525L11.1575 7.5H22.25C22.4489 7.5 22.6397 7.57902 22.7803 7.71967C22.921 7.86032 23 8.05109 23 8.25C23 8.3775 22.9625 8.505 22.91 8.625L20.225 13.4775C19.97 13.935 19.475 14.25 18.9125 14.25H13.325L12.65 15.4725L12.6275 15.5625C12.6275 15.6122 12.6473 15.6599 12.6824 15.6951C12.7176 15.7302 12.7653 15.75 12.815 15.75H21.5V17.25H12.5C11.6675 17.25 11 16.575 11 15.75C11 15.4875 11.0675 15.24 11.18 15.03L12.2 13.1925L9.5 7.5H8V6ZM12.5 18C12.8978 18 13.2794 18.158 13.5607 18.4393C13.842 18.7206 14 19.1022 14 19.5C14 19.8978 13.842 20.2794 13.5607 20.5607C13.2794 20.842 12.8978 21 12.5 21C11.6675 21 11 20.325 11 19.5C11 18.6675 11.6675 18 12.5 18ZM19.25 12.75L21.335 9H11.855L13.625 12.75H19.25Z"/>
                                    <path d="M8 12.5714H4.57143V16H3.42857V12.5714H0V11.4286H3.42857V8H4.57143V11.4286H8V12.5714Z"/>
                                </svg>
                                </div>
                            </a>
                        </div>
                    <div class="age_rating">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PEGI_18.svg/640px-PEGI_18.svg.png">
                        <img src="https://pegi.info/sites/default/files/inline-images/gambling-black-EN.jpg">
                        <img src="https://pegi.info/sites/default/files/inline-images/violence-black-EN.jpg">
                    </div>
                    <div class="add_wishlist">
                        <div class="tooltip">
                            <svg class="navbar_wishlist" viewBox="0 0 34 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 17.2857H8.28571V22H6.71429V17.2857H2V15.7143H6.71429V11H8.28571V15.7143H13V17.2857Z" />
                                <path
                                    d="M23.5 25L22.2675 23.921C17.89 20.1035 15 17.5777 15 14.4959C15 11.97 17.057 10 19.675 10C21.154 10 22.5735 10.6621 23.5 11.7003C24.4265 10.6621 25.846 10 27.325 10C29.943 10 32 11.97 32 14.4959C32 17.5777 29.11 20.1035 24.7325 23.921L23.5 25Z" />
                            </svg>
                            <span class="tooltiptext">Add to the Wishlist</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="game_description_text">Yoshi Committs Tax Fraud refers to jokes that the Nintendo character Yoshi
                of the Super Mario series illegally evaded paying his taxes.
                The joke saw minor spread on social media before being popularized by several Siivagunner videos in
                April of 2018.
            </p>


        <style>

            .section {
                display: flex;
                justify-content: space-around;
                margin: auto;
                width: 100%;
            }
            
            h1 {
                text-align: center;
                font-size: 36px;
            }

            .game_description {
                padding: 1rem;
                font-size: var(--game_data);
                width: 50%;
                position: relative;
            }

            .game_description span {
                text-decoration: underline;
            }

            .product_image {
                height: 30rem;
                border-radius: 1rem;
                border: var(--secondary_color) 1rem solid;
            }

            .age_rating {
                display: flex;
                justify-content: end;
                gap: 1rem;
                position: absolute;
                bottom: 5rem;
                right: 0;
            }

            .age_rating img {
                height: 4rem;
                padding: 0.2rem;
            }

            .add_wishlist {
                display: flex;
                justify-content: end;
                gap: 1rem;
                position: absolute;
                bottom: 5rem;
                right: 0;
                top: 0;
            }

            .add_wishlist svg {
                height: 5rem;
                border-radius: 50%;
                padding: 0.2rem;
                fill: var(--primary_color);
                cursor: pointer;
            }

            .add_wishlist svg:hover{
                fill: var(--secondary_color);
            }

            .tooltip {
                position: relative;
                display: inline-block;
            }

            .tooltip .tooltiptext {
                background-color: var(--primary_color);
                color: var(--secondary_color);
                font-size: 20px;
                visibility: hidden;
                width: 120px;
                font-weight: bolder;
                text-align: center;
                border-radius: 5px;
                padding: 0.05rem;
                position: absolute;
                z-index: 1;
                bottom: -50%;
                left: 50%;
                margin-left: -60px;
                opacity: 0;
                transition: opacity 0.3s;
                text-decoration: none;
            }

            .tooltip:hover .tooltiptext {
                visibility: visible;
                opacity: 1;
            }

            .product_status {
                display:flex;
                gap:2rem;
            }

            .price {
                font-weight: 600;
                color: var(--white);
                font-size: var(--price_text);
                background-color: var(--secondary_color);
                width: fit-content;
                padding: 0 1rem 0 1rem;
                border-radius: 2rem;
                cursor: pointer;
                display:flex;
                flex-direction:row-reverse;
                justify-content:center;
                alig-items:center;
                gap:1rem;
                transition: transform 0.2s ease-in-out;
            }

            .price:hover {
                transform: scale(1.1);
            }

            .send_cart {
                text-decoration:none;
            }
            
            .price svg {
                width: 5rem;
                fill: var(--white);
            }

            .price:hover  {
                background-color: var(--sale);
            }
            
            .add_wishlist .tooltip {
                height: 0;
            }

            .game_description_text {
                background-color: var(--primary_color);
                border: 5px solid var(--white);
                border-radius: 1rem;
                font-size: larger;
                padding: 1rem;
                font-size: var(--game_data);
            }
        </style>

      `;
    }

}
customElements.define('product-component', Product);


