class Footer extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addCardClickListener();
    }
    
    addCardClickListener() {
        var gameCards = this.shadow.querySelectorAll('.game_card');

        gameCards.forEach(function (card) {
            card.addEventListener('click', function () {
                window.location.href = 'ficha.html';
            });
        });
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        <div class="footer">
            <div class="footer_bar">
                <div class="footer_section">
                    <h4>Elementos Principales</h4>
                    <ul class="footer_section_elements">
                        <li><a href="./inicio.html">Inicio</a></li>
                        <li><a href="https://i.pinimg.com/originals/22/30/e9/2230e960b76375b0224494ffe27e1d44.gif">Productos</a></li>
                        <li><a href="https://i.pinimg.com/originals/22/30/e9/2230e960b76375b0224494ffe27e1d44.gif">Ofertas</a></li>
                        <li><a href="./faqs.html">Faqs</a></li>
                    </ul>

                </div>

                <div class="footer_section">
                    <h4>Carrito</h4>
                    <a href="./carrito.html" class="footer-link">Ver Carrito</a>
                </div>

                <div class="footer_section">
                    <h4>Mapa del Sitio</h4>
                    <a href="https://i.pinimg.com/originals/22/30/e9/2230e960b76375b0224494ffe27e1d44.gif" class="footer-link">Ver Mapa del Sitio</a>
                </div>
            </div>
                <div class="feed_section">
                <!-- Icono de YouTube -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
            
                <!-- Icono de Instagram -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
            
                <!-- Icono de Twitter -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                
                <!-- Icono de Twitch -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitch</title><path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" /></svg>            
            </div>
        </div>
        <style>

        .footer {
            background-color: var(--secondary_color);
            color: var(--primary_color);
            text-align: center;         
            display: flex;
            flex-direction:column;
            justify-content: space-around;
            align-items: start;
        }

        .footer_bar{
            width:100%; 
            display: flex;
            justify-content: space-around;
            align-items: start;
        }

        .footer a {
            color: var(--primary_color);
            font-size: var(--subtitle);
            text-decoration: none;
        }

        .footer a:hover {
            color: var(--white);
        }

        .footer {
            padding: 20px;   
        }

        .footer_section ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 3px;
            width: 30rem;
        }

        .footer_section h4 {
            background-color: var(--secondary_color);
            margin: 0;
            color: var(--white);
            font-size: 30px;
            margin-bottom: 0.5rem;
        }

        .feed_section {
            display:flex;
            width:10rem;
            margin-top:2rem;
            position:absolute;
        }

        .feed_section svg{
            fill:var(--white);
            cursor:pointer;
        }

        .feed_section svg:hover{
            fill:var(--primary_color);
            animation: shake 0.5s;
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
        </style>

      `;
    }
    
}
customElements.define('footer-component', Footer);


