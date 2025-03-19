function calculateArea(shape, ...dimensions) {
    switch (shape) {
        case 'circle':
            const [radius] = dimensions;
            return Math.PI * (radius * radius);
        case 'square':
            const [side] = dimensions;
            return side * side;
        case 'rectangle':
            const [width, height] = dimensions;
            return width * height;
        default:
            throw new Error('Unsupported shape');
    }
}

module.exports = calculateArea;