export function renderPeople(arr) {
    const peopleContainer = document.createElement('div');
    peopleContainer.classList.add('container');
    for (let person of arr) {
        const personContainer = document.createElement('div');
        personContainer.classList.add('person-container');
        for (let key in person) {
            let p = document.createElement('p');
            p.textContent = `${key}: ${person[key]}`;
            personContainer.append(p);
        }
        peopleContainer.append(personContainer);
    }
    return peopleContainer;
}