function matrixToSpiralString(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    const directions = ['right', 'down', 'left', 'up'];
    let directionIndex = 0;

    while (top <= bottom && left <= right) {
        const direction = directions[directionIndex % 4];

        switch (direction) {
            case 'right':
                for (let i = left; i <= right; i++) {
                    result.push(matrix[top][i]);
                }
                top++;
                break;

            case 'down':
                for (let i = top; i <= bottom; i++) {
                    result.push(matrix[i][right]);
                }
                right--;
                break;

            case 'left':
                if (top <= bottom) {
                    for (let i = right; i >= left; i--) {
                        result.push(matrix[bottom][i]);
                    }
                    bottom--;
                }
                break;

            case 'up':
                if (left <= right) {
                    for (let i = bottom; i >= top; i--) {
                        result.push(matrix[i][left]);
                    }
                    left++;
                }
                break;
        }

        directionIndex++;
    }

    return result
}


module.exports = matrixToSpiralString;
