import {MyBase} from "MyBase";

export class SimpleClass extends MyBase {
    constructor() {
        super();
        this.name = "Barney";
    }

    get message() {
        return "Hello es2015";
    }

    calculate ()
    {
        return 42;
    }
}