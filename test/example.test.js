// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { makeUser } from '../utils.js';

const test = QUnit.test;

test('Should take in user provided info and return a complete user with stats', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const formData = new FormData();
    formData.set('name', 'joe');
    formData.set('avatar', 'knight');
   
    const expected = {
        name: 'joe',
        character: 'knight',
        hp: 100,
        gold: 50,
        completed: {}
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

