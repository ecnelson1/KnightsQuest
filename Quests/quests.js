import quests from '../Data/questData.js';
import { findById } from '../utils.js';

const questTitle = document.querySelector('h1');
const questDesc = document.querySelector('p');
const img = document.querySelector('section img');
const userResponse = document.querySelector('form');

const questLocation = new URLSearchParams(window.location.search);
const questId = questLocation.get('id');

const quest = findById(questId, quests);
questTitle.textContent = quest.title;
questDesc.textContent = quest.description;
img.src = `../assets/${quest.image}`;

for (let choice of quest.choices) {
    const selection = document.createElement('input');
    const label = document.createElement('label');
    const choiceText = document.createElement('p');

    choiceText.textContent = choice.description;
    
    selection.type = 'radio';
    selection.value = choice.id;
    selection.name = 'Decision';

    label.append(choiceText, selection);

    userResponse.append(label);    
}