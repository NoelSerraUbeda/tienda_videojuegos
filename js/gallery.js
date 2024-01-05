class Gallery extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.images = [];
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadow.innerHTML = /*html*/`
            
            <div class="gallery">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcCnOcMgWnBpaY_X6X0mVsiXsI-_AmDvo_NPQUnbOHQSxtLT0jlEoY7uYTxSjU_QWw1E&usqp=CAU"
                    alt="Imagen 1">
                <img
                    src="https://i.pinimg.com/1200x/8f/93/90/8f9390a7aa046235616345488ff0b718.jpg"
                    alt="Imagen 2">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Yoshi%27s_Island_-_Gameplay.png/220px-Yoshi%27s_Island_-_Gameplay.png"
                    alt="Imagen 3">
                <img
                    src="https://www.interactive.org/images/games/2003_yoshis_island_sma_3_sm.jpg"
                    alt="Imagen 4">
            </div>

            <div id="modal" class="modal">
                <div class="modal-content">
                    <div class="arrow" id="prevArrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-box</title><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M18,11H9.5L13,7.5L11.58,6.08L5.66,12L11.58,17.92L13,16.5L9.5,13H18V11Z" /></svg></div>
                    <img id="modalImg" src="" alt="Imagen Ampliada">
                    <div class="arrow" id="nextArrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-box</title><path d="M5,21A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5M6,13H14.5L11,16.5L12.42,17.92L18.34,12L12.42,6.08L11,7.5L14.5,11H6V13Z" /></svg></div>
                </div>
            </div>
            
            <style>
                .gallery {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap:2rem;
                }

                .gallery img {
                    width: auto; 
                    height: 150px;
                    cursor: pointer;
                    transition: transform 0.2s ease-in-out;
                    border: var(--secondary_color) 3px solid;
                    border-radius:1rem;
                }

                .modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    justify-content: center;
                    align-items: center;
                    z-index:999;
                }

                .modal-content {
                    max-width: 100%;
                    max-height: 100%;
                }

                .modal img {
                    width: 60rem;
                    height: 100%;
                    border: 2px solid #fff;
                    cursor: pointer;
                }

                .modal-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }

                .modal img {
                    max-width: 100%;
                    max-height: 100%;
                    border: 2px solid #fff;
                    cursor: pointer;
                    border-radius:1rem;
                }

                .arrow svg{
                    width:10rem;
                    fill:var(--white);
                    cursor: pointer;
                    user-select: none;
                    margin:0 10rem;
                }

                .arrow svg:hover {
                    animation: shake 0.5s;
                }

                .gallery img:hover {
                    transform: scale(1.1);
                }

                @keyframes shake {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    20% {
                        transform: rotate(5deg);
                    }
                    40% {
                        transform: rotate(-5deg);
                    }
                    60% {
                        transform: rotate(3deg);
                    }
                    80% {
                        transform: rotate(-3deg);
                    }
                }
            </style>
        `;
        this.images = Array.from(this.shadow.querySelectorAll('.gallery img'));
    }

    addEventListeners() {
        const modal = this.shadow.getElementById("modal");
        const modalImg = this.shadow.getElementById("modalImg");
        const prevArrow = this.shadow.getElementById("prevArrow");
        const nextArrow = this.shadow.getElementById("nextArrow");

        const openModal = (index) => {
            const imageSrc = this.images[index].src;
            modalImg.src = imageSrc;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        };

        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };

        const showPrevImage = () => {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            openModal(this.currentIndex);
        };

        const showNextImage = () => {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            openModal(this.currentIndex);
        };

        this.images.forEach((img, index) => {
            img.addEventListener("click", () => {
                this.currentIndex = index;
                openModal(index);
            });
        });

        modal.addEventListener("click", () => {
            closeModal();
        });

        prevArrow.addEventListener("click", (event) => {
            event.stopPropagation();
            showPrevImage();
        });

        nextArrow.addEventListener("click", (event) => {
            event.stopPropagation();
            showNextImage();
        });
    }
}

customElements.define('gallery-component', Gallery);
