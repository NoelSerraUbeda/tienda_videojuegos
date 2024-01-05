class Faqs extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        const faqQuestions = this.shadowRoot.querySelectorAll('.faq-question');

        faqQuestions.forEach((question) => {
            question.addEventListener('click', function () {
                const answer = this.nextElementSibling;
                const arrowIcon = this.querySelector('.arrow-icon');

                if (answer.classList.contains('active')) {
                    answer.style.height = '0';
                    answer.classList.remove('active');
                } else {
                    answer.style.height = answer.scrollHeight + 'px';
                    answer.classList.add('active');
                }
                arrowIcon.classList.toggle('active');
            });
        });
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        <div class="faq">
            <div class="faq_section">
                <h2 class="faq-question">¿Cómo puedo comprar un juego?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Para comprar un juego, simplemente navega por nuestra tienda en línea, selecciona el juego que deseas y haz clic en el botón "Comprar".<br> 
                    Luego, sigue las instrucciones para completar el proceso de pago.</p>
                </div>
            </div>

            <div class="faq_section">
                <h2 class="faq-question">¿Qué métodos de pago aceptan?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Aceptamos tarjetas de crédito y débito, así como opciones de pago en línea como PayPal.<br> 
                    Puedes seleccionar tu método de pago preferido durante el proceso de compra.
                    </p>
                </div>
            </div>

            <div class="faq_section">
                <h2 class="faq-question">¿Puedo devolver o reembolsar un juego?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Sí, generalmente ofrecemos reembolsos dentro de un plazo específico después de la compra, siempre y cuando no hayas descargado o jugado el juego.<br> 
                    Consulta nuestra política de devoluciones para obtener más detalles.
                    </p>
                </div>
            </div>

            <div class="faq_section">
                <h2 class="faq-question">¿Cómo descargar un juego digital?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Después de completar la compra, recibirás un correo electrónico con instrucciones y un enlace
                    de descarga.<br>
                    También puedes acceder a tus compras digitales desde tu cuenta en nuestra tienda.
                    </p>
                </div>
            </div>

            <div class="faq_section">
                <h2 class="faq-question">¿Puedo transferir el juego a otro dispositivo?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Sí, puedes transferir tus juegos a otros dispositivos.<br>
                    Recomendamos contactar con nuestro soporte para obtener información específica sobre la transferibilidad de cada juego.
                    </p>
                </div>
            </div>
        </div>

        <style>
            .faq {
                margin: 4rem 10rem 4rem 10rem;
            }

            h1 {
                background-color: var(--secondary_color);
                font-size: var(--title);
                color: var(--white);
                padding: 0.5rem 0 0.5rem 3rem;
                margin: 0;
            }

            h2 {
                background-color: var(--primary_color);
                cursor: pointer;
                margin-bottom: 0;
                height: 3.85rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
            }

            .faq_section {
                background-color: var(--secondary_color);
                color: var(--white);
                transition: transform 0.2s ease-in-out;
            }

            .faq_section:hover {
                transform: scale(1.01);
            }

            .faq_section .answer {
                height: 0;
                overflow: hidden;
                transition: height 0.5s;
            }

            .faq_section .answer.active {
                height: 5rem;
            }

            .answer p {
                padding: 1rem;
                font-size: 28px;
            }

            .arrow-icon {
                width: 4rem;
                transition: transform 0.3s ease-out;
            }

            .active.arrow-icon {
                transform: rotate(180deg);
            }
        </style>

      `;
    }
    
}
customElements.define('faqs-component', Faqs);