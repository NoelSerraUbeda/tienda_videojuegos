class Platforms extends HTMLElement {
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
    <nav class="secondary_navbar">
        <a href="https://media.tenor.com/lvahNLaqcQYAAAAC/cat-breakdance-fast-fast-cat-dance.gif">
            <div class="secondary_navbar_platform">
                <h3>Marketplace</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>MARKETPLACE</title><path d="M12,13A5,5 0 0,1 7,8H9A3,3 0 0,0 12,11A3,3 0 0,0 15,8H17A5,5 0 0,1 12,13M12,3A3,3 0 0,1 15,6H9A3,3 0 0,1 12,3M19,6H17A5,5 0 0,0 12,1A5,5 0 0,0 7,6H5C3.89,6 3,6.89 3,8V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V8C21,6.89 20.1,6 19,6Z" /></svg>                
            </div>
        </a>
        <a href="https://media.tenor.com/lvahNLaqcQYAAAAC/cat-breakdance-fast-fast-cat-dance.gif">
            <div class="secondary_navbar_platform">
                <h3>Playstation</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>PLAYSTATION</title><path d="M9.5,4.27C10.88,4.53 12.9,5.14 14,5.5C16.75,6.45 17.69,7.63 17.69,10.29C17.69,12.89 16.09,13.87 14.05,12.89V8.05C14.05,7.5 13.95,6.97 13.41,6.82C13,6.69 12.76,7.07 12.76,7.63V19.73L9.5,18.69V4.27M13.37,17.62L18.62,15.75C19.22,15.54 19.31,15.24 18.83,15.08C18.34,14.92 17.47,14.97 16.87,15.18L13.37,16.41V14.45L13.58,14.38C13.58,14.38 14.59,14 16,13.87C17.43,13.71 19.17,13.89 20.53,14.4C22.07,14.89 22.25,15.61 21.86,16.1C21.46,16.6 20.5,16.95 20.5,16.95L13.37,19.5V17.62M3.5,17.42C1.93,17 1.66,16.05 2.38,15.5C3.05,15 4.18,14.65 4.18,14.65L8.86,13V14.88L5.5,16.09C4.9,16.3 4.81,16.6 5.29,16.76C5.77,16.92 6.65,16.88 7.24,16.66L8.86,16.08V17.77L8.54,17.83C6.92,18.09 5.2,18 3.5,17.42Z" /></svg>
            </div>
        </a>
        <a href="https://media.tenor.com/lvahNLaqcQYAAAAC/cat-breakdance-fast-fast-cat-dance.gif">
            <div class="secondary_navbar_platform">
                <h3>XBOX</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>XBOX</title><path d="M6.43,3.72C6.5,3.66 6.57,3.6 6.62,3.56C8.18,2.55 10,2 12,2C13.88,2 15.64,2.5 17.14,3.42C17.25,3.5 17.54,3.69 17.7,3.88C16.25,2.28 12,5.7 12,5.7C10.5,4.57 9.17,3.8 8.16,3.5C7.31,3.29 6.73,3.5 6.46,3.7M19.34,5.21C19.29,5.16 19.24,5.11 19.2,5.06C18.84,4.66 18.38,4.56 18,4.59C17.61,4.71 15.9,5.32 13.8,7.31C13.8,7.31 16.17,9.61 17.62,11.96C19.07,14.31 19.93,16.16 19.4,18.73C21,16.95 22,14.59 22,12C22,9.38 21,7 19.34,5.21M15.73,12.96C15.08,12.24 14.13,11.21 12.86,9.95C12.59,9.68 12.3,9.4 12,9.1C12,9.1 11.53,9.56 10.93,10.17C10.16,10.94 9.17,11.95 8.61,12.54C7.63,13.59 4.81,16.89 4.65,18.74C4.65,18.74 4,17.28 5.4,13.89C6.3,11.68 9,8.36 10.15,7.28C10.15,7.28 9.12,6.14 7.82,5.35L7.77,5.32C7.14,4.95 6.46,4.66 5.8,4.62C5.13,4.67 4.71,5.16 4.71,5.16C3.03,6.95 2,9.35 2,12A10,10 0 0,0 12,22C14.93,22 17.57,20.74 19.4,18.73C19.4,18.73 19.19,17.4 17.84,15.5C17.53,15.07 16.37,13.69 15.73,12.96Z" /></svg>
            </div>
        </a>
        <a href="https://media.tenor.com/lvahNLaqcQYAAAAC/cat-breakdance-fast-fast-cat-dance.gif">
            <div class="secondary_navbar_platform">
                <h3>Nintendo Switch</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>NINTENDO_SWITCH</title><path d="M10.04,20.4H7.12C6.19,20.4 5.3,20 4.64,19.36C4,18.7 3.6,17.81 3.6,16.88V7.12C3.6,6.19 4,5.3 4.64,4.64C5.3,4 6.19,3.62 7.12,3.62H10.04V20.4M7.12,2A5.12,5.12 0 0,0 2,7.12V16.88C2,19.71 4.29,22 7.12,22H11.65V2H7.12M5.11,8C5.11,9.04 5.95,9.88 7,9.88C8.03,9.88 8.87,9.04 8.87,8C8.87,6.96 8.03,6.12 7,6.12C5.95,6.12 5.11,6.96 5.11,8M17.61,11C18.72,11 19.62,11.89 19.62,13C19.62,14.12 18.72,15 17.61,15C16.5,15 15.58,14.12 15.58,13C15.58,11.89 16.5,11 17.61,11M16.88,22A5.12,5.12 0 0,0 22,16.88V7.12C22,4.29 19.71,2 16.88,2H13.65V22H16.88Z" /></svg>
            </div>
        </a>
        <a href="https://media.tenor.com/lvahNLaqcQYAAAAC/cat-breakdance-fast-fast-cat-dance.gif">
            <div class="secondary_navbar_platform">
                <h3>PC</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>PC</title><path d="M6,2C4.89,2 4,2.89 4,4V12C4,13.11 4.89,14 6,14H18C19.11,14 20,13.11 20,12V4C20,2.89 19.11,2 18,2H6M6,4H18V12H6V4M4,15C2.89,15 2,15.89 2,17V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V17C22,15.89 21.11,15 20,15H4M8,17H20V20H8V17M9,17.75V19.25H13V17.75H9M15,17.75V19.25H19V17.75H15Z" /></svg>
            </div>
        </a>
        <a href="https://media.tenor.com/lvahNLaqcQYAAAAC/cat-breakdance-fast-fast-cat-dance.gif">
            <div class="secondary_navbar_platform">
                <h3>Retro</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>RETRO</title><path d="M13 2V3H12V9H11V10H9V11H8V12H7V13H5V12H4V11H3V9H2V15H3V16H4V17H5V18H6V22H8V21H7V20H8V19H9V18H10V19H11V22H13V21H12V17H13V16H14V15H15V12H16V13H17V11H15V9H20V8H17V7H22V3H21V2M14 3H15V4H14Z" /></svg>        
            </div>
        </a>
    </nav>
    <style>
        .secondary_navbar {
            background-color: var(--hovered_secondary);
            justify-content: space-between;
            color: var(--white);
            flex-direction: row;
            display: flex;
            padding: 0;
        }

        .secondary_navbar a{
            color: var(--white);
            text-decoration:none;
            width:100%;

        }

        .secondary_navbar_platform {
            justify-content: center;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 1rem;
            cursor: pointer;
            display: flex;
        }

        .secondary_navbar_platform svg {
            height: 2.5rem;
            fill: var(--white);
        }

        .secondary_navbar_platform h3 {
            font-size: var(--platforms);
            margin: 0;
        }

        .secondary_navbar_platform:hover {
            background-color: var(--dark_secondary);
            color: var(--primary_color);
        }

        .secondary_navbar_platform:hover svg {
            fill: var(--primary_color);
            animation: shake 0.5s;
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
    }
}
customElements.define('platforms-component', Platforms);


