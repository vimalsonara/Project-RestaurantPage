export function header() {
    const container = document.querySelector('#content');
    const header = document.createElement('header');
    container.appendChild(header);
    const h1 = document.createElement('h1');
    header.appendChild(h1);
    h1.textContent = 'Nyari Hills Cafe';
    const nav = document.createElement('nav');
    header.appendChild(nav);

    const liHome = document.createElement('a');
    const liMenu = document.createElement('a');
    const liContactUs = document.createElement('a');

    liHome.href = '#'
    liHome.classList.add('home');
    liHome.textContent = 'HOME';
    nav.appendChild(liHome);
    liMenu.href = '#'
    liMenu.classList.add('menu');
    liMenu.textContent = 'MENU';
    nav.appendChild(liMenu);
    liContactUs.href = '#'
    liContactUs.classList.add('contact')
    liContactUs.textContent = 'CONTACT US';
    nav.appendChild(liContactUs);
}

