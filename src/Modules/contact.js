export function contactUs() {
    const container = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('contactPage');
    container.appendChild(div);
    const p = document.createElement('p');
    div.appendChild(p);
    
    p.innerHTML = 'Nyari Hills Cafe,</br>Kalawad-Nyari Dam Road,</br>Near IOC Petrol Pump,</br>Rajkot-360005,</br>Gujarat';

    console.log(p);
}