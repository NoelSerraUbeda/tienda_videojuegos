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
                <h2 class="faq-question">¿Cómo puedo realizar un seguimiento de mi pedido?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un enlace de
                    seguimiento.<br> 
                    Puedes hacer clic en ese enlace para verificar el estado y la ubicación actual de
                    tu pedido.</p>
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
                <h2 class="faq-question">¿Puedo devolver un juego si no estoy satisfecho?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra.<br>
                    El juego debe estar en su empaque original. Consulta nuestra sección de Política de Devoluciones para obtener más detalles.
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
                <h2 class="faq-question">¿Ofrecen garantía en los productos?<svg class="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></h2>
                <div class="answer">
                    <p>Sí, garantizamos la calidad de nuestros productos.<br>
                    Si encuentras algún defecto en el juego físico, contáctanos y te proporcionaremos una solución, ya sea un reemplazo o un reembolso.
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
                font-size: 30px;
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


