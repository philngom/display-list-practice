export function renderHellos(list) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let item of list) {
        const p = document.createElement('p');
        p.textContent = item;
        p.classList.add('hello-item');
        container.append(p);
    }
    return container;
}