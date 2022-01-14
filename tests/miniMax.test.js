const { expect } = require('@jest/globals');
const { isWinner, findBestMove } = require('../js/miniMax.js');

const board3 = [
    ['X', 'O', 'X'],
    ['X', 'X', 'empty'],
    ['O', 'O', 'empty']
];

test('check if minimax Algorimthm selects right move #3', () => {
    expect(findBestMove(board3, 7)).toStrictEqual({ x: 2, y: 2 });
});

const board4 = [
    ['X', 'O', 'X'],
    ['X', 'O', 'empty'],
    ['O', 'empty', 'X']
];

test('check if minimax Algorimthm selects right move #4', () => {
    expect(findBestMove(board4, 7)).toStrictEqual({ x: 1, y: 2 });
});

const board5 = [
    ['X', 'empty', 'X'],
    ['empty', 'O', 'O'],
    ['O', 'X', 'X']
];

test('check if minimax Algorimthm selects right move #5', () => {
    expect(findBestMove(board5, 7)).toStrictEqual({ x: 0, y: 1 });
});

const board6 = [
    ['X', 'empty', 'O'],
    ['X', 'empty', 'O'],
    ['O', 'X', 'X']
];

test('check if minimax Algorimthm selects right move #6', () => {
    expect(findBestMove(board6, 7)).toStrictEqual({ x: 1, y: 1 });
});

const board7 = [
    ['X', 'empty', 'O'],
    ['X', 'empty', 'empty'],
    ['O', 'empty', 'X']
];

test('check if minimax Algorimthm selects right move #7', () => {
    expect(findBestMove(board7, 5)).toStrictEqual({ x: 1, y: 1 });
});

const board8 = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'X'],
    ['empty', 'empty', 'empty']
];

test('check if minimax Algorimthm selects right move #8', () => {
    expect(findBestMove(board8, 1)).toStrictEqual({ x: 1, y: 1 });
});