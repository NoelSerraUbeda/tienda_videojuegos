class Arrow extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadow.innerHTML = /*html*/`
    
            <div class="up-arrow"></div>
            
            <style>
                .up-arrow {
                    background-image: url("./images/the_knight.png");
                    background-color: var(--white);
                    background-size: 10rem;
                    padding: 4rem;
                    border: var(--secondary_color) solid 3px;
                    color: #fff;
                    border-radius: 20%;
                    justify-content: center;
                    font-size: 20px;
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    cursor: pointer;
                    display: none;
                    z-index: 999;
                }

                .up-arrow:hover::after {
                    content: "Yo te subo";
                    position: absolute;
                    top: -40%;
                    left: -10%; 
                    padding: 5px;
                    background-color: rgba(0, 0, 0, 0.8);
                    color: #fff;
                    border-radius: 5px;
                    white-space: nowrap;
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

    setupEventListeners() {
        const arrowButton = this.shadow.querySelector('.up-arrow');

        arrowButton.addEventListener('click', () => {
            this.scrollToTop();
        });

        window.addEventListener('scroll', () => {
            this.toggleVisibility();
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    toggleVisibility() {
        const arrowButton = this.shadow.querySelector('.up-arrow');
        if (window.scrollY > 200) {
            arrowButton.style.display = 'block';
        } else {
            arrowButton.style.display = 'none';
        }
    }
}

customElements.define('arrow-component', Arrow);
