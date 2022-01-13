const { expect } = require('@jest/globals');
const miniMax = require('./miniMax');

const board = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty']
];

// test('is Winner returns false on empty board', () => {
//     expect(miniMax.isWinner(0, 0, board)).toBe(false);
// });

// const board2 = [
//     ['X', 'X', 'X'],
//     ['empty', 'empty', 'empty'],
//     ['empty', 'empty', 'empty']
// ];

// test('is Winner returns true on a board with top row of X', () => {
//     expect(miniMax.isWinner(0, 0, board2)).toBe(true);
// });

const board3 = [
    ['X', 'O', 'X'],
    ['X', 'X', 'empty'],
    ['O', 'O', 'empty']
];

test('check if find best move can select the best move amongst 3 empty slots', () => {
    expect(miniMax.findBestMove(board3)).toBe({ x: 2, y: 2 });
});