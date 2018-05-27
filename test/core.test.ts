/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */

import { generateMatrixArray, generateSpiralMatrixArray, getSpiralMatrixArray } from '../src/core';

test('generate an empty 2D array of matrices', () => {
    expect(generateMatrixArray(0, 0)).toEqual(expect.arrayContaining([]));
    expect(generateMatrixArray(4, 4)).toEqual(expect.arrayContaining([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]));
    expect(generateMatrixArray(4, 3)).toEqual(expect.arrayContaining([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]));
});

test('generate a spiral 2D array of matrices', () => {
    expect(generateSpiralMatrixArray(generateMatrixArray(0, 0), 0, 0)).toEqual(expect.arrayContaining([]));
    expect(generateSpiralMatrixArray(generateMatrixArray(3, 3), 3, 3)).toEqual(expect.arrayContaining([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
    ]));
    expect(generateSpiralMatrixArray(generateMatrixArray(4, 3), 4, 3)).toEqual(expect.arrayContaining([
        [1,  2,  3],
        [10, 11, 4],
        [9,  12, 5],
        [8,  7,  6],
    ]));
    expect(generateSpiralMatrixArray(generateMatrixArray(3, 4), 3, 4)).toEqual(expect.arrayContaining([
        [1,  2,  3,  4],
        [10, 11, 12, 5],
        [9,  8,  7,  6],
    ]));
    expect(getSpiralMatrixArray(3, 4)).toEqual(expect.arrayContaining([
        [1,  2, 3, 4],
        [10, 0, 0, 5],
        [9,  8, 7, 6],
    ]));

});
