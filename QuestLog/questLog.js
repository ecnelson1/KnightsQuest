import quests from '../Data/questData.js';
const questLog = document.querySelector('ul');
const scroll = document.getElementById('scroll');
scroll.textContent = 'Quest Log:';
const user = JSON.parse(localStorage.getItem('USER'));

let allQuestsDone = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        allQuestsDone = false;}
}
if (user.hp <= 0 || allQuestsDone) {
    window.location = '../results';
}


for (let quest of quests){
    const task = document.createElement('li');
    const invite = document.createElement('a');
    invite.textContent = quest.title;
    invite.href = `../Quests/?id=${quest.id}`;
    task.append(invite);
    questLog.append(task);
}
