<script setup>
import { ref } from 'vue';

const isNavOpen = ref(false);


const toggleNav = () => {
    const root = document.getElementById('__nuxt');
    isNavOpen.value = !isNavOpen.value;
    if (isNavOpen.value) {
        root.style.overflow = 'hidden';
        root.style.height = '100vh';
    } else {   root.style.height = '';
        root.style.overflow = '';
    }
};

const handleBoth = (el) => {
    const root = document.getElementById('__nuxt');
    isNavOpen.value = false;
    root.style.overflow = '';
    root.style.height = '';
    const formElement = document.getElementById(el);
    if (formElement) {
        setTimeout(() => {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // небольшая задержка
    }
};

const goToForm = (el) => {
    const formElement = document.getElementById(el);
    if (formElement) {
        setTimeout(() => {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // небольшая задержка
    }
};
</script>

<template>
    <header>
        <div class="container">
            <a class="logo" @click="isNavOpen = false">
                <img src="/images/icons/logo.jpg" alt=" " loading="lazy">
            </a>
            <nav class="desktop-menu">
                <a @click="goToForm('why')">О нас</a>
                <a @click="goToForm('techs')">Скупка</a>
                <a @click="goToForm('reviews')">Отзывы</a>
                <a @click="goToForm('faq')">Вопросы</a>
                <a @click="goToForm('contacts')">Контакты</a>
            </nav>
            <div class="contacts">
                <a class="phone" href="tel:+79030623832">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.98213 8.03189L8.67846 8.35151C8.67846 8.35151 7.95673 9.1114 5.98673 7.0373C4.01674 4.96327 4.73846 4.20343 4.73846 4.20343L4.92966 4.00212C5.40073 3.50621 5.44513 2.71002 5.03413 2.12877L4.1935 0.939783C3.68485 0.220374 2.70197 0.12534 2.11896 0.739135L1.07256 1.8408C0.78348 2.14515 0.58976 2.53968 0.613254 2.97734C0.673354 4.09702 1.1518 6.50612 3.82157 9.31688C6.65273 12.2975 9.30919 12.416 10.3955 12.3088C10.7391 12.2749 11.0379 12.0896 11.2787 11.836L12.2258 10.839C12.8651 10.166 12.6848 9.01215 11.8669 8.54139L10.5932 7.80826C10.0561 7.49916 9.40186 7.58993 8.98213 8.03189Z"
                            fill="#011226" />
                    </svg>
                    <span>8 (903) 062-38-32</span>
                </a>
                <div class="social">
                    <a href="" class="whatsupp link">
                        <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.5007 4.62488C16.5007 -0.000153065 10.3756 -1.37516 5.62561 1.49986C1.00058 4.37488 -0.499432 10.6249 2.50059 15.25L2.75059 15.625L2.19564 17.706C1.99756 18.4488 2.67676 19.128 3.41954 18.9299L5.50061 18.375L5.87562 18.625C7.50063 19.5 9.25064 20 11.0007 20C12.8757 20 14.7507 19.5 16.3757 18.5C21.0007 15.5 22.3757 9.37492 19.5007 4.62488ZM16.8757 14.25C16.3757 15 15.7507 15.5 14.8757 15.625C14.3757 15.625 13.7507 15.875 11.2507 14.875C9.12564 13.875 7.37563 12.2499 6.12562 10.3749C5.37561 9.49992 5.00061 8.37491 4.87561 7.2499C4.87561 6.2499 5.25061 5.37489 5.87562 4.74988C6.12562 4.49988 6.37562 4.37488 6.62562 4.37488H7.25063C7.50063 4.37488 7.75063 4.37488 7.87563 4.87488C8.12563 5.49989 8.75064 6.9999 8.75064 7.1249C8.87564 7.2499 8.87564 7.49991 8.75064 7.62491C8.87564 7.87491 8.75064 8.12491 8.62564 8.24991C8.50064 8.37491 8.37564 8.62491 8.25063 8.74991C8.00063 8.87492 7.87563 9.12492 8.00063 9.37492C8.50064 10.1249 9.12564 10.8749 9.75065 11.4999C10.5007 12.1249 11.2507 12.6249 12.1257 12.9999C12.3757 13.1249 12.6257 13.1249 12.7507 12.8749C12.8757 12.6249 13.5007 11.9999 13.7507 11.7499C14.0007 11.4999 14.1257 11.4999 14.3757 11.6249L16.3757 12.6249C16.6257 12.7499 16.8757 12.8749 17.0007 12.9999C17.1257 13.3749 17.1257 13.875 16.8757 14.25Z"
                                fill="#011226" />
                        </svg>
                    </a>
                    <a href="https://t.me/Treidpro_kzn" class="tg link">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.0883 5.98606C14.0923 5.98606 14.0976 5.98606 14.1029 5.98606C14.2417 5.98606 14.3705 6.02922 14.4761 6.10359L14.4741 6.10226C14.5511 6.16932 14.6029 6.26361 14.6155 6.36985V6.37185C14.6288 6.45286 14.6361 6.54582 14.6361 6.64077C14.6361 6.68393 14.6348 6.72643 14.6315 6.76892V6.76295C14.4821 8.33599 13.834 12.1507 13.5046 13.9117C13.3652 14.6574 13.091 14.907 12.8254 14.9309C12.2483 14.9847 11.8101 14.5498 11.251 14.1833C10.3758 13.6089 9.88114 13.2517 9.03187 12.6919C8.0498 12.0458 8.68659 11.6892 9.24568 11.1089C9.39243 10.9562 11.9363 8.6421 11.9861 8.43227C11.9887 8.41965 11.99 8.40571 11.99 8.3911C11.99 8.33931 11.9708 8.29216 11.9396 8.25631C11.905 8.23373 11.8619 8.22112 11.8167 8.22112C11.7869 8.22112 11.7583 8.22709 11.7317 8.23705L11.7331 8.23639C11.6454 8.25631 10.2475 9.18017 7.53918 11.008C7.24369 11.241 6.87052 11.3884 6.46414 11.4057H6.46016C5.88446 11.336 5.36189 11.2078 4.86587 11.0252L4.91501 11.0412C4.29216 10.838 3.79748 10.7311 3.83997 10.3871C3.86255 10.2083 4.10912 10.0252 4.57968 9.83798C7.47831 8.57503 9.41124 7.74259 10.3785 7.34064C11.4456 6.77424 12.6826 6.3081 13.9834 6.00598L14.0876 5.98539L14.0883 5.98606ZM9.97676 0C4.46414 0.0132802 0 4.48539 0 10C0 15.5226 4.47676 20 10 20C15.5232 20 20 15.5232 20 10C20 4.48539 15.5359 0.0132802 10.0246 0H10.0232C10.0077 0 9.99225 0 9.97676 0Z"
                                fill="#011226" />
                        </svg>
                    </a>
                </div>

            </div>
            <div @click="toggleNav" class="hamburger" :class="{ 'menu--active': isNavOpen }">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </header>
    <div class="mobile" v-if="isNavOpen">
        <div id="mySidenav" class="mobile-nav">
            <nav>
                <a @click="handleBoth('why')">О нас</a>
                <a @click="handleBoth('techs')">Скупка</a>
                <a @click="handleBoth('reviews')">Отзывы</a>
                <a @click="handleBoth('faq')">Вопросы</a>
                <a @click="handleBoth('contacts')">Контакты</a>
            </nav>
            <button class="button" @click="handleBoth('form')">Оставить заявку</button>
            <div class="contacts-mobile">
                <a class="phone" href="tel:+79030623832">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.98213 8.03189L8.67846 8.35151C8.67846 8.35151 7.95673 9.1114 5.98673 7.0373C4.01674 4.96327 4.73846 4.20343 4.73846 4.20343L4.92966 4.00212C5.40073 3.50621 5.44513 2.71002 5.03413 2.12877L4.1935 0.939783C3.68485 0.220374 2.70197 0.12534 2.11896 0.739135L1.07256 1.8408C0.78348 2.14515 0.58976 2.53968 0.613254 2.97734C0.673354 4.09702 1.1518 6.50612 3.82157 9.31688C6.65273 12.2975 9.30919 12.416 10.3955 12.3088C10.7391 12.2749 11.0379 12.0896 11.2787 11.836L12.2258 10.839C12.8651 10.166 12.6848 9.01215 11.8669 8.54139L10.5932 7.80826C10.0561 7.49916 9.40186 7.58993 8.98213 8.03189Z"
                            fill="var(--orang)" />
                    </svg>
                    <span>8 (903) 062-38-32</span>
                </a>
                <div class="social">
                    <a href="" class="whatsupp link">
                        <svg width="30" height="30" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.5007 4.62488C16.5007 -0.000153065 10.3756 -1.37516 5.62561 1.49986C1.00058 4.37488 -0.499432 10.6249 2.50059 15.25L2.75059 15.625L2.19564 17.706C1.99756 18.4488 2.67676 19.128 3.41954 18.9299L5.50061 18.375L5.87562 18.625C7.50063 19.5 9.25064 20 11.0007 20C12.8757 20 14.7507 19.5 16.3757 18.5C21.0007 15.5 22.3757 9.37492 19.5007 4.62488ZM16.8757 14.25C16.3757 15 15.7507 15.5 14.8757 15.625C14.3757 15.625 13.7507 15.875 11.2507 14.875C9.12564 13.875 7.37563 12.2499 6.12562 10.3749C5.37561 9.49992 5.00061 8.37491 4.87561 7.2499C4.87561 6.2499 5.25061 5.37489 5.87562 4.74988C6.12562 4.49988 6.37562 4.37488 6.62562 4.37488H7.25063C7.50063 4.37488 7.75063 4.37488 7.87563 4.87488C8.12563 5.49989 8.75064 6.9999 8.75064 7.1249C8.87564 7.2499 8.87564 7.49991 8.75064 7.62491C8.87564 7.87491 8.75064 8.12491 8.62564 8.24991C8.50064 8.37491 8.37564 8.62491 8.25063 8.74991C8.00063 8.87492 7.87563 9.12492 8.00063 9.37492C8.50064 10.1249 9.12564 10.8749 9.75065 11.4999C10.5007 12.1249 11.2507 12.6249 12.1257 12.9999C12.3757 13.1249 12.6257 13.1249 12.7507 12.8749C12.8757 12.6249 13.5007 11.9999 13.7507 11.7499C14.0007 11.4999 14.1257 11.4999 14.3757 11.6249L16.3757 12.6249C16.6257 12.7499 16.8757 12.8749 17.0007 12.9999C17.1257 13.3749 17.1257 13.875 16.8757 14.25Z"
                                fill="#011226" />
                        </svg>
                    </a>
                    <a href="https://t.me/Treidpro_kzn" class="tg link">
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.0883 5.98606C14.0923 5.98606 14.0976 5.98606 14.1029 5.98606C14.2417 5.98606 14.3705 6.02922 14.4761 6.10359L14.4741 6.10226C14.5511 6.16932 14.6029 6.26361 14.6155 6.36985V6.37185C14.6288 6.45286 14.6361 6.54582 14.6361 6.64077C14.6361 6.68393 14.6348 6.72643 14.6315 6.76892V6.76295C14.4821 8.33599 13.834 12.1507 13.5046 13.9117C13.3652 14.6574 13.091 14.907 12.8254 14.9309C12.2483 14.9847 11.8101 14.5498 11.251 14.1833C10.3758 13.6089 9.88114 13.2517 9.03187 12.6919C8.0498 12.0458 8.68659 11.6892 9.24568 11.1089C9.39243 10.9562 11.9363 8.6421 11.9861 8.43227C11.9887 8.41965 11.99 8.40571 11.99 8.3911C11.99 8.33931 11.9708 8.29216 11.9396 8.25631C11.905 8.23373 11.8619 8.22112 11.8167 8.22112C11.7869 8.22112 11.7583 8.22709 11.7317 8.23705L11.7331 8.23639C11.6454 8.25631 10.2475 9.18017 7.53918 11.008C7.24369 11.241 6.87052 11.3884 6.46414 11.4057H6.46016C5.88446 11.336 5.36189 11.2078 4.86587 11.0252L4.91501 11.0412C4.29216 10.838 3.79748 10.7311 3.83997 10.3871C3.86255 10.2083 4.10912 10.0252 4.57968 9.83798C7.47831 8.57503 9.41124 7.74259 10.3785 7.34064C11.4456 6.77424 12.6826 6.3081 13.9834 6.00598L14.0876 5.98539L14.0883 5.98606ZM9.97676 0C4.46414 0.0132802 0 4.48539 0 10C0 15.5226 4.47676 20 10 20C15.5232 20 20 15.5232 20 10C20 4.48539 15.5359 0.0132802 10.0246 0H10.0232C10.0077 0 9.99225 0 9.97676 0Z"
                                fill="#011226" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.mobile {
    display: none;
}

a {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contacts {
    display: flex;
    gap: 35px;
    width: calc(100% - 380px - 65px);
    justify-content: flex-end;

    .social {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .phone {
        display: flex;
        gap: 5px;
        align-items: center;

        span {
            font-weight: 400;
            font-size: 14px;
            color: var(--dark-blue);
            text-decoration: underline;
        }
    }

    a:hover {
        span {
            color: var(--orang);
        }

        svg path {
            fill: var(--orang);
        }
    }
}

header {
    display: flex;
    font-family: var(--second-family), sans-serif;

    .container {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
    }
}

.logo {
    height: 40px;
    width: 40px;
    margin-right: 25px;

    img {
        width: 100%;
    }
}

.desktop-menu {
    display: flex;
    align-items: center;
    gap: 5px;

    a {

        font-weight: 400;
        font-size: 14px;
        color: var(--dark-blue);
        cursor: pointer;
        padding: 8px 10px;
    }

    a:hover, a:focus {
        color: var(--orang);
    }
}

@media (max-width: 800px) {
    .mobile {
        display: block;
    }

    .hamburger {
        flex-direction: column;
        align-self: center;
        display: flex;

        .line {
            width: 18px;
            height: 2px;
            background-color: var(--dark-blue);
            display: block;
            transition: all 0.3s ease-in-out;
            border-radius: 5px;
        }

        .line:nth-child(2) {
            margin: 5px auto;
        }
    }

    .hamburger.menu--active .line:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .hamburger.menu--active .line:nth-child(2) {
        opacity: 0;
    }

    .hamburger.menu--active .line:nth-child(3) {
        transform: translateY(-6.5px) rotate(-45deg);
    }

    .mobile-nav {
        height: calc(100vh - 60px);
        width: 100%;
        position: sticky;
        z-index: 1;
        top: 60px;
        right: 0;
        background-color: var(--white);
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        .contacts-mobile {
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 35px;
            width: calc(100% - 40px);
            justify-content: center;
            align-items: center;

            .social {
                display: flex;
                align-items: center;
                gap: 25px;

                svg {
                    width: 30px;
                    height: 30px;
                }
            }

            .phone {
                display: flex;
                gap: 10px;
                align-items: center;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    color: var(--orang);
                    text-decoration: underline;
                }
            }
        }

        nav {
            margin-bottom: 25px;

            a {
                padding: 13px;
                font-size: 16px;
                text-align: center;
                color: var(--dark-blue);
                display: block;
                transition: 0.3s;
            }

            a:hover {
                color: var(--orang);
            }
        }

        button {
            margin-bottom: 25px;
            width: 100%;
        }
    }


    header {
        position: relative;

        .container {
            justify-content: space-between;
        }
    }

    .logo {
        margin: 0;
    }

    .desktop-menu {
        display: none;
    }

    .contacts {
        display: none;
    }
}
</style>