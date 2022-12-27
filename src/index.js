import {header} from './Modules/header';
import {bannerImg} from './Modules/banner';
import {menu} from './Modules/menu';
import {contactUs} from './Modules/contact';
import './styles.css';

header();
bannerImg();

const navBar = document.querySelector('nav');
navBar.addEventListener('click', e => {
    if(e.target.classList.contains('home')) {
        const page = document.getElementById('page');
        page.remove();
        bannerImg();
    } else if(e.target.classList.contains('menu')) {
        const page = document.getElementById('page');
        page.remove();
        menu();
    } else {
        const page = document.getElementById('page');
        page.remove();
        contactUs();
    }
});