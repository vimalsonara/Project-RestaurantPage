export function menu() {
    const container = document.querySelector('#content');

    const menuItem = ['Margherita Pizza', 'Italian Pizza', 'Masala Maggie', 'Mexixan Sizzler', 'Aloo Paratha', 'Nutella Shake'];
    const div = document.createElement('div');
    div.setAttribute('id', 'page')
    div.classList.add('menus')
    const ul = document.createElement('ul')

    menuItem.forEach(createMenu);

    function createMenu(item) {
        const li = document.createElement('li');
        container.appendChild(div);
        div.appendChild(ul);
        ul.appendChild(li);
        li.textContent = `${item}`;
    }
}