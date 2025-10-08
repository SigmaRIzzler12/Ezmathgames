// This file is your master list of games.
// To add a new game, simply add a new object to this array.
//
// Template:
// {
//     id: 'folder-name-of-your-game', // This MUST match the folder name in the `games` directory
//     title: 'Display Name of The Game',
//     image: 'path/to/your/game/thumbnail.png' // You can use https://placehold.co for placeholders
// },

const games = [
    {
        id: 'snake',
        title: 'Snake',
        image: 'https://placehold.co/400x300/1F2937/E0E0E0?text=Snake'
    },
    {
        id: 'flappy-bird', // Example: make a folder named 'flappy-bird' in the 'games' directory
        title: 'Flappy Bird',
        image: 'https://placehold.co/400x300/1F2937/E0E0E0?text=Flappy+Bird'
    },
    {
        id: '2048',
        title: '2048',
        image: 'https://placehold.co/400x300/1F2937/E0E0E0?text=2048'
    },
    {
        id: 'tetris',
        title: 'Tetris',
        image: 'https://placehold.co/400x300/1F2937/E0E0E0?text=Tetris'
    },
    // -- This is the new entry for your test game --
    {
        id: 'test',  // This ID matches your 'games/test/' folder
        title: 'Test Game (Baldi)', // This is the title that will show on the card
        image: 'https://placehold.co/400x300/1F2937/E0E0E0?text=Test'
    },
    // ... You can add more games here
];
