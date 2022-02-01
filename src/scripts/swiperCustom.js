import Swiper, { Navigation, Pagination, Scrollbar, Parallax } from 'swiper';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/less/scrollbar';


new Swiper('.swiper', {
    modules: [
        Navigation,
        Pagination,
        Scrollbar,
        Parallax
    ],
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    effect: 'slide',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});