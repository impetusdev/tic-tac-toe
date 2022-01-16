const { expect } = require('@jest/globals');
const { isWinner, findBestMove } = require('../js/miniMax.js');

const board9 = [
    ['O', 'X', 'O'],
    ['_', 'X', '_'],
    ['X', '_', '_']
];

test('check if minimax Algorimthm selects right move #9', () => {
    expect(findBestMove(board9, 5)).toStrictEqual({ x: 1, y: 2 });
});