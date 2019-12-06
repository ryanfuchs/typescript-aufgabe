import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { DataStructures } from "../lib/DataStructures";
import { DataStructureFactory } from "../lib/DataStructureFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("has item", () => {
            const testee = new Queue();
            testee.enqueue("first");
            const result = testee.size();
            expect(result).to.equal(1);
        });

        it("has enqueued item", () => {
            const testee = new Queue();
            const enqueueItem = "first";
            testee.enqueue(enqueueItem);
            const result = testee.peek();
            expect(result).to.equal(enqueueItem);
        });

        it("hans enqued item with defiend Queue", () => {
            const testee = new Queue<String>();
            //const enqueueItem = "first";
            testee.enqueue("first");
            const result = testee.peek();
            expect(result).to.equal("first");
        });

        it("remove first item", () => {
            const testee = new Queue();
            const enqueueItem = "first";
            testee.enqueue(enqueueItem);
            testee.enqueue("second");
            const result = testee.poll();
            expect(result).to.equal(enqueueItem);
            expect(testee.size()).to.equal(1);
        });
        it("is empty", () => {
            const testee = new Queue();
            expect(testee.isEmpty()).to.be.true;
        });
    })
    
    describe("Stack", () => {
        it("has size", () => {
            const testee = new Stack();
            const result = testee.size();
            expect(result).to.equal(0);
        });

        it("has item", () => {
            const testee = new Stack();
            testee.enqueue("first");
            const result = testee.size();
            expect(result).to.equal(1);
        });

        it("has enqueued item", () => {
            const testee = new Stack();
            const enqueueItem = "first";
            testee.enqueue(enqueueItem);
            const result = testee.peek();
            expect(result).to.equal(enqueueItem);
        });

        it("remove last added item", () => {
            const testee = new Stack();
            const enqueueItem = "second";
            testee.enqueue("first");
            testee.enqueue(enqueueItem);
            const result = testee.poll();
            expect(result).to.equal(enqueueItem);
            expect(testee.size()).to.equal(1);
        });

        it("is empty", () => {
            const testee = new Stack();
            expect(testee.isEmpty()).to.be.true;
        });
    });
    //node node_modules/mocha/bin/mocha -r ts-node/register **/*.tests.ts
})