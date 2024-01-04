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
            <div class="footer-section">
                <h4>Elementos Principales</h4>
                <ul class="footer-section_elements">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>

            </div>

            <div class="footer-section">
                <h4>Carrito</h4>
                <a href="#" class="footer-link">Ver Carrito</a>
            </div>

            <div class="footer-section">
                <h4>Mapa del Sitio</h4>
                <a href="#" class="footer-link">Ver Mapa del Sitio</a>
            </div>
        </div>

        <style>

        .footer {
            background-color: var(--secondary_color);
            color: var(--primary_color);
            text-align: center;         
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

        .footer-section ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 3px;
            width: 30rem;
        }

        .footer-section h4 {
            background-color: var(--secondary_color);
            margin: 0;
            color: var(--white);
            font-size: 30px;
            margin-bottom: 0.5rem;
        }
        </style>

      `;
    }
    
}
customElements.define('footer-component', Footer);


