let attributes = ["Electric", "Fast"];

let cars = ["Tesla", "Porsche","rover"];

for (let first of attributes) {
    for (let second of cars) {
        console.log(first, second);
    }
}