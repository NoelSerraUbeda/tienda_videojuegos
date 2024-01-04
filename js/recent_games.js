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

        <div class="head_text">
            <h2>Vistos Recientes</h2>
            <svg viewBox="0 0 460 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M354.95 2.45997C292.004 -10.687 291.63 34.5 230.082 34.5C176.832 34.5 174.835 -10.175 105.212 2.45997C-8.79283 23.072 -26.3198 273.9 34.1602 287.045C67.7382 294.34 84.6552 255.401 129.05 227.452C135.64 232.324 143.297 235.554 151.385 236.876C159.473 238.198 167.759 237.573 175.557 235.053C183.355 232.532 190.441 228.19 196.225 222.385C202.01 216.579 206.328 209.479 208.82 201.672C215.884 201.06 222.97 200.756 230.06 200.762C237.526 200.762 244.5 201.082 251.186 201.66C253.685 209.468 258.01 216.568 263.802 222.371C269.594 228.174 276.685 232.512 284.489 235.026C292.292 237.54 300.583 238.158 308.673 236.828C316.763 235.497 324.419 232.258 331.006 227.377C375.456 255.327 392.373 294.307 425.961 287.003C486.431 273.899 468.456 26.158 354.95 2.45997ZM121.47 130.703H95.3262V104.12H68.7302V77.977H95.3242V51.384H121.468V77.966H148.05V104.11H121.468V130.692L121.47 130.703ZM159.693 220.318C152.902 220.318 146.264 218.304 140.617 214.531C134.971 210.758 130.57 205.395 127.972 199.121C125.373 192.847 124.693 185.943 126.018 179.283C127.343 172.622 130.613 166.504 135.415 161.702C140.217 156.901 146.335 153.63 152.996 152.306C159.656 150.981 166.56 151.661 172.834 154.26C179.108 156.859 184.471 161.26 188.244 166.906C192.016 172.553 194.03 179.191 194.03 185.982C194.033 195.088 190.418 203.823 183.981 210.264C177.544 216.705 168.811 220.325 159.705 220.328L159.693 220.318ZM300.295 220.318C293.505 220.312 286.869 218.293 281.226 214.515C275.584 210.738 271.188 205.373 268.594 199.098C266 192.823 265.325 185.919 266.655 179.26C267.984 172.602 271.257 166.486 276.062 161.688C280.866 156.889 286.985 153.623 293.646 152.302C300.306 150.981 307.209 151.664 313.481 154.266C319.753 156.867 325.113 161.27 328.883 166.917C332.653 172.564 334.664 179.203 334.662 185.993C334.662 190.505 333.773 194.972 332.045 199.14C330.318 203.308 327.785 207.094 324.594 210.283C321.402 213.472 317.613 216 313.444 217.724C309.274 219.447 304.806 220.332 300.294 220.328L300.295 220.318ZM323.98 108.36C320.554 108.361 317.204 107.345 314.355 105.442C311.506 103.539 309.285 100.833 307.973 97.6676C306.662 94.5021 306.319 91.0188 306.987 87.6582C307.655 84.2976 309.305 81.2106 311.728 78.7878C314.151 76.3649 317.238 74.715 320.598 74.0467C323.959 73.3784 327.442 73.7217 330.608 75.0332C333.773 76.3447 336.479 78.5655 338.382 81.4147C340.285 84.2639 341.301 87.6135 341.3 91.04C341.3 93.3149 340.852 95.5675 339.982 97.6692C339.111 99.7709 337.835 101.681 336.226 103.289C334.618 104.898 332.708 106.174 330.606 107.044C328.505 107.915 326.252 108.363 323.977 108.363L323.98 108.36ZM361.498 145.88C358.072 145.88 354.723 144.864 351.874 142.961C349.025 141.058 346.804 138.352 345.493 135.187C344.182 132.022 343.839 128.539 344.507 125.178C345.175 121.818 346.825 118.731 349.247 116.308C351.67 113.886 354.756 112.236 358.117 111.567C361.477 110.898 364.96 111.241 368.125 112.552C371.291 113.863 373.997 116.083 375.9 118.932C377.804 121.781 378.82 125.13 378.82 128.556C378.822 130.835 378.373 133.093 377.501 135.198C376.628 137.304 375.349 139.217 373.735 140.827C372.122 142.437 370.207 143.714 368.1 144.582C365.993 145.451 363.734 145.896 361.455 145.89L361.498 145.88ZM361.498 70.832C358.072 70.8322 354.723 69.8164 351.874 67.913C349.025 66.0097 346.804 63.3042 345.493 60.1389C344.182 56.9735 343.839 53.4904 344.507 50.13C345.175 46.7696 346.825 43.6829 349.248 41.2601C351.67 38.8374 354.757 37.1874 358.117 36.5189C361.478 35.8504 364.961 36.1934 368.126 37.5045C371.292 38.8156 373.997 41.0359 375.901 43.8847C377.804 46.7335 378.82 50.0828 378.82 53.509C378.821 55.7882 378.373 58.0454 377.5 60.151C376.628 62.2566 375.348 64.1693 373.735 65.7795C372.122 67.3897 370.207 68.6657 368.1 69.5345C365.992 70.4032 363.734 70.8475 361.455 70.842L361.498 70.832ZM399.016 108.35C395.59 108.35 392.241 107.334 389.392 105.431C386.543 103.527 384.323 100.822 383.012 97.6562C381.701 94.4908 381.358 91.0078 382.026 87.6474C382.694 84.2871 384.344 81.2004 386.767 78.7778C389.19 76.3551 392.276 74.7052 395.637 74.0368C398.997 73.3684 402.48 73.7115 405.645 75.0226C408.811 76.3337 411.516 78.5541 413.42 81.4028C415.323 84.2516 416.339 87.6008 416.339 91.027C416.341 93.3065 415.892 95.5639 415.019 97.6698C414.147 99.7756 412.867 101.689 411.254 103.299C409.64 104.909 407.725 106.185 405.617 107.054C403.51 107.923 401.252 108.367 398.972 108.361L399.016 108.35Z" fill="white"/>
            </svg>
        </div>
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
                width: 120%;
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
            }

            .game_card:hover img {
                transform: scale(1.1);
            }

            .game_card[data-title] {
                font-size: 20px;
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
