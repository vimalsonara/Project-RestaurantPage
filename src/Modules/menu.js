export function menu() {
    const container = document.querySelector('#content');

    const menuItem = ['Margherita Pizza', 'Italian Pizza', 'Masala Maggie', 'Mexixan Sizzler', 'Aloo Paratha', 'Nutella Shake'];

    menuItem.forEach(createMenu);

    function createMenu(item) {
        const div = document.createElement('div');
        const ul = document.createElement('ul')
        const li = document.createElement('li');
        container.appendChild(div);
        div.appendChild(ul);
        ul.appendChild(li);
        li.textContent = `${item}`;
    }
}