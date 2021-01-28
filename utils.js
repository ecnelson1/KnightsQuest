export function findById(id, quests) {
    for (let quest of quests) {
        if (quest.id === id){
            return quest;
        }
    }}
export function makeUser(formData){
   
    const user = {
        name: formData.get('name'),
        character: formData.get('avatar'),
        hp: 100,
        gold: 50,
        completed: {},
    };
    
    return user;
} 