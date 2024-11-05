const LinkedList = () =>{
    let head = null;

    const Node = (value) => {
        return{
            value:value,
            next: null,
        }
    };

    const pushNode = (value) =>{
        const newNode = Node(value);

        if(!head){
            head = newNode;
        }else{
            let current = head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    };

    const popNode = () =>{
        
        if(!head){
            console.log('The list is empty');
            return;
        }

        if(!head.next){
            head = null;
            return;
        }

        let current = head;

        while(current.next && current.next.next){
            current = current.next;
        }
        current.next = null;
    };

    const size = () =>{
        let current = head;
        let count = 0;

        while(current){
            count++;
            current = current.next;
        }

        return count;
    };

    const getHead = () => {
        return head;
    };

    const tail = () => {
        let current = head;
        while(current.next){
            current = current.next;
        }
        return current;
    }

    const atIndex = (index) =>{
        let current = head;
        let count = 0;

        while(current && count < index){
            current = current.next;
            count ++;
        }
        return current;
    }

    const contains = (value) => {
        let current = head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    };

    const find = (value) => {
        let count = 0;
        let current = head;

        while(current){
            if(current.value === value){
                return count;
            }
            count++;
            current = current.next;
        }
        return null;
    };

    const toString = () => {
        let current = head;
        let printValues = '';
        while(current){
            printValues += `(${current.value}) ->`
            current = current.next;
        }
        printValues += 'null';
        return printValues;
    };

    const insertAt = (value, index) => {
        const newNode = Node(value);
        if(index === 0){
            newNode.next = head;
            head = newNode;
            return;
        }

        let current = head;
        let count = 0;

        while (current && count < index - 1) {
            current = current.next;
            count++;
        }

        if(!current){
            console.log('Invalid index');
            return;
        }

        newNode.next = current.next;
        current.next = newNode;
    };

    const removeAt = (index) => {

        if(index === 0){
            if(!head) return;
            head = head.next;
            return;
        }

        let current = head;
        let count = 0;

        while (current && count < index - 1) {
            current = current.next;
            count++;
        }

        if(!current || !current.next){
            console.log('Invalid index');
            return;
        }

        current.next = current.next.next;

    };

    return{
        pushNode,
        popNode,
        size,
        getHead,
        tail,
        atIndex,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}

export default LinkedList;
