import cafeFront from '../images/nhc.jpg';

export function bannerImg() {
    const container = document.querySelector('#content');
    const main = document.createElement('main');
    main.setAttribute('id', 'page');
    container.appendChild(main);
    const img = document.createElement('img');
    main.appendChild(img);
    img.src = cafeFront;
    img.alt = 'front view of cafe';
}