import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    enqueue(value) {
        this.store.push(value);
    }
    private store : any[] = [];

    public size(): number {
        return this.store.length;
    }
}