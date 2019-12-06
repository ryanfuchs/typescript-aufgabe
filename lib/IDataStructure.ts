export interface IDataStructure {
    size(): number;
    enqueue(value :any) :any;
    peek() :any;
    poll() :any;
    isEmpty(): boolean;
}