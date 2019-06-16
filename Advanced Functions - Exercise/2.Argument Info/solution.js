function solve() {
    let typesOccurances = {};

    for (const argument of arguments) {
        let argType = typeof argument;
        let argValue = argument;
        console.log(`${argType}: ${argValue}`);

        typesOccurances[argType] ? typesOccurances[argType]++ : typesOccurances[argType] = 1;
    }

    typesOccurances = Object.entries(typesOccurances).sort((a, b) => {
        return b[1] - a[1];
    }).forEach(element => {
        console.log(`${element[0]} = ${element[1]}`)
    });
}

solve(42, 'cat', 15, 'kitten', 'tomcat');