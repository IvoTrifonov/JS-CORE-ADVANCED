function solve(commands) {
    let list = (function () {
        let commands = [];
        const add = (command) => {
            commands.push(command);   
        }
    
        const remove = (command) => {
            commands = commands
            .filter(c => c !== command);
        }
    
        const print = () => { console.log(commands.join(',')) }
    
        return {
            add,
            remove,
            print
        }
    })();

    commands
        .map(x => x.split(' '))
        .forEach(([command, str]) => list[command](str));
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);



