class Slider extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.slider();
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        
        <style> 
            .slider {
                position: relative;
                overflow: hidden;
                margin: auto;
                width: 100%;
            }

            .slider img {
                display: none;
                height: auto;
                width: 100%;
            }

            .slider img.active {
                display: block;
            }

            .arrow {
                background-color: var(--background_slider_arrow);
                transition: background-color 0.3s;
                padding: 5px 15px 15px 10px;
                transform: translateY(-50%);
                color: var(--white);
                position: absolute;
                font-size: 64px;
                cursor: pointer;
                outline: none;
                border: none;
                top: 50%;
            }

            .arrow:hover {
                background-color: var(--primary_color);
                color: var(--secondary_color);
            }

            .arrow.left {
                left: 10px;
            }

            .arrow.right {
                right: 10px;
            }

            .dots {
                transform: translateX(-50%);
                position: absolute;
                display: flex;
                bottom: 10px;
                left: 50%;
                gap: 10px;
            }

            .dot {
                transition: background-color 0.3s;
                background-color: var(--white);
                border-radius: 50%;
                height: 30px;
                width: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .dot-inner {
                border: var(--secondary_color) solid 2px;
                border-radius: 50%;
                height: 20px;
                width: 20px; 
            }

            .dot.active {
                background-color: var(--primary_color);
            }
        </style>

        <section class="slider">
            <img src="images/banner.png" alt="Imagen 1" class="active">
            <img src="https://gamehag.com//img/rewards/background/the-witcher-adventure-game-gog-cd-key_max.jpg"
                alt="Imagen 2">
            <img src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/991bd124-8658-4142-b636-14586fe4aab6._CR0%2C0%2C3000%2C800_SX1500_.png"
                alt="Imagen 3">
            <img src="https://gamehag.com//img/rewards/background/battlefield-v-pc-global_max.jpg"
                alt="Imagen 4">
                <button class="arrow left">&#8249;</button>
                <button class="arrow right">&#8250;</button>
            <div class="dots"></div>
        </section>
      `;
    }
    slider() {
        let currentImage = 0;
        const images = [...this.shadow.querySelectorAll('.slider img')];
        const dotsContainer = this.shadow.querySelector('.dots');
        const arrowLeft = this.shadow.querySelector('.arrow.left');
        const arrowRight = this.shadow.querySelector('.arrow.right');
    
        const showImage = (index) => images.forEach((img, i) => img.classList.toggle('active', i === index));
    
        const createDot = (i) => {
            const dot = document.createElement('div');
            const dotInner = document.createElement('div');
            dot.className = `dot${i === currentImage ? ' active' : ''}`;
            dotInner.className = 'dot-inner';
            dot.appendChild(dotInner);
            dotsContainer.appendChild(dot);
          };
    
        const updateDots = () => {
            dotsContainer.innerHTML = '';
            images.forEach((_, i) => createDot(i));
        };
    
        const changeSlide = (direction) => {
            showImage(currentImage);
            currentImage = (currentImage + direction + images.length) % images.length;
            showImage(currentImage);
            updateDots();
        };
    
        const autoSlide = () => changeSlide(1);
    
        setInterval(autoSlide, 5000);
        updateDots();
    
        arrowLeft.addEventListener('click', () => changeSlide(-1));
        arrowRight.addEventListener('click', () => changeSlide(1));
    }
}
customElements.define('slider-component', Slider)