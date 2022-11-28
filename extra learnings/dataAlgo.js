console.log("yo!");

// * QUEUES

/*

class Queue{

    constructor(){

        let collection = [];

        this.print = function() {

            console.log(collection);

        };

        this.enqueue = function(element) {

            collection.push(element);

        };

        this.dequeue = function() {

            console.log(collection.shift());

        };

        this.front = function() {

            console.log(collection[0]);

        };

        this.size = function() {

            console.log(collection.length);

        }

        this.isEmpty = function() {

            console.log(collection.length === 0);

        };

    }
}

const q = new Queue ();

q.enqueue(1);
q.enqueue(45);
q.enqueue("hello");
q.enqueue("world");
q.enqueue(true);

q.print();

q.dequeue();

q.front();

q.print();

q.size();

q.isEmpty();

*/

/*

class PriorityQueue {

    constructor(){

        let collection = [];

        this.printCollection = () => {

            console.log(collection);

        };

        this.enqueue = (element) => {

            if (collection.length === 0) {

                collection.push(element);

            } else {

                let added = false;

                for (let i = 0; i < collection.length; i++) {

                    if(element[1] < collection[i][1]){

                        collection.splice(i,0,element);

                        added = true;

                        break;

                    }
                }

                if (!added){

                    collection.push(element);
    
                }
            }

        }

        this.dequeue = () => {
            
            let value = collection.shift();
            console.log(value[0]);

        }

        this.front = () => {

            let value = collection[0];
            console.log(value[0]);

        }

        this.size = () => {

            console.log(collection.length);

        }

        this.isEmpty = () => {

            console.log(collection.length === 0);

        }
    };
}

const pq = new PriorityQueue();

pq.enqueue(["Dahl Tamares", 3]);
pq.enqueue(["Xyrelle Beltran", 1]);
pq.enqueue(["Jem Garing", 2]);
pq.enqueue(["Ralph Ocba", 5]);
pq.enqueue(["Joey Hipolito", 2]);
pq.enqueue(["Jelly Lumactud", 1]);

pq.printCollection();

pq.enqueue(["Jasper Villarosa", 3]);

pq.dequeue();
pq.dequeue();

pq.printCollection();

pq.size();

pq.front();

*/