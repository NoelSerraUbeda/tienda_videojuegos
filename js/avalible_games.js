class Avalible extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title');
    }

    connectedCallback() {
        this.render();
        this.addCardClickListener();
        this.addHeartClickListener();
    }

    addCardClickListener() {
        const gameCards = this.shadow.querySelectorAll('.game_card img');
        gameCards.forEach(card => {
            card.addEventListener('click', () => {
                window.location.href = 'ficha.html';
            });
        });
    }
    
    addHeartClickListener() {
        const hearts = this.shadow.querySelectorAll('.game_card .heart-svg');
        hearts.forEach(heart => {
            heart.addEventListener('click', event => {
                event.stopPropagation();
                alert("Agregado a Favoritos")
            });
        });
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        <div class="head_text">
            <h2>${this.title}</h2>
            <svg viewBox="0 0 443 448" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M151.615 0L147.24 14H282.758L278.383 0H151.615ZM144 32V105.102C190.991 111.431 238.285 111.602 286 105.11V32H144ZM60.223 64L6.508 158H423.492L369.777 64H304V68.615C305.065 68.802 306.134 68.99 307.168 69.184C319.158 71.432 329 74.066 336.588 77.43C340.382 79.111 343.651 80.935 346.48 83.527C349.31 86.12 352 90.101 352 95C352 99.9 349.31 103.88 346.48 106.473C343.651 109.065 340.382 110.888 336.588 112.57C329 115.934 319.158 118.568 307.168 120.816C283.19 125.312 250.802 128 215 128L214.639 127.998C178.981 127.98 146.729 125.298 122.832 120.816C110.842 118.568 101 115.934 93.412 112.57C89.618 110.888 86.349 109.065 83.52 106.473C80.69 103.88 78 99.899 78 95C78 90.1 80.69 86.12 83.52 83.527C86.349 80.935 89.618 79.111 93.412 77.43C101 74.066 110.842 71.432 122.832 69.184C123.866 68.99 124.935 68.802 126 68.615V64H60.223ZM126 86.904C114.897 88.994 106.05 91.519 100.707 93.887C99.681 94.342 99.527 94.582 98.785 95C99.527 95.418 99.681 95.658 100.707 96.113C106.049 98.481 114.897 101.006 126 103.096V86.904ZM304 86.904V103.096C315.103 101.006 323.95 98.481 329.293 96.113C330.319 95.658 330.473 95.418 331.215 95C330.473 94.582 330.319 94.342 329.293 93.887C323.951 91.519 315.103 88.994 304 86.904ZM55 126H119V144H55V126ZM311 126H375V144H311V126ZM0 176V270H67.885C75.935 283.442 85.859 296.493 98.975 303.05C151.187 329.157 234.068 322.094 304.565 317.152C339.813 314.682 371.962 312.535 394.248 314.293C405.391 315.172 414.01 317.173 418.738 319.633C423.466 322.093 424.281 323.323 424.322 327.098C424.42 336.105 422.356 340.451 419.184 343.443C416.011 346.436 410.486 348.602 402.012 349.391C385.063 350.968 358.335 346.548 327.879 341.844C270.742 333.018 198.681 323.463 140.803 360H184.119C228.973 346.304 280.165 352.687 325.131 359.633C355.371 364.304 382.279 369.304 403.68 367.313C414.38 366.317 424.208 363.452 431.537 356.537C438.867 349.622 442.453 339.184 442.32 326.902C442.211 316.794 435.59 308.112 427.047 303.666C418.503 299.221 408.015 297.324 395.662 296.35C370.957 294.401 338.564 296.726 303.307 299.197C232.792 304.14 150.813 308.843 107.025 286.949C101.995 284.434 95.842 277.98 89.912 270H430V176H0ZM14 190H96V256H80.646C79.4811 254.032 78.3565 252.041 77.273 250.027C75.1519 246.069 73.1306 242.059 71.211 238H78V208H32V238H51.418C54.1123 244.093 57.0052 250.096 60.092 256H14V199V190ZM121.168 190H203.168V256H121.168V199V190ZM227.76 190H309.76V256H227.76V199V190ZM334 190H416V256H334V199V190ZM139.168 208V238H185.168V208H139.168ZM245.76 208V238H291.76V208H245.76ZM352 208V238H398V208H352ZM69 378C65.125 378 62.241 380.192 59.098 386.676C55.954 393.16 54 403.09 54 413C54 422.91 55.954 432.84 59.098 439.324C62.24 445.808 65.125 448 69 448H213C216.875 448 219.759 445.808 222.902 439.324C226.046 432.84 228 422.91 228 413C228 403.09 226.046 393.16 222.902 386.676C219.76 380.192 216.875 378 213 378H69ZM187.104 388C189.491 388 191.78 388.948 193.468 390.636C195.156 392.324 196.104 394.613 196.104 397C196.104 399.387 195.156 401.676 193.468 403.364C191.78 405.052 189.491 406 187.104 406C184.717 406 182.428 405.052 180.74 403.364C179.052 401.676 178.104 399.387 178.104 397C178.104 394.613 179.052 392.324 180.74 390.636C182.428 388.948 184.717 388 187.104 388ZM84 391H102V404H115V422H102V435H84V422H71V404H84V391ZM171.104 404C173.491 404 175.78 404.948 177.468 406.636C179.156 408.324 180.104 410.613 180.104 413C180.104 415.387 179.156 417.676 177.468 419.364C175.78 421.052 173.491 422 171.104 422C168.717 422 166.428 421.052 164.74 419.364C163.052 417.676 162.104 415.387 162.104 413C162.104 410.613 163.052 408.324 164.74 406.636C166.428 404.948 168.717 404 171.104 404ZM203.104 404C205.491 404 207.78 404.948 209.468 406.636C211.156 408.324 212.104 410.613 212.104 413C212.104 415.387 211.156 417.676 209.468 419.364C207.78 421.052 205.491 422 203.104 422C200.717 422 198.428 421.052 196.74 419.364C195.052 417.676 194.104 415.387 194.104 413C194.104 410.613 195.052 408.324 196.74 406.636C198.428 404.948 200.717 404 203.104 404ZM187.104 417.637C189.491 417.637 191.78 418.585 193.468 420.273C195.156 421.961 196.104 424.25 196.104 426.637C196.104 429.024 195.156 431.313 193.468 433.001C191.78 434.689 189.491 435.637 187.104 435.637C184.717 435.637 182.428 434.689 180.74 433.001C179.052 431.313 178.104 429.024 178.104 426.637C178.104 424.25 179.052 421.961 180.74 420.273C182.428 418.585 184.717 417.637 187.104 417.637Z" fill="white"/>
            </svg>
        </div>
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
                <div class="game_card" data-title="Dragon Ball Z Kakarot" data-price="49.99">
                    <img src="https://m.media-amazon.com/images/I/812S8JMyKdL._AC_SX569_.jpg" alt="box-art8">
                </div>
                <div class="game_card" data-title="Monster Hunter World" data-price="39.99">
                    <img src="https://gamefaqs.gamespot.com/a/box/4/1/9/635419_front.jpg" alt="box-art4">
                </div>               
            </div>
        </section>

        <style>
            .head_text {
                background-color: var(--secondary_color);
                color: var(--white);
                padding: 0.7rem 0 0.7rem 3rem;
                margin: 0;
                display:flex;
                flex-direction:row-reverse;
                justify-content:start;
                align-items:center;
                gap:3rem;
            }

            h2 {
                font-size: var(--title);
                margin: 0            
            }

            .head_text svg{
                width:4rem;
            }
            
            .section_avalibles_games {
                align-items: center;
                display: flex;
            }

            .section_avalibles {
                overflow-y: hidden;
                overflow-x: auto; 
                align-items: center;
                margin: 0 0 2rem 0; 
                display: flex;
            }

            .section_avalibles::-webkit-scrollbar {
                margin: 0 1rem; 
                width:5px;
            }

            .section_avalibles::-webkit-scrollbar-thumb {
                background-color: var(--secondary_color);
                border-radius: 5rem;
            }

            .section_avalibles::-webkit-scrollbar-track {
                background-color: none;
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
                width: 120%;
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
                content: attr(data-title) "  $" attr(data-price);
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
                font-size:20px;
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
            .heart-svg {
                position: absolute;
                top: 0;
                right: 0;
                margin: 1.5rem;
                fill:none;
                width:3rem;
                z-index:999;
                transition: transform 0.3s;
            }

            .heart-svg:hover{
                transform: scale(1.5);
                fill: hsl(40, 88%, 51%);
            }
        </style>`;

        this.shadow.querySelectorAll('.game_card').forEach((card) => {
            const heartSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            heartSvg.setAttribute("viewBox", "0 0 24 24");
            heartSvg.innerHTML = `
            <path stroke="hsl(40, 88%, 51%)" d="M12 18C12 19 12.25 19.92 12.67 20.74L12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 9.93 21.5 11.26 20.62 12.61C19.83 12.23 18.94 12 18 12C14.69 12 12 14.69 12 18M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z" />
            `;
            heartSvg.classList.add('heart-svg');
            card.appendChild(heartSvg);
        });
    }

}
customElements.define('avalible_games-component', Avalible);

