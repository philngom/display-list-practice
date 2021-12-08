export function renderHowAreYous(arr) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let single of arr) {
        let singleContainer = document.createElement('div');
        singleContainer.classList.add('single-how-are-you');
        for (let key in single) {
            let p = document.createElement('p');
            p.textContent = `${key}--> ${single[key]}`;
            singleContainer.append(p);
        }
        container.append(singleContainer);
    }

    return container;
}