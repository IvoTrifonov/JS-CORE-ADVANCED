function sortedList() {
    return {
        list: [],
        size: 0,
        add: function(element) {
            this.list.push(element);
            this.size++;
            this.list = this.list.sort((a, b) => a - b);
        },
        remove: function(index) {
            if (index < 0 || index >= this.list.length) {
                throw new TypeError('Invalid index!')
            }

            this.list.splice(index, 1);
            this.size--;
            this.list = this.list.sort((a, b) => a - b);
        },
        get: function(index) {
            if (index < 0 || index >= this.list.length) {
                throw new TypeError('Invalid index!')
            }

            return this.list[index];
        }
    }
};

let myList = sortedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(18);
console.log(myList.get(2));
