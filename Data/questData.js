const damsel = {
    id: 'damsel',
    title: 'A Damsel in a high tower!',
    image: '../assets/damsel.jpg',
    description: `
        While out adventuring in the woods you come across a Damsel screaming out high in a tower with two armed guards at it's base.
    `,
    choices: [{
        id: 'charge',
        description: 'She is clearly in distress, charge in and save her!',
        result: `
            You charge down the hillside and attack the guards defeating them both in combat but not coming out unscathed. you rush up the tower steps, so beaten and worn you can hardly breathe by the top, throwing open the door the damsel screams and asks why you have attacked her men, embarrassed you try to explain , but she grabs your arm and throws you out the tower window!  
        `,
        hp: -50,
        gold: 0
    }, {
        id: 'ignore',
        description: 'Not our business, and she is an adult, carry on.',
        result: `
            As you pass by the tower the Damsel calls to you and asks you for a moment. She comes down the stairs and explains that she is having a terrible time with the towers door sticking and it has just irritated her to no end! you offer to shave down the door a bit with your sword and the problem is fixed! The Damsel, who is independently wealthy, tips you for your kindness and gifts you a snack for the road.
        `,
        hp: 25,
        gold: 50
    }, {
        id: 'ask',
        description: 'Ask the guards what the trouble seems to be.',
        result: `
            You ask the guards whats going on and they inform you that the lady of the tower is the daughter of the king and has been placed in protective confinement for her own safety as she is "not right" in-between the ears. They offer apologies for the nuisance, and give you a bag of gold in exchange for your silence on this delicate political matter. 
        `,
        hp: 0,
        gold: 100
    }]
};

const bard = {
    id: 'bard',
    title: 'The Music Man Commeth',
    image: '../assets/bard.jpeg',
    description: `
        You wander down a street in the village and a Bard decides to elate you with one of his songs!
    `,
    choices: [{
        id: 'tip',
        description: 'You listen and tip him a few pieces of gold for is efforts.',
        result: `
            You have shown the Bard a kindness he wishes to return! he is actually a nobleman who is attempting to learn music as a flight of fancy. The noble Bard takes you out for a night of drinking and feasting for your kindness! you feel restored!
        `,
        hp: 30,
        gold: -50
    }, {
        id: 'dance',
        description: 'THAT IS MY SONG!(start dancing)',
        result: `
            The Bards funky lyre riffs make you lose yourself to the music and you get lost in dance! The bard is so impressed by your moves, that he decides to tip you!
        `,
        hp: 0,
        gold: 25
    }, {
        id: 'ears',
        description: 'He is assaulting your ears! to battle!',
        result: `
            The Bards terrible playing summons a blind rage in you and you attack with speed and ferocity! Unfortunately that bard also happens to be legendary Knight William Thatcher who has a power so great they say he even changed the stars once. He hands you your @$*! you wake to realize he has helped himself to a tip as well!
        `,
        hp: -100,
        gold: -50
    }]
};

const captured = {
    id: 'captured',
    title: 'A Cold, Damp Awakening!',
    image: 'assets/captured.jpeg',
    description: `
        You must have had too much mead, or perhaps picked a fight you shouldn't have, you have awoken to find yourself in a poorly lit dungeon!
    `,
    choices: [{
        id: 'bribe',
        description: 'Call for a guard and offer them a bribe to be freed!',
        result1: 'You bribe your way out',
        result2: 'You do not have the coin! here have a beating for free!',
        hp: -40,
        gold: -50
    }, {
        id: 'escape',
        description: 'Check the bars and windows for weaknesses!',
        result: 'The bars appear solid, but wait! you find two loose bars in the window, filed down form a past prisoner. You crawl through the gap in the window bars an in the process tear your coin purse! As you struggle to make it the rest of the way out you realize you are several stories up and free fall to the ground!',
        hp: -50,
        gold: -50
    }, {
        id: 'sing',
        description: 'sing those jailhouse blues out to the darkness',
        result: 'A guard approaches weeping, You have to beautiful and soulful a voice to be in this place, he lets you go with some bead and some coins to make a break for it.',
        hp: 15,
        gold: 15
    }]
};

const quests = [
    damsel, 
    bard,
    captured,
];

export default quests;