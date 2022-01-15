const { expect } = require('@jest/globals');
const { isWinner, findBestMove } = require('../js/miniMax.js');

const board3 = [
    ['X', 'O', 'X'],
    ['X', 'X', '_'],
    ['O', 'O', '_']
];

test('check if minimax Algorimthm selects right move #3', () => {
    expect(findBestMove(board3, 7)).toStrictEqual({ x: 2, y: 2 });
});

const board4 = [
    ['X', 'O', 'X'],
    ['X', 'O', '_'],
    ['O', '_', 'X']
];

test('check if minimax Algorimthm selects right move #4', () => {
    expect(findBestMove(board4, 7)).toStrictEqual({ x: 1, y: 2 });
});

const board5 = [
    ['X', '_', 'X'],
    ['_', 'O', 'O'],
    ['O', 'X', 'X']
];

test('check if minimax Algorimthm selects right move #5', () => {
    expect(findBestMove(board5, 7)).toStrictEqual({ x: 0, y: 1 });
});

const board6 = [
    ['X', '_', 'O'],
    ['X', '_', 'O'],
    ['O', 'X', 'X']
];

test('check if minimax Algorimthm selects right move #6', () => {
    expect(findBestMove(board6, 7)).toStrictEqual({ x: 1, y: 1 });
});

const board7 = [
    ['X', '_', 'O'],
    ['X', '_', '_'],
    ['O', '_', 'X']
];

test('check if minimax Algorimthm selects right move #7', () => {
    expect(findBestMove(board7, 5)).toStrictEqual({ x: 1, y: 1 });
});

const board8 = [
    ['_', '_', '_'],
    ['_', '_', 'X'],
    ['_', '_', '_']
];

test('check if minimax Algorimthm selects right move #8', () => {
    expect(findBestMove(board8, 1)).toStrictEqual({ x: 1, y: 1 });
});

const board9 = [
    ['O', 'X', 'O'],
    ['_', 'X', '_'],
    ['X', '_', '_']
];

test('check if minimax Algorimthm selects right move #9', () => {
    expect(findBestMove(board9, 5)).toStrictEqual({ x: 1, y: 2 });
});