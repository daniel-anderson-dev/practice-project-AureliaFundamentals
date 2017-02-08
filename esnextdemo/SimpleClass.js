import {MyBase} from "MyBase";
import {compute, val2} from "someOtherModule";

export class SimpleClass extends MyBase {
    constructor() {
        super();
        this.name = "Barney";
    }

    get message() {
        let threshold = 40;
        let result = `Hello ${this.name}, are you ${5+threshold} years old?`;
        return result;
    }

    calculate ()
    {
        return compute() + val2;
    }
}