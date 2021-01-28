export function findById(id, quests) {
    for (let quest of quests) {
        if (quest.id === id){
            return quest;
        }
    }}