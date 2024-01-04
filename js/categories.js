class Categories extends HTMLElement {
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
            h2 {
                background-color: var(--secondary_color);
                font-size: var(--title);
                color: var(--white);
                padding: 0.5rem 0 0.5rem 3rem;
                margin: 0;
            }

            .categories {
                background-color: var(--primary_color);
                justify-content: space-around;
                align-items: center;
                display: flex;
            }

            .category_card {
                background-color: var(--primary_color);
                cursor: pointer;
                width: 60rem;
                transition: background-color 0.3s ease;
            }

            .category_card:hover {
                background-color: var(--secondary_color);
            }

            .category_card_elements {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                align-items: center;
                color: white;
                padding: 2rem;
                font-weight: 700;
                font-size: var(--subtitle);
            }

            .category_card:hover .category_card_elements svg {
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

            .category_card_elements svg {
                width: 4rem;
                margin-bottom: 0.6rem;
            }

            .category_card_elements p {
                margin: 0;
            }

        </style>

        <h2>Categorías</h2>
        <section class="categories">
            <div class="category_card">
                <div class="category_card_elements">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>sword-cross</title>
                        <path
                            d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z" />
                    </svg>
                    <p>Acción</p>
                </div>
            </div>
            <div class="category_card">
                <div class="category_card_elements">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.7139 19.2112L25.6768 18.2869L29.4497 21.9253L28.4867 22.8496L24.7139 19.2112ZM35.516 6.64087C35.1921 6.64087 34.9295 6.89295 34.9295 7.20385V26.2694C34.9295 26.5803 35.1921 26.8324 35.516 26.8324H36.2863C36.5402 26.8324 36.7853 26.8576 37.0304 26.8996H37.0654C37.3018 26.9417 37.5206 27.0089 37.7307 27.0845L37.792 27.1013C38.0021 27.1853 38.1946 27.2694 38.3785 27.387L38.4485 27.4206C38.6236 27.5383 38.7987 27.6643 38.9562 27.7987L39 27.8323V9.24569C38.8774 7.73321 37.7657 6.64087 36.2863 6.64087H35.516Z"
                            fill="white" />
                        <path
                            d="M35.7349 33.9915C36.6067 33.9592 37.4321 33.606 38.04 33.0053C38.6479 32.4046 38.9917 31.6023 39 30.7649C38.8687 29.2104 37.757 28.1348 36.2863 28.1348H35.516C34.4393 28.1348 33.5727 27.2946 33.5727 26.2694V9.9011H31.1917L29.3621 12.2454C29.3041 12.3207 29.2297 12.3831 29.144 12.4281C29.0584 12.4731 28.9636 12.4997 28.8662 12.5061C28.7688 12.5125 28.6711 12.4985 28.5799 12.4651C28.4887 12.4317 28.4061 12.3797 28.3379 12.3126L25.8256 9.9011H24.0223C24.1305 10.8201 24.0091 11.7507 23.6681 12.6157C23.3272 13.4807 22.7764 14.2554 22.0615 14.8754L24.6876 17.3962L25.1691 16.9341C25.4317 16.682 25.8694 16.682 26.132 16.9341L30.8765 21.4883C31.1391 21.7404 31.1391 22.1605 30.8765 22.4126L28.9507 24.2528C28.8879 24.3143 28.813 24.3631 28.7304 24.3965C28.6477 24.4298 28.5589 24.447 28.4692 24.447C28.3796 24.447 28.2908 24.4298 28.2081 24.3965C28.1255 24.3631 28.0505 24.3143 27.9878 24.2528L23.252 19.6986C22.9894 19.4465 22.9894 19.0264 23.252 18.7743L23.7335 18.3205L20.9498 15.6485C19.9703 16.1774 18.8579 16.4367 17.7348 16.398C16.6117 16.3593 15.5215 16.024 14.5841 15.4291C13.6467 14.8341 12.8984 14.0025 12.4214 13.0257C11.9445 12.049 11.7575 10.9649 11.8809 9.8927H6.42732V26.2694C6.42732 27.2946 5.55195 28.1348 4.48399 28.1348H3.71366C3.16217 28.1348 2.66321 28.2861 2.23428 28.555C1.86501 28.8129 1.5619 29.1483 1.34802 29.5356C1.13413 29.9229 1.01511 30.352 1 30.7901C1.01151 31.6452 1.3735 32.4616 2.00758 33.0624C2.64165 33.6631 3.49676 34 4.3877 33.9999H8.7208L9.8938 31.748C9.94273 31.6566 10.0133 31.5776 10.0999 31.5173C10.1865 31.457 10.2867 31.417 10.3923 31.4007C10.4979 31.3843 10.6061 31.392 10.708 31.4231C10.81 31.4543 10.9029 31.508 10.9793 31.5799L13.4916 33.9999H29.1345L30.29 32.3362C30.4651 32.0757 30.8152 31.9749 31.1216 32.0925L35.7349 33.9915ZM9.62244 22.0849C9.55968 22.1464 9.48477 22.1953 9.4021 22.2286C9.31943 22.2619 9.23065 22.2791 9.14098 22.2791C9.05131 22.2791 8.96253 22.2619 8.87986 22.2286C8.79719 22.1953 8.72228 22.1464 8.65953 22.0849C8.39691 21.8328 8.39691 21.4127 8.65953 21.1606L9.88505 19.9927L8.65953 18.8247C8.5963 18.764 8.54615 18.6919 8.51193 18.6127C8.47771 18.5334 8.4601 18.4484 8.4601 18.3625C8.4601 18.2767 8.47771 18.1917 8.51193 18.1124C8.54615 18.0331 8.5963 17.9611 8.65953 17.9004C8.78722 17.7778 8.9604 17.709 9.14098 17.709C9.2304 17.709 9.31893 17.7259 9.40154 17.7587C9.48415 17.7916 9.55921 17.8397 9.62244 17.9004L10.8392 19.0768L12.056 17.9004C12.1837 17.7778 12.3569 17.709 12.5374 17.709C12.718 17.709 12.8912 17.7778 13.0189 17.9004C13.1466 18.023 13.2183 18.1892 13.2183 18.3625C13.2183 18.5359 13.1466 18.7021 13.0189 18.8247L11.7934 20.0011L13.0189 21.1606C13.1466 21.2832 13.2183 21.4494 13.2183 21.6228C13.2183 21.7961 13.1466 21.9624 13.0189 22.0849C12.8912 22.2075 12.718 22.2763 12.5374 22.2763C12.3569 22.2763 12.1837 22.2075 12.056 22.0849L10.8305 20.9085L9.62244 22.0849ZM11.9859 25.362C11.8984 25.404 11.8021 25.4208 11.7146 25.4208C11.5808 25.4215 11.4497 25.3844 11.3376 25.3142C11.2256 25.244 11.1375 25.1437 11.0843 25.0259C11.0003 24.8335 10.9186 24.6402 10.8392 24.4461C10.7342 24.2108 10.6466 24.0007 10.5853 23.8999C10.5138 23.7509 10.5031 23.5817 10.5553 23.4255C10.6075 23.2693 10.7188 23.1376 10.8672 23.0563C11.0156 22.9751 11.1904 22.9502 11.357 22.9866C11.5236 23.023 11.6699 23.118 11.7671 23.2529C11.8721 23.4209 11.9684 23.6646 12.091 23.9587L12.3361 24.5133C12.4849 24.8494 12.3273 25.2275 11.9859 25.3704V25.362ZM15.2248 29.2188C15.1664 29.283 15.0952 29.3355 15.0155 29.3732C14.9359 29.411 14.8492 29.4332 14.7605 29.4387C14.6718 29.4442 14.5829 29.4327 14.4988 29.4051C14.4148 29.3775 14.3372 29.3341 14.2707 29.2776C13.5704 28.6894 12.9489 28.034 12.4236 27.3282C12.344 27.1876 12.3206 27.0239 12.358 26.868C12.3954 26.712 12.4909 26.5746 12.6265 26.4816C12.7622 26.3886 12.9286 26.3464 13.0944 26.3631C13.2602 26.3797 13.4139 26.454 13.5266 26.5719C13.9906 27.1937 14.542 27.7735 15.1636 28.2945C15.4437 28.5298 15.4787 28.9415 15.2248 29.2188ZM19.9256 31.2354C19.8877 31.4044 19.7819 31.5522 19.631 31.6466C19.4802 31.7411 19.2966 31.7745 19.1202 31.7396C18.2449 31.5631 17.3695 31.2354 16.5116 30.7901C16.3712 30.6982 16.2714 30.5593 16.232 30.4006C16.1925 30.2419 16.2161 30.0748 16.2982 29.9319C16.3803 29.7891 16.5149 29.6807 16.6758 29.6281C16.8367 29.5754 17.0123 29.5823 17.1682 29.6473C17.8648 30.0263 18.6175 30.3012 19.4004 30.4624C19.768 30.5296 20.0044 30.8825 19.9256 31.227V31.2354ZM24.6088 31.0001C23.7379 31.4117 22.8041 31.6868 21.8427 31.8152C21.6789 31.8038 21.525 31.7362 21.409 31.6247C21.293 31.5132 21.2227 31.3654 21.211 31.2082C21.1993 31.0511 21.247 30.8951 21.3453 30.7689C21.4436 30.6428 21.586 30.5548 21.7464 30.5212C22.4992 30.412 23.2608 30.1851 24.0136 29.8322C24.1761 29.7564 24.3633 29.7457 24.5341 29.8024C24.6186 29.8305 24.6965 29.8743 24.7634 29.9313C24.8303 29.9883 24.8849 30.0574 24.924 30.1347C24.9631 30.2119 24.9859 30.2958 24.9912 30.3815C24.9965 30.4672 24.9842 30.5531 24.955 30.6343C24.9257 30.7154 24.8801 30.7902 24.8207 30.8544C24.7613 30.9187 24.6893 30.971 24.6088 31.0086V31.0001ZM27.979 28.555C27.9615 28.5718 27.5939 29.0003 26.9286 29.5381C26.8602 29.5944 26.7807 29.637 26.6948 29.6634C26.6089 29.6897 26.5184 29.6993 26.4286 29.6914C26.3388 29.6836 26.2516 29.6585 26.1721 29.6178C26.0926 29.577 26.0224 29.5213 25.9657 29.4541C25.9083 29.3886 25.8651 29.3129 25.8384 29.2312C25.8118 29.1496 25.8022 29.0638 25.8104 28.9786C25.8185 28.8934 25.8442 28.8106 25.8859 28.735C25.9275 28.6594 25.9844 28.5925 26.0532 28.5382C26.3714 28.285 26.6699 28.0098 26.9461 27.7147C27.0688 27.6078 27.2278 27.5473 27.3934 27.5446C27.5591 27.5419 27.7202 27.5971 27.8466 27.6999C27.973 27.8027 28.0561 27.9462 28.0805 28.1035C28.1049 28.2608 28.0688 28.4213 27.979 28.555Z"
                            fill="white" />
                        <path
                            d="M2.83829 15.9511C3.07464 16.1779 3.1009 16.5393 2.89956 16.7997L1 19.2365V27.8324L1.07878 27.7736C1.21884 27.6476 1.37641 27.5299 1.53398 27.4375L1.63902 27.3703C1.8141 27.2695 2.00668 27.177 2.19926 27.1014C2.22552 27.1014 2.25179 27.0846 2.26929 27.0762C2.47938 27.0006 2.70698 26.9418 2.92582 26.9082L2.96959 26.8997C3.20594 26.8577 3.4598 26.8325 3.71366 26.8325H4.48399C4.80788 26.8325 5.07049 26.5804 5.07049 26.2695V7.2039C5.07049 6.89301 4.80788 6.64093 4.48399 6.64093H3.71366C2.22552 6.64093 1.1138 7.73327 1 9.29617V14.1865L2.83829 15.9511ZM13.369 9.4054C13.3165 9.59866 13.2815 9.78352 13.2552 9.95998V9.99359C13.1306 11.0152 13.3692 12.0472 13.9323 12.9223C14.4955 13.7973 15.3501 14.4641 16.3576 14.8143C17.3651 15.1646 18.4664 15.1778 19.4827 14.8518C20.499 14.5259 21.3707 13.8798 21.9565 13.0185C22.4555 12.2657 22.7154 11.3897 22.7046 10.4974C22.6937 9.60513 22.4124 8.73519 21.8952 7.99376C21.3816 7.27014 20.662 6.70366 19.8222 6.36191C18.9824 6.02015 18.0578 5.91757 17.159 6.0664C16.2601 6.21522 15.4248 6.60917 14.7528 7.20123C14.0807 7.79329 13.6004 8.55845 13.369 9.4054ZM18.6388 7.94334C18.6388 8.30465 18.3412 8.59875 17.9648 8.59875C17.448 8.63129 16.9636 8.85127 16.6096 9.21407C16.2556 9.57686 16.0587 10.0553 16.0587 10.5524C16.0587 11.0494 16.2556 11.5279 16.6096 11.8907C16.9636 12.2535 17.448 12.4734 17.9648 12.506C18.1314 12.5242 18.2852 12.6006 18.3969 12.7207C18.5086 12.8408 18.5704 12.9962 18.5704 13.1572C18.5704 13.3182 18.5086 13.4736 18.3969 13.5937C18.2852 13.7138 18.1314 13.7902 17.9648 13.8084C17.0949 13.766 16.2753 13.4044 15.6753 12.7984C15.0753 12.1925 14.7407 11.3884 14.7407 10.5524C14.7407 9.71634 15.0753 8.91227 15.6753 8.30629C16.2753 7.70032 17.0949 7.33876 17.9648 7.29633C18.3412 7.29633 18.6388 7.58202 18.6388 7.94334Z"
                            fill="white" />
                    </svg>
                    <p>Aventuras</p>
                </div>
            </div>
            <div class="category_card">
                <div class="category_card_elements">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32.0917 15.5002C30.5763 15.6167 29.7306 16.4234 29.5455 17.8932C29.3693 19.372 28.4002 20.564 26.6469 21.4872C25.7847 22.7854 25.4297 24.3642 25.6513 25.9146C25.713 26.0939 25.8011 26.1835 25.9156 26.1835C26.1007 26.1835 28.3649 25.359 29.1843 27.7519C29.7306 29.3562 29.7922 31.0412 29.3605 32.8247C30.3297 33.8106 32.0565 34.1691 34.5322 33.9271C37.3692 33.5686 38.8493 32.9143 38.9727 31.9912C39.1489 30.611 38.4264 26.0043 37.9683 25.0901C37.5278 24.158 35.0697 20.8419 34.7965 19.4616C34.6187 18.5497 34.5302 17.622 34.5322 16.6922C34.5675 15.8946 34.2062 15.5002 33.4397 15.5002H32.0917Z"
                            fill="white" />
                        <path
                            d="M23.2991 24.2566C23.7485 23.9787 23.8366 23.9787 23.8366 24.2566V25.7264C23.537 26.2193 22.33 26.533 20.2155 26.6495C18.101 26.775 16.6473 25.9774 15.8632 24.2566C15.6253 23.3962 15.4403 22.6881 15.3257 22.1325C15.1495 21.3079 14.2332 20.564 13.1496 20.564C12.4271 20.564 11.8456 20.5013 11.4227 20.3848C10.8853 20.2055 10.6122 19.8291 10.6122 19.2734V16.9701H2.45372C2.57706 15.563 2.24227 14.7563 1.45814 14.5771V13.7436H1.19383V13.0983H1V9.87179H1.17621V9.33404H1.44933V8.21373H2.08368V6.46605C2.14535 6.2868 2.3568 6.19717 2.71803 6.19717C2.65636 6.06274 2.7797 6 3.07926 6L7.4316 8.21373H17.0349C17.3807 8.16079 17.7118 8.03549 18.0076 7.84575C18.3033 7.656 18.5571 7.40594 18.753 7.11135H25.0965C25.581 8.64393 26.0656 9.56706 26.5502 9.87179L28.6294 7.84627C29.114 7.47881 29.5986 7.47881 30.0832 7.84627C30.5677 8.27647 30.6558 8.76941 30.3475 9.32508L28.1801 11.4402C28.9642 12.4261 30.4708 13.1341 32.7087 13.5643C32.7087 13.6808 32.6206 13.7436 32.4443 13.7436C30.2065 14.0573 28.9907 14.7563 28.8145 15.8677C28.5413 17.5257 27.1845 19.8291 25.5546 20.3848C25.0084 19.3362 24.4357 18.7536 23.8278 18.6281H19.6693C18.7001 18.7536 18.0129 19.4616 17.59 20.7522C17.1054 23.5127 18.0393 24.875 20.4005 24.8033C22.0304 24.624 22.9908 24.4448 23.2991 24.2566ZM15.1407 11.3954C15.1407 11.9332 15.5636 12.3634 16.0922 12.3634H21.2111C21.9335 12.3634 22.2948 12.0586 22.2948 11.4402C22.2948 10.768 21.9423 10.4275 21.2111 10.4275H16.101C15.5724 10.4275 15.1407 10.8577 15.1407 11.3954ZM15.1407 14.9446C15.1407 15.5002 15.5812 15.9573 16.1363 15.9573H21.3961C22.0569 15.9573 22.4181 15.6167 22.4798 14.9446C22.4181 14.2724 21.9952 13.9318 21.2111 13.9318H16.1451C15.5988 13.9318 15.1495 14.3799 15.1495 14.9446H15.1407Z"
                            fill="white" />
                    </svg>
                    <p>FPS / TPS</p>
                </div>
            </div>
            <div class="category_card">
                <div class="category_card_elements">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.0048 2L19.9758 2.03859C19.8208 2.31833 19.6174 2.78135 19.4333 3.36013C19.0459 4.49839 18.6584 6.08039 18.3291 7.65273C17.8888 9.75424 17.5076 11.8676 17.1861 13.9904C17.1861 14.1061 17.3411 14.3473 17.8351 14.5884C18.3485 14.8392 19.1331 15.0225 20.0048 15.0225C20.8766 15.0225 21.6515 14.8392 22.1746 14.5884C22.6686 14.3473 22.8139 14.1061 22.8236 13.9904L22.8042 13.9035C22.7186 13.2781 22.6218 12.6542 22.5136 12.0322C22.3005 10.8264 22.0099 9.23473 21.6709 7.65273C21.3801 6.20414 21.0148 4.77138 20.5763 3.36013C20.3826 2.78135 20.1889 2.31833 20.0242 2.03859L20.0145 2H20.0048ZM6.28881 3.54341C3.06322 5.95498 1 9.19614 1 12.7749C1 15.283 1.96865 17.6174 3.65409 19.6238L5.85292 13.2958C4.93195 11.9246 4.43364 10.3152 4.41932 8.66559C4.41932 6.80386 5.14581 5.07717 6.28881 3.54341ZM33.7112 3.54341C34.8726 5.0017 35.5285 6.79539 35.5807 8.65595C35.5807 10.3151 35.0673 11.8875 34.1471 13.2958L36.3556 19.6141C38.0254 17.7161 38.9628 15.2884 39 12.7653C39 9.19614 36.9368 5.95498 33.7112 3.54341ZM16.6243 9.66881C13.6893 10.4116 11.6067 12.2444 10.0859 15.3408C8.06143 19.4598 7.16059 25.8842 7.13153 34.7106C10.6125 36.6674 14.5019 37.7934 18.4938 38C18.4647 34.9132 17.9319 30.0418 17.5445 26.8778C12.1201 26.3955 9.76625 24.4952 9.76625 24.4952C9.76625 24.4952 10.0665 22.2572 10.2796 21.2637C13.4128 22.3133 16.6992 22.8381 20.0048 22.8167C23.3067 22.8394 26.5895 22.3179 29.7204 21.2733C29.9335 22.2572 30.2434 24.4952 30.2434 24.4952C30.2434 24.4952 27.9671 26.4244 22.4652 26.8875C22.0777 30.0514 21.5353 34.9228 21.5159 38C25.5045 37.7919 29.3904 36.666 32.8685 34.7106C32.8491 25.8842 31.9483 19.4598 29.9238 15.3408C28.403 12.2444 26.3301 10.4116 23.3854 9.66881L23.7632 11.7428L23.8504 11.791C24.8674 12.3601 25.6036 13.209 25.7586 14.2412L26.2429 17.5788L26.1751 17.7428C25.7489 18.7942 24.6543 19.3826 23.492 19.8167C22.3296 20.2508 21.0413 20.4823 20.0048 20.492H19.9952C18.8034 20.4592 17.6253 20.2311 16.508 19.8167C15.3457 19.3826 14.2511 18.7942 13.8249 17.7428L13.7571 17.5788L14.2414 14.2412C14.3964 13.209 15.1422 12.3601 16.1593 11.791L16.2368 11.7428L16.6146 9.66881H16.6243ZM7.49962 12.5048L4.12873 22.1608L6.54066 23.2701C7.02498 19.8746 7.7999 17.0482 8.92353 14.7814C9.19475 14.2315 9.48534 13.7203 9.79531 13.2283L7.48993 12.5048H7.49962ZM32.5198 12.5048L30.2144 13.2283C30.534 13.7106 30.8246 14.2315 31.0862 14.7717C32.3175 17.4652 33.1245 20.3317 33.4787 23.2701L35.881 22.1608L32.5198 12.5145V12.5048ZM15.6362 14.0482C15.5878 14.1833 15.5491 14.3087 15.5394 14.4341L15.1035 17.3666C15.336 17.7621 16.0431 18.2733 16.973 18.6206C17.9804 18.9871 19.1815 19.1994 20.0145 19.1994C20.8476 19.1994 22.0487 18.9871 23.0561 18.6206C23.7898 18.3953 24.4402 17.959 24.9256 17.3666L24.4897 14.4244C24.4731 14.2987 24.4406 14.1755 24.3928 14.0579L24.1119 14.1543C24.0344 14.8778 23.4339 15.4084 22.7461 15.746C22.0003 16.1029 21.051 16.3055 20.0145 16.3055C18.9684 16.3055 18.0191 16.1125 17.2829 15.746C16.5855 15.4084 15.9946 14.8778 15.9075 14.1447L15.6362 14.0482Z"
                            fill="white" />
                    </svg>
                    <p>RPG</p>
                </div>
            </div>
            <div class="category_card">
                <div class="category_card_elements">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></path><g class="" transform="translate(0,0)" style=""><path d="M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231 231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256 145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54 144.7 30.3 121.5 62.4 148 177.8 11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z" fill="#fff"></path></svg>
                    <p>Simulación</p>
                </div>
            </div>
            <div class="category_card">
                <div class="category_card_elements">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><path d="M0 0h512v512H0z" fill="none"></path><path d="M247 28v80h18V28zm35 0v64l80-32zm-26 96c-48 48-144 112-192 128 0 64-16 208-32 240h160c16-16 64-144 64-192 0 48 48 176 64 192h160c-16-32-32-176-32-240-48-16-144-80-192-128zM112 300h80v80h-80z" fill="white"></path></svg>
                    <p>Estrategia</p>
                </div>
            </div>
        </section>
      `;
    }
    
}
customElements.define('categories-component', Categories);


