class Check extends HTMLElement {
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

        <form class="checkout_details" method="post">
            <h1>Checkout</h1>
            
            <h2>Detalles de Envío</h2>
            <label for="nombre">Nombre completo:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="telefono">Número de teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required>
            
            <label for="nombre_usuario">Nombre de usuario:</label>
            <input type="text" id="nombre_usuario" name="nombre_usuario" required>

            <label for="correo">Correo electrónico del comprador:</label>
            <input type="email" id="correo" name="correo" required>

            <h2>Información del Pago</h2>

            <label for="numero_tarjeta">Número de tarjeta de crédito:</label>
            <input type="text" id="numero_tarjeta" name="numero_tarjeta" required>

            <label for="fecha_vencimiento">Fecha de vencimiento:</label>
            <input type="text"  name="fecha_vencimiento" placeholder="MM/AA" required>

            <label for="cvv">Código de seguridad de la tarjeta (CVV/CVC):</label>
            <input type="text" id="cvv" name="cvv" required>
        </form>
        
        <style>

            h1 {
                margin: -1.5rem 0 0 0;
            }

            .checkout_details {
                background-color: var(--secondary_color);
                width: 60rem;
                padding: 3rem;
            }

            .checkout_details label {
                font-size: 20px;
            }

            .checkout_details h2 {
                font-size: 22px;
                text-decoration: underline;
                color: var(--primary_color);
            }

            .checkout_details input,
            textarea,
            select {
                outline: none;
                resize: none;
                width: 100%;
                height: 2rem;
                margin: 0.5rem 0 0.5rem 0;
                background-color: var(--hovered_secondary);
                font-size: var(--game_data);
                border: none;
                height: 2.8rem;
                text-indent:1rem;
                color: var(--white);
                margin-bottom: 1rem;
            }
            input:disabled,
            select:disabled,
            textarea:disabled {
                background-color: hsl(259, 76%, 48%);
            }
        </style>

      `;
    }
    
}
customElements.define('check-component', Check);


