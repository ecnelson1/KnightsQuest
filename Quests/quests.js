import quests from '../data/questData.js';
import { findById } from '../utils.js';

const questTitle = document.querySelector('h1');
const questDesc = document.querySelector('p');
const img = document.querySelector('section img');
const userOptions = document.querySelector('form');
const user = JSON.parse(localStorage.getItem('USER'));
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
    const userHP = user.hp;
    userOptions.textContent = decision.result;
    user.completed[questId] = true;
    directUser(userHP);
});

function userEffect(decision, quest){
    user.hp = user.hp + decision.hp;
    user.gold = user.gold + decision.gold;
    user.completed[quest.id] = true;
    localStorage.setItem('USER', JSON.stringify(user));
}

function directUser(userHP){
    if (userHP <= 0){
        setTimeout(function(){window.location = '../Results';}, 12000);
    } else {setTimeout(function(){window.location = '../QuestLog';}, 12000);}
}