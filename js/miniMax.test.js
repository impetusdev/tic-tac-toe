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

// const board3 = [
//     ['X', 'O', 'X'],
//     ['X', 'X', 'empty'],
//     ['O', 'O', 'empty']
// ];

// test('check if minimax Algorimthm selects right move #3', () => {
//     expect(miniMax.findBestMove(board3, 7)).toStrictEqual({ x: 2, y: 2 });
// });

// const board4 = [
//     ['X', 'O', 'X'],
//     ['X', 'O', 'empty'],
//     ['O', 'empty', 'X']
// ];

// test('check if minimax Algorimthm selects right move #4', () => {
//     expect(miniMax.findBestMove(board4, 7)).toStrictEqual({ x: 1, y: 2 });
// });


// const board5 = [
//     ['X', 'empty', 'X'],
//     ['empty', 'O', 'O'],
//     ['O', 'X', 'X']
// ];

// test('check if minimax Algorimthm selects right move #5', () => {
//     expect(miniMax.findBestMove(board5, 7)).toStrictEqual({ x: 0, y: 1 });
// });

// const board6 = [
//     ['X', 'empty', 'O'],
//     ['X', 'empty', 'O'],
//     ['O', 'X', 'X']
// ];

// test('check if minimax Algorimthm selects right move #6', () => {
//     expect(miniMax.findBestMove(board6, 7)).toStrictEqual({ x: 1, y: 1 });
// });

const board7 = [
    ['X', 'empty', 'O'],
    ['X', 'empty', 'empty'],
    ['O', 'empty', 'X']
];

test('check if minimax Algorimthm selects right move #7', () => {
    expect(miniMax.findBestMove(board7, 5)).toStrictEqual({ x: 1, y: 1 });
});