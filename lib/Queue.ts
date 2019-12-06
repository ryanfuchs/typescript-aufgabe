import { IDataStructure } from "./IDataStructure";

export class Queue<T> implements IDataStructure {
    private store : T[] = [];
    
    public size(): number {
        return this.store.length;
    }
    peek() : T {
        return this.store.filter(x => true).shift();
    } 
    enqueue(value : T) {
        this.store.push(value); 
    }
    poll() {
        return this.store.shift();
    }
    isEmpty(): boolean {
        return this.store.length == 0;
    }
}