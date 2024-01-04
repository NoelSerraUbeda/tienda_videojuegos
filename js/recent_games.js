class Recent extends HTMLElement {
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

        <h2>Vistos Recientes</h2>
        <section class="section_recent">
            <div class="game_card" data-title="Mario is Gaming" data-price="29.99">
                <img src="images/box_art4.jpg" alt="box-art1">
                <p class="sale">20%</p>
            </div>
            <div class="game_card" data-title="Painting Simulator" data-price="19.99">
                <img src="images/box_art3.png" alt="box-art2">
            </div>
            <div class="game_card" data-title="Yoshi Commits Tax Fraud" data-price="39.99">
                <img src="images/box_art1.png" alt="box-art3">
            </div>
            <div class="game_card" data-title="Monster Hunter World" data-price="39.99">
                <img src="https://gamefaqs.gamespot.com/a/box/4/1/9/635419_front.jpg" alt="box-art4">
            </div>
        </section>

        <style>
            h2 {
                background-color: var(--secondary_color);
                font-size: var(--title);
                color: var(--white);
                padding: 0.5rem 0 0.5rem 3rem;
                margin: 0;
            }

            .section_recent {
                align-items: center;
                display: flex;
                margin: 0 3rem 2rem 3rem;
            }

            .game_card {
                justify-content: space-evenly;
                align-items: center;
                color: var(--white);
                text-align: center;
                padding: 0.5rem 4rem;
                height: 33rem;
                display: flex;
                width: 14rem;
                background-color: var(--secondary_color);
                margin: 3rem 0 2rem 0;
                position: relative;
                cursor: pointer;
                transition: box-shadow 0.3s ease;
                overflow: hidden;
            }

            .game_card img {
                width: 100%;
                height: auto;
                transition: transform 0.3s;
            }

            .game_card:hover {
                background-color: var(--hovered_secondary);
            }

            .game_card::after {
                background: var(--hovered_primary);
                color: var(--hovered_secondary);
                transform: translateY(100%);
                transition: transform 0.3s;
                content: attr(data-title) " - $" attr(data-price);
                justify-content: center;
                align-items: center;
                text-align: center;
                display: flex;
                flex-direction: column;
                position: absolute;
                font-weight: bolder;
                padding: 0;
                height: 25%;
                width: 100%;
                bottom: 0;
                left: 0;
            }

            .game_card:hover img {
                transform: scale(1.1);
            }

            .game_card[data-title] {
                font-size: 16px;
            }

            .game_card:hover::after {
                transform: translateY(0);
            }

            .game_card .sale {
                position: absolute;
                background-color: var(--sale);
                color: var(--white);
                bottom: 1rem;
                right: 1rem;
                padding: 1rem;
                font-size: 40px;
                border-radius: 1rem;
            }
        </style>

      `;
    }
    
}
customElements.define('recent_games-component', Recent);
