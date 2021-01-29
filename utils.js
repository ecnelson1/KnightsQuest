export const USER = 'USER';

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

// export function setUser(user){
//     localStorage.setItem('USER', JSON.stringify(user));
// }
// export function getUser(){
//     const user = localStorage.getItem(USER);
//     return user;
// } 