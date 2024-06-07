const matrixToSpiralString = require('../tasks/second_task.js');

describe('matrixToSpiralString', () => {
    test('returns the spiral order of a 3x3 matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const result = matrixToSpiralString(matrix);
        expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    test('returns the spiral order of a 4x4 matrix', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
        const result = matrixToSpiralString(matrix);
        expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    });

    test('returns the spiral order of a 3x4 matrix', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ];
        const result = matrixToSpiralString(matrix);
        expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });

    test('returns an empty array for an empty matrix', () => {
        const matrix = [];
        const result = matrixToSpiralString(matrix);
        expect(result).toEqual([]);
    });

    test('returns the spiral order of a 1x4 matrix', () => {
        const matrix = [
            [1, 2, 3, 4]
        ];
        const result = matrixToSpiralString(matrix);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('returns the spiral order of a 4x1 matrix', () => {
        const matrix = [
            [1],
            [2],
            [3],
            [4]
        ];
        const result = matrixToSpiralString(matrix);
        expect(result).toEqual([1, 2, 3, 4]);
    });
});
