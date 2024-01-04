class Avalible extends HTMLElement {
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

        <h2>Juegos Disponibles</h2>
        <section class="section_avalibles">
            <div class="section_avalibles_games">
                <div class="game_card" data-title="Kingdom Hearts 2.5 Remix" data-price="29.99">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2395164-1b0c-43f2-b791-eed469f64075/d7r4cap-3e96e574-27d1-41e2-873e-98e565a75521.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyMzk1MTY0LTFiMGMtNDNmMi1iNzkxLWVlZDQ2OWY2NDA3NVwvZDdyNGNhcC0zZTk2ZTU3NC0yN2QxLTQxZTItODczZS05OGU1NjVhNzU1MjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yIyz-FdOK7YiaKZn_5LaiZPwbGP5_8i1sxneoam9YLA"
                        alt="box-art2">
                    <p class="sale">40%</p>
                </div>
                <div class="game_card" data-title="Mario is Gaming" data-price="49.99">
                    <img src="images/box_art4.jpg" alt="box-art3">
                    <p class="sale">20%</p>
                </div>
                <div class="game_card" data-title="Donkey Kong Coconut Crackers" data-price="29.99">
                    <img src="images/box_art5.jpg" alt="box-art4">
                </div>
                    <div class="game_card" data-title="Painting Simulator" data-price="19.99">
                    <img src="images/box_art3.png" alt="box-art2">
                </div>
                <div class="game_card" data-title="Yoshi Commits Tax Fraud" data-price="29.99">
                    <img src="images/box_art1.png" alt="box-art5">
                </div>
                <div class="game_card" data-title="Sekiro Shadows Die Twice" data-price="59.99">
                    <img src="https://m.media-amazon.com/images/I/817N6tIFQ9L._AC_UF1000,1000_QL80_.jpg" alt="box-art7">
                </div>
                <div class="game_card" data-title="Super Smash Bros Ultimate" data-price="59.99">
                    <img src="images/box-art2.jpeg" alt="box-art2">
                    <p class="sale">20%</p>
                </div>
                <div class="game_card" data-title="Dragon Ball Kakarot" data-price="49.99">
                    <img src="https://m.media-amazon.com/images/I/812S8JMyKdL._AC_SX569_.jpg" alt="box-art8">
                </div>
                <div class="game_card" data-title="Monster Hunter World" data-price="39.99">
                    <img src="https://gamefaqs.gamespot.com/a/box/4/1/9/635419_front.jpg" alt="box-art4">
                </div>               
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
            
            .section_avalibles_games {
                align-items: center;
                display: flex;
            }

            .section_avalibles {
                overflow-y: hidden;
                overflow-x: scroll;
                align-items: center;
                margin: 0 3rem 2rem 3rem;
                display: flex;
                &::-webkit-scrollbar {
                    width:0;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: var(--secondary_color);
                    border-radius: 1rem;
                }
                &::-webkit-scrollbar-track {
                    background-color: none;
                }
            }

            .game_card {
                justify-content: space-around;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                color: var(--white);
                text-align: center;
                padding: 0.5rem 4rem 0.5rem 4rem;
                height: 33rem;
                display: flex;
                width: 14rem;
                background-color: var(--secondary_color);
                margin: 3rem 0 2rem 0;
                position: relative;
                cursor: pointer;
                transition: box-shadow 0.3s ease;
                overflow-y: hidden; 
                overflow-x: hidden;
            }

            .game_card img {
                width: 100%;
                height: auto;
                transition: transform 0.3s;
            }

            .game_card:hover {
                background-color: var(--hovered_secondary);
            }


            .game_card:hover img {
                transform: scale(1.1);
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
                padding:1rem 0 1rem 0;
            }

            .game_card[data-title] {
                font-size:16px;
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

            .price {
                color: var(--price);
                font-size: var(--subtitle);
                font-style: italic;
                margin-top: 0.5rem;
            }


        </style>

      `;
    }

}
customElements.define('avalible_games-component', Avalible);


