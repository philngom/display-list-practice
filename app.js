// import functions and grab DOM elements
import { listOfHellos } from './hellos-data.js';
import { renderHellos } from './render-hellos.js';
import { people } from './people-data.js';
import { renderPeople } from './render-people.js';
import { differentHowAreYous } from './how-are-you-data.js';
import { renderHowAreYous } from './render-how-are-yous.js';
import { spies } from './spies-data.js';
import { renderSpies } from './render-spies.js';
const mainSection = document.querySelector('main');
// initialize global state

//store returned divs to variables
let hellosEl = renderHellos(listOfHellos);
let peopleEl = renderPeople(people);
let howAreYouEl = renderHowAreYous(differentHowAreYous);
let spiesEl = renderSpies(spies);

//append returned divs to main
mainSection.append(hellosEl);
mainSection.append(peopleEl);
mainSection.append(howAreYouEl);
mainSection.append(spiesEl);
// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
