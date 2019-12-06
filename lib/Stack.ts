import {IDataStructure} from "./IDataStructure";

export class Stack implements IDataStructure {

    private store: any[] = [];

    public size(): number {
        return this.store.length;
}
}