const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        character: formData.get('avatar'),
        hp: 100,
        gold: 50,
        completed: {},
    };

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './maps';
});