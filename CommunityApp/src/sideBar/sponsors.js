import {computedFrom} from 'aurelia-framework';

export class Sponsors
{
    constructor()
    {
        this.message = 'Test Message';
        setTimeout(() => this.message = 'Changed after binding.', 3000);
        this.mapCollection = new window.Map();
        this.mapCollection.set('a', 'Alpha');
        this.mapCollection.set('b', 'Bravo');
        this.mapCollection.set('c', 'Charlie');
        this.mapCollection.set('d', 'Delta');

        this.person = new Person();
        this.person.firstName = 'First';
        this.person.lastName = 'Last'
    }

    doSomething(passedMessage)
    {
        console.log(passedMessage);
    }
}

class Person {
    firstName: 'Daniel';
    lastName: 'Anderson';

    @computedFrom("firstName", "lastName")
    get fullName() { return this.firstName + " " + this.lastName; }
}