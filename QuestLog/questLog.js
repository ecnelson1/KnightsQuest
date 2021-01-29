import quests from '../Data/questData.js';
const questLog = document.querySelector('ul');
const scroll = document.getElementById('scroll');
scroll.textContent = 'Quest Log:';
for (let quest of quests){
    const task = document.createElement('li');
    const invite = document.createElement('a');
    invite.textContent = quest.title;
    invite.href = `../Quests/?id=${quest.id}`;
    task.append(invite);
    questLog.append(task);
}
