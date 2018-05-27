/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 *
 */

import { getSpiralMatrixArray } from '../../src/core';

const array = getSpiralMatrixArray(4, 4);
let matrix = '';
for (const item of array) {
    for (const item2 of item) {
        matrix += `<span class="number">${item2}</span>`;
    }
    matrix += '<br />';
}
const matrixElement = document.createElement('div');
matrixElement.innerHTML = matrix;
document.body.appendChild(matrixElement);
