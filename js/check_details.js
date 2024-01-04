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

            <label for="direccion">Dirección de envío:</label>
            <textarea id="direccion" name="direccion" required></textarea>

            <label for="telefono">Número de teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required>

            <h2>Información de Facturación</h2>
            <label for="direccion_facturacion">Dirección de facturación:</label>
            <textarea id="direccion_facturacion" name="direccion_facturacion" required></textarea>

            <h2>Método de Envío</h2>
            <label for="metodo_envio">Selecciona un método de envío:</label>
            <select id="metodo_envio" name="metodo_envio" required>
                <option value="envio_estandar">Envío Estándar</option>
                <option value="envio_rapido">Envío Rápido</option>
                <option value="envio_express">Envío Express</option>
            </select>


            <h2>Método de Pago</h2>
            <label for="tarjeta">Número de tarjeta de crédito:</label>
            <input type="text" id="tarjeta" name="tarjeta" required>

            <label for="fecha_vencimiento">Fecha de vencimiento:</label>
            <input type="text"  name="fecha_vencimiento" placeholder="MM/AA" required>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required>
        </form>
        
        <style>
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
        </style>

      `;
    }
    
}
customElements.define('check-component', Check);


