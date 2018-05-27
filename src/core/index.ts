/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */

/**
 * generate an empty 2D array of matrices.
 * such as `
 *  [
 *    [0,0,0],
 *    [0,0,0],
 *    [0,0,0]
 *  ]
 * `
 * @param m number of rows of matrices
 * @param n number of columns of matrices
 */
export const generateMatrixArray = (m: number, n: number): number[][] => {
    const matrixArray: number[][] = [];
    for (let i = 0; i < m; i++) {
        matrixArray[i] = [];
        for (let j = 0; j < n; j++) {
            matrixArray[i][j] = 0;
        }
    }
    return matrixArray;
};

/**
 * generate a spiral 2D array of matrices.
 * such as.
 * [
 *   [1, 2,3,4]
 *   [10,0,0,5],
 *   [9, 8,7,6]
 * ]
 * @param matrixArray empthy 2D array of matrices.
 * @param rows ending row index
 * @param cols ending column index
 * @param needSpiralCircleNumber custom the circle number of spiral matrix.
 */
export const generateSpiralMatrixArray = (matrixArray: number[][], rows: number, cols: number, needSpiralCircleNumber?: number) => {
    const spiralCircleNumber = needSpiralCircleNumber || Math.round(Math.min(rows, cols) / 2);
    const numberLength = rows * cols;
    let runCounter = 1; // counter
    for (let circleIndex = 0 ; circleIndex < spiralCircleNumber; circleIndex ++) {
        // print the first row
        for (let i = circleIndex; i < cols - circleIndex; i ++) {
            if (runCounter <= numberLength) {
                matrixArray[circleIndex][i] = runCounter ++;
            } else {
                return matrixArray;
            }
        }
        // print the last column
        for (let i = circleIndex + 1; i < rows - 1 - circleIndex; i ++) {
            if (runCounter <= numberLength) {
                matrixArray[i][cols - 1 - circleIndex] = runCounter ++;
            } else {
                return matrixArray;
            }
        }
        // print the last row
        for (let i = cols - 1 - circleIndex ; i > circleIndex; i --) {
            if (runCounter <= numberLength) {
                matrixArray[rows - 1 - circleIndex][i] = runCounter ++;
            } else {
                return matrixArray;
            }
        }
        // print the first column
        for (let i = rows - 1 - circleIndex; i > circleIndex; i --) {
            if (runCounter <= numberLength) {
                matrixArray[i][circleIndex] = runCounter ++;
            } else {
                return matrixArray;
            }
        }
    }
    return matrixArray;
};

// /**
//  * get the 2D array index of spiral-matrix-array according to elment.
//  * @param spiralMatrixArray a spiral 2D array of matrices.
//  * @param element the element of current matrices.
//  */
// export const FindIndex = (spiralMatrixArray: number[][], element: number): { x: number, y: number} => {
//     for (let i = 0 ; i < spiralMatrixArray.length ; i ++) {
//         const rows = spiralMatrixArray[i];
//         for (let j = 0; j < rows.length; j ++) {
//             if (rows[j] === element) {
//                 return {
//                     x: i,
//                     y: j,
//                 };
//             }
//         }
//     }
// };

/**
 * get the element number of spiral-matrix-array.
 * @param spiralMatrixArray a spiral 2D array of matrices.
 */
export const getElementNumber = (spiralMatrixArray: number[][]): number => {
    const columnLength = spiralMatrixArray.length;
    const rowLength = spiralMatrixArray[0].length;
    return (rowLength + columnLength - 2) * 2;
};

/**
 * slots matrix
 * @param rows number of rows of slots
 * @param cols number of column of slots
 */
export const getSpiralMatrixArray = (rows: number, cols: number): number[][] => {
    const matrixArray = generateMatrixArray(rows, cols);
    return generateSpiralMatrixArray(matrixArray, rows, cols, 1);
};
