function Node(value) {
    return {
        value:value,
        next:null
    };
}
function LinkedList() {
    return {
        head: null,
        iterate: function (callback) {
            let current=this.head;
            while (current!==null) {
                callback(current.value);
                current=current.next;
            }
        },
        append: function (value) {
        const newNode=Node(value);
            if (!this.head) {
                this.head=newNode;
            } else {
                let current=this.head;
                while (current.next !==null) {
                    current=current.next;
                }
                current.next=newNode;
            }
        },
        find: function (value) {
            let current=this.head;
            while (current !== null) {
                if (current.value===value) {
                    return current;
                }
                current=current.next;
            }
            return null; 
        },
        delete: function (value) {
            if (!this.head) {
                return;
            }
            if (this.head.value===value) {
                this.head=this.head.next;
                return;
            }
            let current=this.head;
            while (current.next !== null) {
                if (current.next.value===value) {
                    current.next=current.next.next;
                    return;
                }
                current=current.next;
            }
        }
    };
}
const linkedList=LinkedList();
linkedList.append(34);
linkedList.append(93);
linkedList.append(1000);
console.log("Iterating over the linked list:");
linkedList.iterate((value) => console.log(value));
console.log("Finding value 1000:");
const foundNode = linkedList.find(1000);
console.log(foundNode ?"Value found":"Value not found");
console.log("Deleting value 93:");
linkedList.delete(93);
console.log("Iterating over the modified linked list:");
linkedList.iterate((value) => console.log(value)); 