class Navbar extends HTMLElement {
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
        
        <style>
            .navbar {
                background-color: var(--secondary_color);
                padding: 0.5rem 10rem 1.5rem 10rem;
                justify-content: space-between;
                color: var(--white);
                align-items: center;
                display: flex;
                position: relative;
            }

            .navbar input {
                border: 5px solid var(--white);
                color: var(--white);
                border-radius: 3rem;
                position: relative;
                text-indent: 4rem;
                background: none;
                font-size: 3rem;
                width: 35rem;
                height: 4rem;
                outline: none;
            }
            
            .navbar_searcher {
                align-items: center;
                display: flex;
            }

            .navbar_searcher_icon {
                width: 3rem;
                padding-left: 1rem;
                position: absolute;
                fill: var(--white);
            }

            .navbar_action,
            .navbar_user_options_avatar,
            .navbar_logo img {
                fill: var(--primary_color);
                cursor: pointer;
            }

            .navbar_action{
                background-color: var(--secondary_color);
                border: var(--white) 3px solid;
                border-radius: 50%;
                cursor: pointer;
                padding: 0.5rem;
                height: 3rem;
            }

            .navbar_action:hover,
            .navbar_user_options_avatar:hover {
                background-color: var(--primary_color);
                fill: var(--secondary_color);
            }

            .tooltip .navbar_action {
                background-color: var(--secondary_color);
            }

            .cart.active{
                background-color: green;
                fill:var(--white);
            }

            .cart.active:hover{
                fill: var(--secondary_color);
            }

            .tooltip .navbar_action:hover {
                background-color: var(--primary_color);
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

            .navbar a {
                text-decoration: none;
                color: var(--white);
                margin: 0 10px;
            }

            .navbar_user_options_avatar {
                border: 3px solid var(--white);
                border-radius: 50%;
                cursor: pointer;
            }

            .navbar_user_options_avatar:hover {
                background-color: var(--white);
                border: 3px solid var(--white);
                fill: var(--secondary_color);
            }

            .navbar_user_options svg {
                width: 5rem;
            }

            .navbar_logo img {
                padding: 0.2rem;
                height: 7rem;
            }

            .navbar_user_options {
                justify-content: space-around;
                align-items: center;
                display: flex;
                width: 40rem;
            }

            .navbar_user_options_acount {
                justify-content: space-between;
                flex-direction: row;
                display: flex;
                margin: 1rem;
                gap: 5rem;
            }

            .navbar_user_options_acount h2 {
                font-size: var(--subtitle);
                cursor: pointer;
            }

            .navbar_user_options_acount h2:hover {
                color: var(--primary_color);
            }
        </style>

        <nav class="navbar">
            <a href="inicio.html">
                <div class="navbar_logo"><img src="icons/logo.svg" alt="logo"></div>
            </a>
            <div class="navbar_searcher">
                <input type="text" placeholder="Buscar">
                <svg class="navbar_searcher_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
            </div>

            <div class="tooltip">
                <a href="carrito.html">
                    <svg class="navbar_action cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                    </svg>
                </a>
                <span class="tooltiptext">Cart</span>
            </div>
            <div class="tooltip">
                <a href="https://i.pinimg.com/originals/22/30/e9/2230e960b76375b0224494ffe27e1d44.gif">
                    <svg class="navbar_action wishlist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                    <span class="tooltiptext">Wishlist</span>
                </a>
            </div>
            <div class="tooltip">
                <a href="faqs.html">
                    <svg class="navbar_action faqs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,15H6L2,19V3A1,1 0 0,1 3,2H18A1,1 0 0,1 19,3V14A1,1 0 0,1 18,15M23,9V23L19,19H8A1,1 0 0,1 7,18V17H21V8H22A1,1 0 0,1 23,9M8.19,4C7.32,4 6.62,4.2 6.08,4.59C5.56,5 5.3,5.57 5.31,6.36L5.32,6.39H7.25C7.26,6.09 7.35,5.86 7.53,5.7C7.71,5.55 7.93,5.47 8.19,5.47C8.5,5.47 8.76,5.57 8.94,5.75C9.12,5.94 9.2,6.2 9.2,6.5C9.2,6.82 9.13,7.09 8.97,7.32C8.83,7.55 8.62,7.75 8.36,7.91C7.85,8.25 7.5,8.55 7.31,8.82C7.11,9.08 7,9.5 7,10H9C9,9.69 9.04,9.44 9.13,9.26C9.22,9.08 9.39,8.9 9.64,8.74C10.09,8.5 10.46,8.21 10.75,7.81C11.04,7.41 11.19,7 11.19,6.5C11.19,5.74 10.92,5.13 10.38,4.68C9.85,4.23 9.12,4 8.19,4M7,11V13H9V11H7M13,13H15V11H13V13M13,4V10H15V4H13Z" /></svg>                <span class="tooltiptext">FAQS</span>
                </a>
            </div>

            <div class="navbar_user_options">
                <div class="navbar_user_options_acount">
                    <h2>Iniciar Sesión</h2>
                    <h2>Registrarse</h2>
                </div>
                <svg class="navbar_user_options_avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                </svg>
            </div>
        </nav>
      `;
    }
}

customElements.define('navbar-component', Navbar);
