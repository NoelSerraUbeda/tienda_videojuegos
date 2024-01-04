class Breadcrumbs extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title')
    }

    connectedCallback() {
        this.render();
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`

        <div class="breadcrumbs">
            <svg class="breadcrumbs_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>nintendo-game-boy</title>
                <path
                    d="M7 1C5.9 1 5 1.9 5 3V21C5 22.11 5.9 23 7 23H14C16.76 23 19 20.76 19 18V3C19 1.9 18.11 1 17 1H7M8 4H16V11H8V4M9 14H10V16H12V17H10V19H9V17H7V16H9V14M16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15M14 17C14.55 17 15 17.45 15 18C15 18.55 14.55 19 14 19C13.45 19 13 18.55 13 18C13 17.45 13.45 17 14 17Z" />
            </svg>
            <a href="inicio.html">
            <a href="inicio.html">Inicio</a> / <a class="actual" href="#">${this.title}</a>
        </div>
        
        <style>
            .breadcrumbs {
                background-color: var(--secondary_color);
                padding: 1.5rem;
                font-size: 30px;
                color: var(--white);
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 1rem;
            }

            .breadcrumbs a {
                color: #fff;
                text-decoration: none;
                font-weight: bold;
            }

            .breadcrumbs a:hover {
                text-decoration: underline;
            }

            .breadcrumbs_pointer {
                fill: var(--white);
                width: 3rem;
                transform: rotate(45deg);
            }

            a.actual {
                color: var(--primary_color);
            }

            a.actual:hover{
                text-decoration: none;
                cursor: default;
            }
        </style>

      `;
    }
    
}
customElements.define('breadcrumbs-component', Breadcrumbs);


