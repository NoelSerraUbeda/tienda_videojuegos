class PayZone extends HTMLElement {
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
            
            .resume_zone {
                display: flex;
                flex-direction: column;
                font-size: var(--game_data);
                width: 100%;
                display: flex;
                justify-content: start;
                align-items: end;
                gap: 0.2rem;
                font-size: 27px;
            }

            .checkout_button{
                width: 100%;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .checkout_button button{
                width: 60%;
                height: 100%;
                font-size: var(--title);
                background-color: var(--primary_color);
                border: 3px solid var(--white);
                cursor: pointer;
            }

            .checkout_button button:hover{
                background-color: var(--hovered_primary);
            }

            .checkout_button a{
                text-decoration: none;
                color: var(--white);
            }

            .cart_summary {
                padding: 2rem;
                background-color: var(--secondary_color);
                color: var(--white);
                line-height: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;
            }

            .price_summary {
                padding: 2rem;
                color: var(--white);
                background-color: var(--secondary_color);
                width: 100%;
                font-size: var(--title);
            }

            .coupon_area  {
                padding: 2rem;
                color: var(--white);
                background-color: var(--secondary_color);
                width: 100%;
            }

            .coupon_area  a{
                color: var(--primary_color);
            }

            .coupon_area input{
                width: 70%;
                height:4rem;
                margin: 0.5rem 2rem 2rem 2rem;
                background-color: var(--hovered_secondary);
                border: none;
                color: var(--white);
                text-indent: 1rem;
                outline: none;
                font-size: var(--game_data);
            }

            .coupon_area button {
                width: 15%;
                height: 4rem;
                margin: 0 2rem 0 0;
                cursor: pointer;
                border: 2px solid var(--white);
                background-color: var(--secondary_color);
                color: var(--white);
                font-size: var(--subtitle);
                font-weight: 900;
                transition: color 0.3s, border-color 0.3s;
            }

            .coupon_area button:hover {
                border: 2px solid var(--primary_color);
                color: var(--primary_color);
            }    

            h5 {
                margin: 0;
            }
        </style>

        <div class="resume_zone">
            <div class="cart_summary">
                <h4>Resumen</h4>
                <div class="checkout_button">
                    <button><a href="checkout.html">Continuar con el Pago</a></button>
                </div>
                <p>2 Articulos</p>
                <p>Tarifa de servicios:--</p>
            </div>
            <div class="price_summary">
                <p>Total a Pagar: $59,98</p>
            </div>
            <div class="coupon_area ">
            <form>
                <label for="codigoDescuento">¿Tienes un código de descuento?</label><br>
                <input maxlength="23" type="text" id="codigoDescuento" name="codigoDescuento"
                    placeholder="Ingrese el código">
                <button type="button">Aplicar</button>
                <h5>Al hacer clic en "Aplicar", aceptas los <a href="#">términos y condiciones</a>.</h5>
            </form>
            </div>
        </div>`;

        let input = this.shadow.querySelector('#codigoDescuento');
        input.addEventListener('input', this.formatCode.bind(this));
    }

    formatCode() {
        let input = this.shadow.querySelector('#codigoDescuento');
        let value = input.value.replace(/[^a-zA-Z0-9]/g, '');
        let formattedValue = '';

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 5 === 0) {
                formattedValue += '-';
            }
            formattedValue += value[i];
        }

        input.value = formattedValue.toUpperCase();
    }  
}
customElements.define('pay-component', PayZone);


