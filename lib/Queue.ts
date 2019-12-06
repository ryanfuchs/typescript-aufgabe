import { IDataStructure } from "./IDataStructure";

export class Queue<T> implements IDataStructure {
    private store : T[] = [];
    
    peek() : T {
        return this.store.filter(x => true).shift();
    }
    
    enqueue(value : T) {
        this.store.push(value); 
    }
    
    public size(): number {
        return this.store.length;
    }
    poll() {
        return this.store.shift();
    }
}