const user = JSON.parse(localStorage.getItem('USER'));
import { wealth, health } from './score.js';
import {livingWealth, deadWealth, healthRecord } from '../Data/messages.js'; 
const questOutcome = document.getElementById('quest-result');
const healthResult = health(user.hp);
const wealthResult = wealth(user.gold);
const docNote = healthRecord[healthResult];

let bankNote = null;
if (healthResult === 'dead') {
    bankNote = deadWealth;
}
else {
    bankNote = livingWealth;
}
const usersWealthNote = bankNote[wealthResult];

const questResults = `That really WAS a WILD KNIGHT OUT! ${user.name} the ${user.character}, ${docNote} and ${usersWealthNote}!`;

questOutcome.textContent = questResults;