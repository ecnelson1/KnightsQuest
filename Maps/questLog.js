import quests from '../Data/questData.js';
const questLog = document.querySelector('ul');
for (let quest of quests){
    const task = document.createElement('li');
    const invite = document.createElement('a');
    invite.textContent = quest.title;
    invite.href = `../Quests/?id=${quest.id}`;
    task.append(invite);
    questLog.append(task);

}