import quests from '../Data/questData.js';
import { findById } from '../utils.js';

const questTitle = document.querySelector('h1');
const questDesc = document.querySelector('p');
const img = document.querySelector('section img');
const userOptions = document.querySelector('form');

const questLocation = new URLSearchParams(window.location.search);
const questId = questLocation.get('id');

const quest = findById(questId, quests);


questTitle.textContent = quest.title;
questDesc.textContent = quest.description;
img.src = `../${quest.image}`;

for (let choice of quest.choices) {
    const selection = document.createElement('input');
    const label = document.createElement('label');
    const choiceText = document.createElement('p');
    choiceText.textContent = choice.description;
    
    selection.type = 'radio';
    selection.value = choice.id;
    selection.name = 'Decision';

    label.append(choiceText, selection);

    userOptions.append(label);    
}

userOptions.addEventListener('submit', (action) => {
    action.preventDefault();
    const data = new FormData(userOptions);
    const choicesID = data.get('Decision');
    const choices = quest.choices;
    const decision = findById(choicesID, choices);
    userEffect(decision, quest);
    userOptions.textContent = decision.result;
    

});

function userEffect(decision, quest){
    const user = JSON.parse(localStorage.getItem('USER'));
    user.hp = user.hp + decision.hp;
    user.gold = user.gold + decision.gold;
    user.completed[quest.id] = true;
    localStorage.setItem('USER', JSON.stringify(user));
}
