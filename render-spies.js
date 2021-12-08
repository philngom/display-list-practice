import { renderHellos } from './render-hellos.js';

export function renderSpies(list) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let person of list) {
        const personContainer = document.createElement('div');
        personContainer.classList.add('container');
        for (let key in person) {
            let div = document.createElement('div');
            div.textContent = `${key}-->`;
            if (Array.isArray(person[key])) {
                let divOfArr = renderHellos(person[key]);
                divOfArr.classList.remove('container');
                div.append(divOfArr);
                personContainer.append(div);
            } else if (typeof person[key] === 'object') {
                for (let item in person[key]) {
                    let p = document.createElement('p');
                    p.textContent = person[key][item];
                    div.append(p);
                    personContainer.append(div);
                }
            } else {
                let p = document.createElement('p');
                p.textContent = person[key];
                div.append(p);
                personContainer.append(div);
            }
        }
        container.append(personContainer);

    }
    return container;
}
