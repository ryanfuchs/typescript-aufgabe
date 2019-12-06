import {IDataStructure} from "./IDataStructure";

export class Stack implements IDataStructure {

    private store: any[] = [];

    public size(): number {
        return this.store.length;
}

    enqueue(value : any) {
        this.store.push(value)
    }


    peek() {
        return this.store.filter(x => true).pop();
    }

    poll() {
        return this.store.pop();
    }

}