function getManipulator() {
    let string = "";

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.substr(n);
    }

    function removeEnd(n) {
        string = string.substring(0, string.length - n);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let myManipulator = getManipulator();
myManipulator.append("hello0");
myManipulator.print();