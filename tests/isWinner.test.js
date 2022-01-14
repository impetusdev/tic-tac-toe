const { expect } = require('@jest/globals');
const { isWinner, miniMax } = require('../js/miniMax.js');

const board1 = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'X'],
    ['empty', 'empty', 'empty']
];

test('testing isWinner when board not winning', () => {
    expect(isWinner(0, 0, board1)).toBe(false);
})

const board2 = [
    ['empty', 'empty', 'X'],
    ['empty', 'empty', 'X'],
    ['empty', 'empty', 'X']
];

test('testing isWinner when last col is matching', () => {
    expect(isWinner(2, 0, board2)).toBe(true);
})

const board3 = [
    ['empty', 'empty', 'O'],
    ['empty', 'empty', 'O'],
    ['X', 'X', 'X']
];

test('testing isWinner when last col is matching', () => {
    expect(isWinner(1, 2, board3)).toBe(true);
})

const board4 = [
    ['X', 'empty', 'empty'],
    ['empty', 'X', 'empty'],
    ['empty', 'empty', 'X']
];

test('testing isWinner top left diagonal is matching', () => {
    expect(isWinner(1, 1, board4)).toBe(true);
})

const board5 = [
    ['X', 'empty', 'empty'],
    ['empty', 'empty', 'X'],
    ['empty', 'empty', 'X']
];

test('testing isWinner when no matches', () => {
    expect(isWinner(2, 2, board5)).toBe(false);
})

const board6 = [
    ['empty', 'empty', 'X'],
    ['empty', 'X', 'empty'],
    ['X', 'empty', 'X']
];

test('testing isWinner top right diagonal is matching', () => {
    expect(isWinner(1, 1, board6)).toBe(true);
})