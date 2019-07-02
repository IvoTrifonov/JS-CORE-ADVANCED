function solve(array) {
    const buildRect = (width, height) => {
        return {
            width,
            height,
            area() {
                return this.width * this.height;
            },
            compareTo(other) {
                return  other.area() - this.area() || (other.width - this.width); 
            },
        }
    };

    return Array.from(array)
    .map(rec => buildRect(+rec[0], +rec[1]))
    .sort((a, b) => a.compareTo(b));
}

console.log(solve([[10,5],[5,12]]));

