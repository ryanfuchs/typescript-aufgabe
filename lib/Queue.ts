import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private store : any[] = [];

    public size(): number {
        return this.store.length;
    }
}